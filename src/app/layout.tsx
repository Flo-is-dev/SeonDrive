import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import localFont from "next/font/local";
import GlobalStyles from "@/styles/GlobaleStyles";

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

export const metadata: Metadata = {
  title: "SeonDrive",
  description: "Un large choix de voiture respectueuses de l'environment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header
            style={{backgroundColor: "tomato",padding:"1rem"}}>
            <Header />
        </header>
        <GlobalStyles />
        <main>{children}</main>
        <footer style={{backgroundColor: "lightgreen",padding:"1rem"}}>
            Footer
        </footer>
      </body>
    </html>
  );
}
