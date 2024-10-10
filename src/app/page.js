import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Pattern */}
      <div className="w-full h-full mix-blend-hard-light absolute left-0 top-0 z-10 opacity-10 pointer-events-none md:w-[70%]  lg:w-[75%]">
        <Image
          src="/assets/pattern.webp"
          fill
          className="object-cover"
          priority
          alt="pattern"
        />
      </div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
