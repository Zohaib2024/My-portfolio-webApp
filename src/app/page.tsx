"use client"

import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Social from "@/components/Social";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    AOS.init({
      easing:"ease-out-back",
      duration: 1200,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset:100,
    });
    AOS.refresh();
  },[]);
  
  return (
    <main>
  <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Social />
    <Contact />
    </main>
  );
}
