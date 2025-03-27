import { Award, Bike, Camera, Edit3, TrendingUp, Utensils } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-black border-b border-zinc-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm text-emerald-400">About Me</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Who I Am</h2>
            <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm an electronics engineering student with a passion for embedded systems, IoT, and hardware design.
              Currently pursuing my Bachelor's degree at Vidyalankar Institute Of Technology, I focus on creating
              innovative electronic solutions and smart systems.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-12">
          <div className="grid grid-cols-1 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Relevant Coursework</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-zinc-800/50 p-4 rounded-lg">
                  <div className="font-medium text-white">Embedded Systems</div>
                  <div className="text-sm text-zinc-400">
                    Studied microcontrollers, real-time operating systems, and communication protocols like SPI, I2C,
                    CAN, and UART.
                  </div>
                </div>
                <div className="bg-zinc-800/50 p-4 rounded-lg">
                  <div className="font-medium text-white">Internet of Things</div>
                  <div className="text-sm text-zinc-400">
                    Developed knowledge of sensor integration, communication protocols, cloud connectivity, and
                    real-time data processing.
                  </div>
                </div>
                <div className="bg-zinc-800/50 p-4 rounded-lg">
                  <div className="font-medium text-white">Electronics Devices and Circuits / VLSI</div>
                  <div className="text-sm text-zinc-400">BJT's, MOSFET's etc.</div>
                </div>
                <div className="bg-zinc-800/50 p-4 rounded-lg">
                  <div className="font-medium text-white">Linear Integrated Circuits</div>
                  <div className="text-sm text-zinc-400">
                    Learned about OP-AMPs, filters, Voltage regulators, special ICs, Data converters (ADC/DAC)
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Extracurricular Activities & Interests</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="font-medium text-white mb-3">Hobbies & Interests</div>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 bg-zinc-800 rounded-full px-3 py-1.5">
                      <Camera className="h-4 w-4 text-emerald-400" />
                      <span className="text-sm">Cinematography</span>
                    </div>
                    <div className="flex items-center gap-2 bg-zinc-800 rounded-full px-3 py-1.5">
                      <Camera className="h-4 w-4 text-emerald-400" />
                      <span className="text-sm">Photography</span>
                    </div>
                    <div className="flex items-center gap-2 bg-zinc-800 rounded-full px-3 py-1.5">
                      <Edit3 className="h-4 w-4 text-emerald-400" />
                      <span className="text-sm">Photo-Video Editing</span>
                    </div>
                    <div className="flex items-center gap-2 bg-zinc-800 rounded-full px-3 py-1.5">
                      <Bike className="h-4 w-4 text-emerald-400" />
                      <span className="text-sm">Cycling</span>
                    </div>
                    <div className="flex items-center gap-2 bg-zinc-800 rounded-full px-3 py-1.5">
                      <TrendingUp className="h-4 w-4 text-emerald-400" />
                      <span className="text-sm">Trading</span>
                    </div>
                    <div className="flex items-center gap-2 bg-zinc-800 rounded-full px-3 py-1.5">
                      <Utensils className="h-4 w-4 text-emerald-400" />
                      <span className="text-sm">Cooking</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="font-medium text-white mb-3">Leadership Experience</div>
                  <div className="bg-zinc-800/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-emerald-400" />
                      <span className="font-medium">Athletics Head, Sports Council</span>
                    </div>
                    <div className="text-sm text-zinc-400 mt-2">
                      Led the athletics team, organized college sports events, and ensured smooth execution of college
                      activities.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

