import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CircuitBoard, Linkedin, Twitter } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <CircuitBoard className="h-6 w-6 text-emerald-500" />
          <span className="text-xl font-bold">Aditya Jalkote</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#about" className="text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors">
            About
          </Link>
          <Link
            href="#education"
            className="text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            Education
          </Link>
          <Link href="#projects" className="text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors">
            Projects
          </Link>
          <Link href="#skills" className="text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors">
            Skills
          </Link>
          <Link href="#contact" className="text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="https://www.linkedin.com/in/adityajalkote"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://twitter.com/AdityaJalkote"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <a href="/aditya-jalkote-cv.pdf" download>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Download CV
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
