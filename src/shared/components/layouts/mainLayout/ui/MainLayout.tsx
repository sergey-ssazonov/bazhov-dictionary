import React, { FC, Suspense } from "react";
import { Raleway } from "next/font/google";
import TLayout from "@/src/shared/types/layout";
import localFont from "next/font/local";
import { Header } from "@/src/features/header";

export const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600"],
});

export const druzhok = localFont({
  src: "../../../../../../public/fonts/DRUZHOK-Regular.otf",
  variable: "--font-druzhok",
});

export const bukvoglot = localFont({
  src: "../../../../../../public/fonts/Bukvoglot.otf",
  variable: "--font-bukvoglot",
});

const MainLayout: FC<Readonly<TLayout>> = ({ children }) => {
  return (
    <body
      className={`${raleway.variable} ${bukvoglot.variable} ${druzhok.variable}  font-sans antialiased px-30 py-4`}
    >
      <Suspense>
        <Header />
      </Suspense>
      <main>{children}</main>
    </body>
  );
};

export default MainLayout;
