"use client";

import GlobalStyles from "@/styles/GlobaleStyles";
import styled from "styled-components";

import Hero from '@/components/common/Hero';
import Footer from "@/components/common/Footer";
import Credits from "@/components/common/Credits";
import Header from '@/components/common/Header';
import About from '@/components/common/About';
import Blog from '@/components/common/Blog';
import Subscribe from '@/components/common/Subscribe';
import Promo from '@/components/common/Promo';
import UserCarousel from '@/components/common/UserCarousel';

const FooterLayout = styled.footer`
  min-height: 350px;
  background-color: var(--background-gray-dark);
  position: relative;
`;

export default function HomePage() {
  
  return (
    <>
        <GlobalStyles />

            <Header/>
          
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
        </FooterLayout>
    </>
  );
}
