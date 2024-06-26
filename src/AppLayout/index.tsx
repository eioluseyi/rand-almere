import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout(props: { children: ReactNode }) {
  return (
    <div className="flex flex-col w-full h-dvh scroll-smooth">
      <Header />
      <main className="mt-20">{props.children}</main>
      <Footer />
    </div>
  );
}
