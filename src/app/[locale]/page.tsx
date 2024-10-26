"use client";

import Hero from '@/components/common/Hero';
import Footer from "@/components/common/Footer";

import Header from "@/components/layout/Header";
import Lang from "@/components/layout/Lang";
import Credits from "@/components/common/Credits";

import GlobalStyles from "@/styles/GlobaleStyles";
import styled from "styled-components";
import Image from "next/image";
import About from '@/components/common/About';
import Blog from '@/components/common/Blog';
import Subscribe from '@/components/common/Subscribe';
import Promo from '@/components/common/Promo';
import UserCarousel from '@/components/common/UserCarousel';

const HeaderLayout = styled.header`
  padding: 1rem;
  width: 100%;
  padding-inline: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index:100;
`;

const Nav = styled.nav`
  flex: 1;
`;
const BrandDiv = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  gap: 1rem;
`;

const Brand = styled.span`
  color:white;
  font-size:2.5rem;
  font-weight:700;
  font-family:  monospace, Verdana, sans-serif;
`;

const FooterLayout = styled.footer`
  min-height: 350px;
  background-color: var(--background-gray-dark);
  position: relative;
`;



export default function HomePage() {
  
  return (
    
    <>
    <GlobalStyles />
        <HeaderLayout>
          <Nav>
            <Header />
          </Nav>
          <BrandDiv>
            <Image
            src="/logo-seondrive.png"
            width={60}
            height={60}
            alt="SeonDrive Logo"
            />
            <Brand>SeonDrive</Brand>
          </BrandDiv>
          
          <Lang />
        </HeaderLayout>
        
            <main>
                <Hero />
                <About />
                <Promo />
                <UserCarousel />
                <Blog filtered={true} />
                <Subscribe/>
            </main>
            
        <FooterLayout>
          <Footer />
          <Credits />
        </FooterLayout></>
  );
}
