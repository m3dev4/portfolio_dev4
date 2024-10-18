"use client"
import { useEffect, useState } from "react";
import localFont from "next/font/local";
import "./globals.css";
import Loader from "../components/loader"
import PageTransition from "../components/transition/pageTrasition"



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function ClientLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <PageTransition>{children}</PageTransition>
        )}
      </body>
    </html>
  );
}