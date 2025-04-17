import type { Metadata } from "next";
import "@/src/shared/styles/globals.scss";
import { CommonLayout } from "@/src/shared/components/layouts/commonLayout";
import TLayout from "@/src/shared/types/layout";

export const metadata: Metadata = {
  title: "Title",
  description: "тут description",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  minimumScale: 1.0,
  maximumScale: 1.0,
  userScalable: "no",
};

export default function RootLayout({ children }: Readonly<TLayout>) {
  return <CommonLayout>{children} </CommonLayout>;
}
