import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900/80 border-b border-zinc-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-black px-3 py-1 text-sm text-emerald-400">Skills</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Technical Expertise</h2>
            <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My technical skills and competencies in various areas of electronics engineering.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-12">
          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-zinc-800">
              <TabsTrigger value="technical" className="data-[state=active]:bg-zinc-700 data-[state=active]:text-white">
                Technical Skills
              </TabsTrigger>
              <TabsTrigger value="tools" className="data-[state=active]:bg-zinc-700 data-[state=active]:text-white">
                Tools
              </TabsTrigger>
              <TabsTrigger value="soft" className="data-[state=active]:bg-zinc-700 data-[state=active]:text-white">
                Soft Skills
              </TabsTrigger>
            </TabsList>
            <TabsContent value="technical" className="p-4 bg-zinc-800 rounded-md mt-4 text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SkillCategory
                  title="Programming Languages"
                  skills={[
                    { name: "C", percentage: 90 },
                    { name: "C++", percentage: 85 },
                    { name: "HTML", percentage: 80 },
                    { name: "CSS", percentage: 75 },
                  ]}
                />
                <SkillCategory
                  title="Electronics"
                  skills={[
                    { name: "Embedded Systems", percentage: 90 },
                    { name: "Circuit Design", percentage: 85 },
                    { name: "PCB Design", percentage: 80 },
                    { name: "IoT Development", percentage: 85 },
                  ]}
                />
              </div>
            </TabsContent>
            <TabsContent value="tools" className="p-4 bg-zinc-800 rounded-md mt-4 text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SkillCategory
                  title="Design Tools"
                  skills={[
                    { name: "KiCad", percentage: 90 },
                    { name: "Figma", percentage: 80 },
                    { name: "LTspice", percentage: 85 },
                    { name: "Canva", percentage: 90 },
                  ]}
                />
                <SkillCategory
                  title="Development Environments & Microcontrollers"
                  skills={[
                    { name: "Arduino IDE", percentage: 95 },
                    { name: "VS Code", percentage: 85 },
                    { name: "ESP8266/ESP32", percentage: 75 },
                    { name: "STM32", percentage: 60 },
                  ]}
                />
              </div>
            </TabsContent>
            <TabsContent value="soft" className="p-4 bg-zinc-800 rounded-md mt-4 text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SkillCategory
                  title="Communication"
                  skills={[
                    { name: "Communication", percentage: 90 },
                    { name: "Social Interaction", percentage: 85 },
                    { name: "Teamwork", percentage: 90 },
                  ]}
                />
                <SkillCategory
                  title="Management"
                  skills={[
                    { name: "Problem Solving", percentage: 95 },
                    { name: "Leadership", percentage: 85 },
                    { name: "Productivity", percentage: 90 },
                  ]}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

interface Skill {
  name: string
  percentage: number
}

interface SkillCategoryProps {
  title: string
  skills: Skill[]
}

function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">{title}</h3>
      {skills.map((skill, index) => (
        <div key={index} className="space-y-2">
          <div className="flex items-center justify-between">
            <span>{skill.name}</span>
            <span className="text-sm">{skill.percentage}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-zinc-700">
            <div className="h-full rounded-full bg-emerald-500" style={{ width: `${skill.percentage}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  )
}

