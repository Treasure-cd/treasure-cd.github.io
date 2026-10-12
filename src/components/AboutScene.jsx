import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const COLORS = {
  core: 0x8ab3e6,   // matches --color-sky-mountain
  accent: 0xb8d4f0, // matches --color-sky-cloud
  line: 0xffffff,
}

export default function AboutScene() {
  const mountRef = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(min-width: 1024px)').matches) return

    const mount = mountRef.current
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
    camera.position.z = 8

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    scene.add(new THREE.AmbientLight(0xffffff, 0.9))
    const key = new THREE.DirectionalLight(0xffffff, 1.8)
    key.position.set(3, 4, 5)
    scene.add(key)

    const group = new THREE.Group()
    scene.add(group)

    // faceted core + crisp edge lines
    const coreGeo = new THREE.IcosahedronGeometry(1.7, 1)
    const core = new THREE.Mesh(
      coreGeo,
      new THREE.MeshStandardMaterial({ color: COLORS.core, flatShading: true, roughness: 0.45 })
    )
    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(coreGeo),
      new THREE.LineBasicMaterial({ color: COLORS.line, transparent: true, opacity: 0.55 })
    )
    group.add(core, edges)

    // thin tilted ring
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(2.7, 0.02, 8, 120),
      new THREE.MeshBasicMaterial({ color: COLORS.accent })
    )
    ring.rotation.x = Math.PI / 2.4
    group.add(ring)

    // small shapes orbiting on the ring's plane
    const orbiters = []
    const shapeGeo = new THREE.OctahedronGeometry(0.2)
    const shapeMat = new THREE.MeshStandardMaterial({ color: COLORS.accent, flatShading: true })
    for (let i = 0; i < 5; i++) {
      const m = new THREE.Mesh(shapeGeo, shapeMat)
      m.userData.angle = (i / 5) * Math.PI * 2
      ring.add(m)
      orbiters.push(m)
    }

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = mount
      if (!w || !h) return
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.render(scene, camera)
    }
    const ro = new ResizeObserver(resize)
    ro.observe(mount)

    // gentle tilt toward the cursor
    const pointer = { x: 0, y: 0 }
    const onMove = (e) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    if (!reduceMotion) window.addEventListener('pointermove', onMove)

    let raf = 0
    let visible = true
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
    })
    io.observe(mount)

    const tick = (t) => {
      raf = requestAnimationFrame(tick)
      if (!visible) return
      const time = t * 0.001
      group.rotation.y = time * 0.25 + pointer.x * 0.5
      group.rotation.x += (pointer.y * 0.35 - group.rotation.x) * 0.05
      group.position.y = Math.sin(time * 0.8) * 0.15
      orbiters.forEach((m) => {
        const a = m.userData.angle + time * 0.4
        m.position.set(Math.cos(a) * 2.7, Math.sin(a) * 2.7, 0)
        m.rotation.x = m.rotation.y = time
      })
      renderer.render(scene, camera)
    }
    if (!reduceMotion) raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      ro.disconnect()
      io.disconnect()
      scene.traverse((o) => {
        o.geometry?.dispose()
        o.material?.dispose()
      })
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="w-full aspect-square max-w-md" aria-hidden="true" />
}
