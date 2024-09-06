"use client";

import Header from "@/components/layout/Header";
import localFont from "next/font/local";
import Image from "next/image";
import GlobalStyles from "@/styles/GlobaleStyles";
import styled from "styled-components";
import Lang from "@/components/layout/Lang";

const HeaderLayout = styled.header`
  padding: 1rem;
  width: 100%;
  padding-inline: 4rem;
  display:flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
`;

const Nav = styled.nav`
  flex:1;
`;

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <GlobalStyles />
        <HeaderLayout>
          <Nav>
                <Header />
          </Nav>
          <Image
            src="/logo-seondrive.png"
            width={60}
            height={60}
            alt="Picture of the author"
            />
          <Lang />
        </HeaderLayout>
        <main>{children}</main>
        <footer style={{ backgroundColor: "lightgreen", padding: "1rem" }}>
          Footer
        </footer>
      </body>
    </html>
  );
}
