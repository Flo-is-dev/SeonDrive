"use client"
import styled from "styled-components";
import { useTranslations } from 'next-intl';

const Section = styled.section`
  background: url("/home/hero-bg-copie.jpg") center/cover;
  height:100vh;
  padding:8rem  4rem;
  /* position: relative; */

  h1 {
    color: white;
    font-size: clamp(2rem,6vw,4.5rem);
    width: 60%;
    text-wrap: pretty;
  }
  p {
    color: white;
    max-width:400px;
    margin:100px 0px 0px auto;
  }
`;

const Hero = () => {
    const t = useTranslations('HomePage');

  return (
    <Section>
        <h1>{t('heroTitle')}</h1>
        <p>{t('heroTxt')}</p>
        
    </Section>
  )
}
export default Hero

