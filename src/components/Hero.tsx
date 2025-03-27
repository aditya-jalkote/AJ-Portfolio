import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full py-12 md:py-24 lg:py-32 border-b border-zinc-800 overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/abc5.mp4" type="video/mp4" />
      </video>
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4 text-white">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl">Aditya Jalkote</h1>
              <p className="text-2xl text-emerald-400 font-semibold">Bachelor of Engineering Electronics</p>
            </div>
            <div className="flex items-center gap-2 text-zinc-300">
              <MapPin className="h-4 w-4" />
              <span>Mumbai, India</span>
            </div>
            <p className="max-w-[600px] text-zinc-200 md:text-xl">
              I am an electronics engineering student with a strong interest in embedded systems, IoT & Circuits . I have  experience working with Arduino,
              ESP8266, sensors, and various microcontrollers. Passionate about creating innovative electronic solutions and smart systems.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="gap-1 bg-emerald-600 hover:bg-emerald-700 text-white">
                <Mail className="h-4 w-4" />
                Contact Me
              </Button>
              <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white">
                View Projects
              </Button>
            </div>
            <div className="flex items-center gap-4 text-zinc-300">
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                <span className="text-sm">jalkoteaditya543@gmail.com</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm">+91 9420226923</span>
              </div>
            </div>
          </div>
          <img
  alt="Aditya Jalkote Profile Picture"
  className="mx-auto h-[500px] w-[500px] overflow-hidden rounded-full object-cover border border-zinc-800 lg:order-last"
  
  src="/ajimage2.jpg"
/>

        </div>
      </div>
    </section>
  );
}
