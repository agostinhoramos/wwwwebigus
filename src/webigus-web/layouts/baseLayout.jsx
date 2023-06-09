import { useId } from "react";
import Image from "next/image";
import classNames from "classnames";

import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
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
        <Footer />
      </div>
    </>
  );
}
