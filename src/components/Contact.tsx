import { Button } from "@/components/ui/button"
import { Linkedin, Mail, MapPin, Twitter, Zap } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-black border-b border-zinc-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm text-emerald-400">Contact</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Get In Touch</h2>
            <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a project in mind or want to discuss a potential collaboration? Feel free to reach out.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-white">Contact Information</h3>
            <p className="text-zinc-400">Feel free to reach out through any of the following channels:</p>
            <div className="mt-4 grid gap-4">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-emerald-500" />
                <span className="text-zinc-300">jalkoteaditya543@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="h-5 w-5 text-emerald-500" />
                <span className="text-zinc-300">www.linkedin.com/in/adityajalkote</span>
              </div>
              <div className="flex items-center gap-2">
                <Twitter className="h-5 w-5 text-emerald-500" />
                <span className="text-zinc-300">twitter.com/AdityaJalkote</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-emerald-500" />
                <span className="text-zinc-300">Mumbai, India</span>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-medium text-white">Availability</h4>
              <p className="text-zinc-400">Currently available for internships and project collaborations.</p>
            </div>
          </div>
          <div className="rounded-lg border border-zinc-700 bg-zinc-800 p-6 shadow-sm">
            <h3 className="text-xl font-bold text-white">Send a Message</h3>
            <form className="mt-4 grid gap-4">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                  Name
                </label>
                <input
                  id="name"
                  className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-white"
                  placeholder="Your name"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-white"
                  placeholder="Your email"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="subject" className="text-sm font-medium text-zinc-300">
                  Subject
                </label>
                <input
                  id="subject"
                  className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-white"
                  placeholder="Subject"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-300">
                  Message
                </label>
                <textarea
                  id="message"
                  className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-white"
                  placeholder="Your message"
                  rows={4}
                ></textarea>
              </div>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                <Zap className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

