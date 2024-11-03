"use client";
import styled from "styled-components";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Section = styled.section`
  min-height: 75vh;
  padding: 4rem;
  display: flex;
  justify-content: space-around;
  @media (max-width: 750px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const TxtContainer = styled.div`
  width: 30%;
  @media (max-width: 750px) {
    width: 100%;
  }
  h2 {
    font-size: clamp(2rem, 6vw, 4.5rem);
  }
  p {
    color: var(--text-color-gray);
    margin-top: 1.5rem;
  }
`;
const ImgContainer = styled.div`
  margin: auto;
  width: 55%;
  height: 25vw;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "fe ca"
    "fe ro"
    "fe ro";

  @media (max-width: 750px) {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 450px) {
    max-height: 300px;
  }

  div:has(img):nth-child(1) {
    max-height: 100%;
    grid-area: fe;
    overflow: hidden;
    border-radius: 20px;
    /* max-height: 400px; */
    @media (max-width: 750px) {
      border-radius: 8px;
    }
  }
  div:has(img):nth-child(1) img {
    object-fit: cover;
    height: 100% !important;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }
  div:has(img):last-child {
    grid-area: ro;
  }
  div:has(img):last-child img {
    object-fit: cover;
    border-radius: 20px;
    height: 100% !important;
    width: auto;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    @media (max-width: 750px) {
      border-radius: 8px;
    }
  }
`;
const TxtCard = styled.div`
  background-color: var(--primary-gray);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  grid-area: ca;
  font-size: clamp(1.4rem, 2vw, 3rem);
  padding-block: 1rem;
  @media (max-width: 750px) {
    border-radius: 8px;
  }
  small {
    font-size: 1rem;
    margin-top: 1rem;
  }
`;

const About = () => {
  const t = useTranslations("AboutUs");

  return (
    <Section>
      <TxtContainer>
        <h2>{t("AboutUs")}</h2>
        <p>{t("AboutUsTxt")}</p>
      </TxtContainer>
      <ImgContainer>
        <div>
          <Image
            src="/about/ferrari.webp"
            width={400}
            height={300}
            alt="Picture of the author"
          />
        </div>
        <TxtCard>
          {t("10years")}
          <small>{t("experience")}</small>
        </TxtCard>
        <div>
          <Image
            src="/about/rolls-1.webp"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </ImgContainer>
    </Section>
  );
};
export default About;
