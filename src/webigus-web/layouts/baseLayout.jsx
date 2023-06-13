import { useId } from "react";
import Image from "next/image";
import classNames from "classnames";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer"

export function BaseLayout({ children }) {
  return (
    <>
      <div>
        <Header />
        <div >
            {children}
        </div>
        <Footer />
      </div>
    </>
  );
}
