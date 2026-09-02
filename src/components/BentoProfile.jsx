import { SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiNextdotjs } from 'react-icons/si'
import { FaMapPin, FaPalette, FaTv, FaGraduationCap, FaCodeBranch } from 'react-icons/fa6'

export default function BentoProfile() {
  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-4 w-full h-[400px]">
      {/* Education / Status Card */}
      <div className="col-span-2 row-span-1 bg-ink/5 dark:bg-white/5 rounded-2xl p-5 border border-ink/10 flex flex-col justify-center transition-all hover:scale-[1.02]">
        <div className="flex items-center gap-4 text-ink/80">
          <div className="p-3 bg-blue-500/10 rounded-full text-blue-500">
            <FaGraduationCap size={24} />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-ink-muted">Current Status</p>
            <p className="font-medium text-lg">3rd Year CS at University of Uyo</p>
          </div>
        </div>
      </div>

 {/* Location Card*/}
    <div className="col-span-1 row-span-1 bg-transparent dark:bg-transparent rounded-2xl p-5 border border-ink/15 flex flex-col justify-between transition-all hover:scale-[1.02] hover:bg-ink/5">
        <FaMapPin className="text-blue-500" size={24} />
        <div>
          <p className="text-base font-medium">Uyo, Nigeria</p>
        </div>
      </div>

      {/* Philosophy Card */}
      <div className="col-span-1 row-span-2 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl p-5 border border-blue-500/20 flex flex-col justify-between transition-all hover:scale-[1.02]">
        <div className="flex items-center gap-3 text-blue-500">
          <FaCodeBranch size={22} />
        </div>

        <div className="mt-4">
          <p className="text-lg font-medium leading-relaxed text-ink">
            “Those who can imagine anything, can create the impossible.”
          </p>
          <p className="mt-3 text-sm font-medium tracking-wide text-ink-muted">— Alan Turing</p>
        </div>
      </div>

      {/* Hobbies Card */}
      <div className="col-span-1 row-span-1 bg-ink/5 dark:bg-white/5 rounded-2xl p-5 border border-ink/10 flex flex-col justify-center gap-3 transition-all hover:scale-[1.02]">
        <div className="flex items-center gap-3">
          <FaPalette className="text-ink-muted" size={18} />
          <span className="text-sm font-medium">Art History</span>
        </div>
        <div className="flex items-center gap-3">
          <FaTv className="text-ink-muted" size={18} />
          <span className="text-sm font-medium">Anime</span>
        </div>
      </div>
    </div>
  )
}