"use client";

import { useTranslations } from 'next-intl';
import Hero from '@/components/common/Hero';
import Footer from "@/components/common/Footer";
import { Link } from '@/i18n/routing';

import Header from "@/components/layout/Header";
import Lang from "@/components/layout/Lang";
import Credits from "@/components/common/Credits";

import GlobalStyles from "@/styles/GlobaleStyles";
import styled from "styled-components";
import Image from "next/image";

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

const FooterLayout = styled.footer`
  min-height: 350px;
  background-color: var(--background-gray-dark);
  position: relative;
`;



export default function HomePage() {
  const t = useTranslations('HomePage');
  
  return (
    
    <>
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
        
        <Hero />
      <h1>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
      <Footer />
        <FooterLayout>
          <Footer />
          <Credits />
        </FooterLayout></>
  );
}
