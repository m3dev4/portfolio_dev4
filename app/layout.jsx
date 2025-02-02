// app/layout.js (Composant serveur)

import ClientLayout from "./clientLayout";
import ResourcePreloader from '../components/ResourcePreloader';

export const metadata = {
  title: "M3dev4",
  description:
    "Développeur Full Stack sénégalais spécialisé dans l'écosystème JavaScript, avec une expertise couvrant les frameworks modernes tels que React, Node.js, et Next.js. Passionné par la création de solutions web performantes, robustes et adaptées aux besoins des utilisateurs, je combine innovation et efficacité pour transformer des idées en applications fonctionnelles.",
  icons: {
    icon: "/images/m3dev4.ico",
  },
  keywords: [
    "Développeur Full Stack",
    "JavaScript",
    "React",
    "Node.js",
    "Next.js",
    "Développement Web",
    "Sénégal",
    "Frontend",
    "Backend",
  ],
  openGraph: {
    title: "M3dev4",
    description:
      "Développeur Full Stack sénégalais spécialisé dans l'écosystème JavaScript, avec une expertise couvrant les frameworks modernes tels que React, Node.js, et Next.js. Passionné par la création de solutions web performantes, robustes et adaptées aux besoins des utilisateurs, je combine innovation et efficacité pour transformer des idées en applications fonctionnelles.",
    url: "XXXXXXXXXXXXXXXXXXXXXXXXXX",
    siteName: "Portfolio de Développeur Full Stack",
    images: [
      {
        url: "/images/m3dev4.ico",
        width: 40,
        height: 40,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  author: "Mouhamed Lo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/MangoGrotesque-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/NeueMontreal-Light.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <ResourcePreloader />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
