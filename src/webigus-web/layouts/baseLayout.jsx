import { useId } from "react";
import Image from "next/image";
import classNames from "classnames";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer"

export function BaseLayout({ children, defaultScroll }) {
  return (
    <>
      <div>
        <Header defaultScroll={defaultScroll} />
        <div >
            {children}
        </div>
        <Footer />
      </div>
    </>
  );
}
