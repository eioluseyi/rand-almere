import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@Style/globals.css";
import "@Component/InfiniteCarousel/infinite-carousel.css";
import { AppContextProvider } from "@Context/AppContext";
import { ReactNode } from "react";
import AppLayout from "@Layout/index";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rand Almere",
  description:
    "RandAlmere is your one-stop shop for planning the perfect Almere trip.",
};

export default function RootLayout(props: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <body className={inter.className} suppressHydrationWarning={true}>
        <RenderApp>{props.children}</RenderApp>
      </body>
    </html>
  );
}

function RenderApp(props: { children: ReactNode }) {
  return (
    <AppContextProvider>
      <AppLayout>{props.children}</AppLayout>
    </AppContextProvider>
  );
}
