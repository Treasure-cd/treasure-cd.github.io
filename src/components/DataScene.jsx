import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const COLORS = {
  bar: 0x7fc4a8,       // matches --color-sky-mountain
  highlight: 0x064e3b, // matches --color-accent
  ground: 0xb9e3d4,    // matches --color-sky-cloud
}

const GRID = 6
const SPACING = 0.85
const BAR_SIZE = 0.6
const HIGHLIGHTED = new Set([4, 13, 22, 31])

export default function DataScene() {
  const mountRef = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(min-width: 1024px)').matches) return

    const mount = mountRef.current
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100)
    camera.position.set(6, 6, 6)
    camera.lookAt(0, 0.6, 0)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    scene.add(new THREE.AmbientLight(0xffffff, 0.9))
    const key = new THREE.DirectionalLight(0xffffff, 1.8)
    key.position.set(3, 6, 4)
    scene.add(key)

    const group = new THREE.Group()
    scene.add(group)

    // thin base plane
    const extent = (GRID - 1) * SPACING + BAR_SIZE + 0.6
    const ground = new THREE.Mesh(
      new THREE.BoxGeometry(extent, 0.06, extent),
      new THREE.MeshStandardMaterial({ color: COLORS.ground, flatShading: true })
    )
    ground.position.y = -0.03
    group.add(ground)

    // 6x6 bars as one instanced mesh; unit-height boxes sitting on y=0
    const count = GRID * GRID
    const barGeo = new THREE.BoxGeometry(BAR_SIZE, 1, BAR_SIZE)
    barGeo.translate(0, 0.5, 0)
    const bars = new THREE.InstancedMesh(
      barGeo,
      new THREE.MeshStandardMaterial({ color: 0xffffff, flatShading: true, roughness: 0.5 }),
      count
    )
    const base = new THREE.Color(COLORS.bar)
    const hi = new THREE.Color(COLORS.highlight)
    const cells = []
    for (let i = 0; i < count; i++) {
      const gx = i % GRID
      const gz = Math.floor(i / GRID)
      cells.push({
        x: (gx - (GRID - 1) / 2) * SPACING,
        z: (gz - (GRID - 1) / 2) * SPACING,
        phase: gx * 0.6 + gz * 0.6,
      })
      bars.setColorAt(i, HIGHLIGHTED.has(i) ? hi : base)
    }
    group.add(bars)

    // a few floating data points above highlighted bars
    const dotGeo = new THREE.SphereGeometry(0.1, 12, 12)
    const dotMat = new THREE.MeshStandardMaterial({ color: COLORS.highlight, flatShading: true })
    const dots = [...HIGHLIGHTED].map((i) => {
      const m = new THREE.Mesh(dotGeo, dotMat)
      group.add(m)
      return { mesh: m, cell: cells[i] }
    })

    const dummy = new THREE.Object3D()
    const update = (time) => {
      cells.forEach((c, i) => {
        const h = 0.9 + 0.7 * Math.sin(time * 0.9 - c.phase) + 0.3
        dummy.position.set(c.x, 0, c.z)
        dummy.scale.set(1, h, 1)
        dummy.updateMatrix()
        bars.setMatrixAt(i, dummy.matrix)
      })
      bars.instanceMatrix.needsUpdate = true
      dots.forEach(({ mesh, cell }, k) => {
        const h = 0.9 + 0.7 * Math.sin(time * 0.9 - cell.phase) + 0.3
        mesh.position.set(cell.x, h + 0.35 + Math.sin(time * 1.6 + k) * 0.08, cell.z)
      })
    }
    update(0)

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
      update(time)
      group.rotation.y = time * 0.15 + pointer.x * 0.4
      group.rotation.x += (pointer.y * 0.2 - group.rotation.x) * 0.05
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
      bars.dispose()
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="w-full aspect-square max-w-md" aria-hidden="true" />
}
