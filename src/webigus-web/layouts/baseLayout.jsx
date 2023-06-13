import { useId } from "react";
import Image from "next/image";
import classNames from "classnames";

import { Hero } from "@/components/Hero"
import { Header } from "@/components/Header";
import { Incentives } from "@/components/Incentives"
import { Reviews } from "@/components/Reviews";
import { Faqs } from "@/components/Faqs";
import { Footer } from "@/components/Footer"

export function BaseLayout({ children }) {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <div >
            {children}
        </div>
        <Incentives />
        <Reviews />
        <Faqs />
        <Footer />
      </div>
    </>
  );
}
