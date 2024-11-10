// src/app/page.tsx
import './globals.css';

import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import Experience from "@/app/components/Experience";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import Projects from "@/app/components/Projects";
import Technologies from "@/app/components/Technologies";
import { FC } from "react";

const Page: FC = () => {
  return (
    <div
      className="overflow-x-hidden text-neutral-300 antialiased
      selection:bg-cyan-300 selection:text-cyan-900"
    >
      <div className="fixed top-0 -z-10 h-full w-full">
        <div
          className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950
          bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),
          rgba(255,255,255,0))]"
        >
        </div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Page;
