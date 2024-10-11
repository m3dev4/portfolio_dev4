import localFont from "next/font/local";
import "./globals.css";
import PageTransition from "@/components/transition/pageTrasition";

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

export const metadata = {
  title: "M4 | DEV",
  description: "Software Engineer",
  icons: [{ rel: "icon", url: "/images/m4.png" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
