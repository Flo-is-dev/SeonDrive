"use client";

import styled from "styled-components";
import { useTranslations } from "next-intl";
import Btn from "../ui/Btn";
import Tabs from "../ui/Tabs";

const Section = styled.section`
  background: url("/home/hero-bg-copie.webp") center/cover;
  width: 100%;
  min-height: 100vh;
  height: auto;
  padding: 9rem 4rem 8rem;
  position: relative;

  @media (max-width: 750px) {
    min-height: calc(100vh + 250px);
  }
  @media (max-width: 450px) {
    min-height: calc(100vh + 400px);
    padding: 9rem 2rem 8rem;
  }

  h1 {
    color: white;
    font-size: clamp(2.2rem, 5vw, 4.5rem);
    width: 60%;
    font-weight: 500;
    text-wrap: pretty;
    margin-bottom: 3rem;
    line-height: 65px;

    @media (max-width: 750px) {
      width: 100%;
      line-height: 40px;
    }
  }
  > p {
    color: white;
    max-width: 400px;
    margin: 60px 0px 0px auto;
  }
`;

const StyledTabs = styled(Tabs)`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 90%;

  min-height: 90px;
  @media (min-width: 750px) {
    flex-wrap: wrap;
    height: 6.5vw;
  }

  .tab-content {
    background: white;
    min-height: 100%;
    margin-top: 10px;
    border-radius: 8px;
    padding: 0.5rem 0rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    @media (max-width: 750px) {
      flex-wrap: wrap;
    }

    > * {
      /* flex:1; */
    }

    strong {
      color: #b7b7b7;
      font-weight: 400;
      font-size: 1rem;
    }

    > div {
      position: relative;
      padding-inline: 1.5rem;
      width: 20%;
      overflow: hidden;

      @media (max-width: 750px) {
        width: calc(50% - 1rem);
      }
      @media (max-width: 450px) {
        width: 100%;
      }
    }

    @media (min-width: 750px) {
      > div:nth-child(n + 2):after {
        content: "";
        position: absolute;
        border-radius: 4px;
        top: 50%;
        left: 0%;
        transform: translate(0%, -50%);
        height: 100%;
        width: 1px;
        background-color: #b7b7b7;
      }
    }

    input,
    input:focus-visible {
      border: none;
      outline: none;
      font-weight: 500;
      font-size: 0.9rem;
    }

    > a {
      background-color: #f4c6a4;
      border-radius: 8px;
      height: 80px;
      padding-inline: 1rem;
      margin-right: 0.5rem;
      width: 128px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-decoration: none;
      font-weight: 500;
      font-size: 1rem;
      z-index: 2;
      text-wrap-style: pretty;
      text-align: center;

      @media (max-width: 750px) {
        margin: auto;
        width: 40%;
      }

      &:hover {
        background-color: #f4c6a4;
      }

      img {
        margin-left: 10px;
      }
    }
  }

  .tab-buttons {
    button {
      padding: 8px 18px;
      font-size: 1rem;
      border-radius: 4px;
      border: none;
      margin-right: 10px;
      background: #202020;
      color: white;
      font-weight: 400;
      cursor: pointer;
    }
    button.active {
      background: white;
      color: black;
    }
  }
`;

const Hero = () => {
  const t = useTranslations("HomePage");

  return (
    <Section>
      <div>
        <h1>{t("heroTitle")}</h1>
        <Btn link={"/"} content={t("btnRent")} />
      </div>

      <p>{t("heroTxt")}</p>

      <StyledTabs />
    </Section>
  );
};
export default Hero;
