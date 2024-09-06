"use client";

import Header from "@/components/layout/Header";
import Lang from "@/components/layout/Lang";
import Credits from "@/components/common/Credits";
import Footer from "@/components/common/Footer";
import GlobalStyles from "@/styles/GlobaleStyles";

import localFont from "next/font/local";
import Image from "next/image";
import styled from "styled-components";

const HeaderLayout = styled.header`
  padding: 1rem;
  width: 100%;
  padding-inline: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
`;

const Nav = styled.nav`
  flex: 1;
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

const OPTIEdgar = localFont({
  src: "./fonts/OPTIEdgar-Extended.otf", 
  variable: "--font-OPTI",
  weight: "100 900",
});

const FooterLayout = styled.footer`
  min-height: 350px;
  background-color: var(--background-gray-dark);
  position: relative;
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${OPTIEdgar.variable}`}>
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
            alt="SeonDrive Logo"
          />
          <Lang />
        </HeaderLayout>
        <main>{children}</main>
        <FooterLayout>
          <Footer />
          <Credits />
        </FooterLayout>
      </body>
    </html>
  );
}
