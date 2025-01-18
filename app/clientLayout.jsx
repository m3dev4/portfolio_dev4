"use client";
import { useEffect, useState } from "react";
import localFont from "next/font/local";
import "./globals.css";
import Loader from "../components/loader/loader";
import PageTransition from "../components/transition/pageTrasition";

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
  const [isLoading, setIsLoading] = useState(true); // État pour gérer le loader

  useEffect(() => {
    if (!isLoading) {
      document.body.style.overflow = "visible"; // Assurez-vous de réactiver le défilement
    }
  }, [isLoading]);

  const handleLoaderComplete = () => {
    // Appelé lorsque le Loader termine
    setIsLoading(false);
  };

  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {isLoading ? (
          <Loader onComplete={handleLoaderComplete} />
        ) : (
          <PageTransition>
            <>{children}</>
          </PageTransition>
        )}
      </body>
    </html>
  );
}
