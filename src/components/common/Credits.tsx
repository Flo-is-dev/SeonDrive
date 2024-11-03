"use client";
import styled from "styled-components";
import { useTranslations } from "next-intl";

const Section = styled.section`
  height: 50px;
  background-color: var(--background-gray-light);
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 550px) {
    position: inherit;
  }

  p {
    color: var(--text-color-gray);
  }
`;

const Credits = () => {
  const t = useTranslations("Footer");

  return (
    <Section>
      <p>{t("copyright")}</p>
    </Section>
  );
};
export default Credits;
