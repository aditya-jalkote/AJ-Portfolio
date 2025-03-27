import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Projects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-black border-b border-zinc-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm text-emerald-400">Projects</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Featured Work</h2>
            <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of my notable projects that showcase my skills and expertise in electronics engineering.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
          <ProjectCard
            title="PCB Design Course with Hands-on Projects"
            date="2024-25 | Hardware Design"
            description="Completed a hands-on course on PCB design using KiCad. Learned schematic, component placement, and routing techniques. Designed and tested functional PCB prototypes for electronics projects."
            tags={["KiCad", "PCB Design", "Schematic", "Prototyping"]}
          />

          <ProjectCard
            title="Breadboard Power Supply PCB"
            date="Hardware Design"
            description="Designed and developed a custom PCB-based power supply for breadboards, ensuring stable 3.3V & 5V outputs. Created schematic and PCB layout using KiCad with proper component placement, routing, and silkscreen design. Conducted Electrical Rules Check (ERC) & Design Rules Check (DRC) to ensure manufacturing accuracy."
            tags={["Power Supply", "KiCad", "PCB", "ERC/DRC"]}
          />

          <ProjectCard
            title="Soil Monitoring System Using Solar Energy"
            date="2023-24 | IoT & Sustainable Agriculture"
            description="Designed and implemented a solar-powered soil monitoring system using Arduino, DHT11, Servo Motor, LDR sensors, and an LCD display. Improved irrigation precision and reduced water wastage, promoting sustainable agriculture."
            additionalInfo="Advanced: Incorporated an ESP8266 module for remote monitoring and control via Blynk console."
            tags={["Arduino", "IoT", "Solar", "Sensors"]}
          />

          <ProjectCard
            title="Full Home Automation System and dummy project"
            date="May 2024 | IoT | Nodemcu ESP8266 & Blynk"
            description="Designed a smart home system integrating DHT11, MQ2, PIR, Flame, and Ultrasonic sensors for real-time monitoring. Enabled remote control of appliances via a two-channel relay module using IoT. Implemented the Blynk app for seamless internet-based control and monitoring."
            tags={["ESP8266", "Blynk", "IoT", "Automation"]}
          />
        </div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  title: string
  date: string
  description: string
  additionalInfo?: string
  tags: string[]
}

function ProjectCard({ title, date, description, additionalInfo, tags }: ProjectCardProps) {
  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-zinc-400 mt-1">{date}</p>
      </div>
      <div className="aspect-video w-full bg-zinc-800 flex items-center justify-center">
        <img alt={title} className="w-full h-full object-cover" src="/placeholder.svg?height=300&width=600" />
      </div>
      <div className="p-6">
        <p className="text-zinc-300 text-sm">{description}</p>
        {additionalInfo && (
          <p className="text-zinc-300 text-sm mt-2">
            <span className="text-emerald-400 font-medium">Advanced:</span> {additionalInfo}
          </p>
        )}
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              className="bg-transparent border border-emerald-500 text-emerald-400 hover:bg-emerald-900/20"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <div className="px-6 pb-6">
        <Button variant="outline" className="w-full border-zinc-700 text-zinc-300 hover:bg-zinc-700 hover:text-white">
          View Details
        </Button>
      </div>
    </div>
  )
}

