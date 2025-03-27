import Link from "next/link"
import { CircuitBoard, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800 py-6 md:py-8 bg-black">
      <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <CircuitBoard className="h-6 w-6 text-emerald-500" />
          <span className="text-lg font-bold text-white">Aditya Jalkote</span>
        </div>
        <p className="text-center text-sm text-zinc-400 md:text-left">© 2023 Aditya Jalkote. All rights reserved.</p>
        <div className="flex gap-4">
          <Link
            href="https://www.linkedin.com/in/adityajalkote"
            className="text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://twitter.com/AdityaJalkote"
            className="text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="mailto:jalkoteaditya543@gmail.com"
            className="text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

