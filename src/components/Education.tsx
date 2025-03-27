import { Badge } from "@/components/ui/badge"

export default function Education() {
  return (
    <section id="education" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900/80 border-b border-zinc-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-black px-3 py-1 text-sm text-emerald-400">Education</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Academic Background</h2>
            <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My educational journey and academic achievements.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl space-y-8 py-12">
          <div className="relative pl-8 border-l-2 border-zinc-700">
            <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-emerald-500"></div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">Vidyalankar Institute Of Technology</h3>
                <Badge className="bg-emerald-600 text-white">Current</Badge>
              </div>
              <div className="text-sm text-zinc-400">B.E in Electronics Engineering | 2021-2025</div>
              <p className="text-zinc-300">SGPA: 8.1</p>
            </div>
          </div>
          <div className="relative pl-8 border-l-2 border-zinc-700">
            <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-zinc-600"></div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Dayanand Science College</h3>
              <div className="text-sm text-zinc-400">HSC | Latur | 2021</div>
              <p className="text-zinc-300">Percentage: 94.17%</p>
            </div>
          </div>
          <div className="relative pl-8 border-l-2 border-zinc-700">
            <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-zinc-600"></div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Keshavraj Vidyalaya</h3>
              <div className="text-sm text-zinc-400">SSC | Latur | 2019</div>
              <p className="text-zinc-300">Percentage: 78.20%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

