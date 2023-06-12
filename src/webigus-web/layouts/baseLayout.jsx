import { useId } from "react";
import Image from "next/image";
import classNames from "classnames";

import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import { SecondaryFeatures } from "@/components/SecondaryFeatures"
import { Reviews } from "@/components/Reviews";
import { Faqs } from "@/components/Faqs";
import { FullFooter } from "@/components/Footer"

export function BaseLayout({ children }) {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <div >
            {children}
        </div>
        <SecondaryFeatures />
        <Reviews />
        <Faqs />
        <FullFooter />
      </div>
    </>
  );
}
