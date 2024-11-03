"use client";

import styled from "styled-components";
import { useTranslations } from "next-intl";
import SearchInput from "../ui/SearchInput";

const Section = styled.section`
  background: url("/blog/header-bg.jpg") center/cover;
  min-height: 100vh;
  padding: 12rem 4rem 4rem;
  position: relative;

  @media (max-width: 750px) {
    padding: 12rem 2rem 4rem;
  }

  h1 {
    color: white;
    font-size: clamp(2rem, 5vw, 3.5rem);
    width: 80%;
    font-weight: 500;
    text-wrap: pretty;
    margin-bottom: 3rem;
    line-height: 65px;
  }
  > p {
    color: white;
    max-width: 400px;
    margin: 100px 0px 0px auto;
  }
`;

const Heroblog = () => {
  const t = useTranslations("blogpage");

  return (
    <Section>
      <div>
        <h1>{t("heroTitle")}</h1>
        <SearchInput />
      </div>

      <p>{t("heroTxt")}</p>
    </Section>
  );
};
export default Heroblog;
