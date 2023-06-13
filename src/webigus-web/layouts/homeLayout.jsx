import { useId } from "react";
import Image from "next/image";
import classNames from "classnames";

import { Header } from "@/components/Header";
import { FooterWithNewsletter as Footer } from "@/components/Footer"

export function HomeLayout({ children }) {
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
