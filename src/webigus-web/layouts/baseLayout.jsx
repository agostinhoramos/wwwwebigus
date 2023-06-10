import { useId } from "react";
import Image from "next/image";
import classNames from "classnames";

import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Newsletter from "@/components/Newsletter"
import { SecondaryFeatures } from "@/components/SecondaryFeatures"
import { PrimaryFeatures } from "@/components/PrimaryFeatures"
import { Reviews } from "@/components/Reviews";
import { Faqs } from "@/components/Faqs";
import Footer from "@/components/Footer"

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
        <PrimaryFeatures />
        <Reviews />
        <Faqs />
        <Footer />
      </div>
    </>
  );
}
