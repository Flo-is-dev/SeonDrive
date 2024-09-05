"use client";

import Header from "@/components/layout/Header";
import localFont from "next/font/local";
import GlobalStyles from "@/styles/GlobaleStyles";
import styled from "styled-components";

const HeaderLayout = styled.header`
  background-color: tomato;
  padding: 1rem;
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
          <Header />
        </HeaderLayout>
        <main>{children}</main>
        <footer style={{ backgroundColor: "lightgreen", padding: "1rem" }}>
          Footer
        </footer>
      </body>
    </html>
  );
}
