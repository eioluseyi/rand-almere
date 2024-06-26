"use client";
import React from "react";
import Hero from "@Page/Home/Sections/Hero";
import Features from "@Page/Home/Sections/Features";
import DarkBgContent from "@Page/Home/Sections/DarkBgContent";
import Activities from "@Page/Home/Sections/Activities";
import PlanCta from "@Page/Home/Sections/PlanCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Activities />
      <PlanCta />
      {/* <Features /> */}
      <DarkBgContent />
    </>
  );
}
