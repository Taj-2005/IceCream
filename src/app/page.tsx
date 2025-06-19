"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { useEffect, useState } from "react";

export default function Home() {
  const [selectedFlavor, setSelectedFlavor] = useState("strawberry");

  const flavorBackgroundMap: Record<string, string> = {
    strawberry: "bg-gradient-to-br from-[#BE128D] to-[#FF6CEE]",
    blueberry: "bg-gradient-to-br from-[#236CDA] to-[#47C4F6]",
    chocolate: "bg-gradient-to-br from-[#9C5C3F] to-[#E0BDB0]",
    evergreen: "bg-gradient-to-br from-[#2A9949] to-[#47F66E]",
  };

  const backgroundColor = flavorBackgroundMap[selectedFlavor] || "bg-white";

  useEffect(() => {
    console.log("Selected Flavor:", selectedFlavor);
  }, [selectedFlavor]);

  return (
    <div
      className={`${backgroundColor} h-screen w-full flex flex-col font-poppins overflow-hidden`}
    >
      <Navbar selectedFlavor={selectedFlavor} setSelectedFlavor={setSelectedFlavor} />
      <Hero selectedFlavor={selectedFlavor} setSelectedFlavor={setSelectedFlavor}/>
    </div>
  );
}
