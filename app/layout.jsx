import ClientLayout from './clientLayout';

export const metadata = {
  title: "M4 | DEV",
  description: "Software Engineer",
  icons: [{ rel: "icon", url: "/images/lo.png" }],
};

export default function RootLayout({ children }) {
  return <ClientLayout>{children}</ClientLayout>;
}