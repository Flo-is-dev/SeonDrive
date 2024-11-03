"use client";

import styled from "styled-components";
import GlobalStyles from "@/styles/GlobaleStyles";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Credits from "@/components/common/Credits";
import Article from "./ArticlePage";
import Heroarticle from "@/components/common/Heroarticle";
import { useTranslations } from "next-intl";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Column = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  max-width: 1400px;
  margin: auto;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;
const Aside = styled.aside`
  margin: 600px 15% 2rem;

  @media (max-width: 750px) {
    order: 2;
    margin: 2rem 15%;
  }
  @media (max-width: 450px) {
    margin: 1rem 10% 2rem;
  }

  li {
    list-style-type: none;
    border-bottom: 1px solid gray;
    padding-block: 0.8rem;
    font-size: clamp(1rem, 2vw, 1.4rem);
    position: relative;
  }
  ul li:not(:first-child) {
    font-size: clamp(0.9rem, 2vw, 1.2rem);
  }
`;

const Layout = styled.div`
  max-height: 1000px;
  height: 100%;
  background-color: #efefef;
  position: absolute;
  top: 500px;
  left: 0%;
  width: 100%;
  z-index: -1;

  @media (max-width: 550px) {
    max-height: 500px;
  }
`;
const FooterLayout = styled.footer`
  min-height: 350px;
  background-color: var(--background-gray-dark);
  position: relative;
`;

const Arrow = styled.div`
  background-color: white;
  height: 30px;
  width: 30px;
  border-radius: 50px;
  padding: 0px;
  position: absolute;
  top: 20%;
  right: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  rotate: -45deg;

  svg {
    font-size: 1rem;
  }
`;

const ArticlePage = ({ params }: { params: { id: string } }) => {
  const t = useTranslations("blog");

  return (
    <>
      <GlobalStyles />
      <Header />

      <main>
        <Heroarticle />

        <Column>
          <Aside>
            <ul>
              <li>
                <strong>{t("FollowUs")}</strong>
              </li>
              <li>
                {t("Instagram")}
                <Arrow>
                  <FontAwesomeIcon icon={faArrowRight} size="lg" />
                </Arrow>
              </li>
              <li>
                {t("Youtube")}
                <Arrow>
                  <FontAwesomeIcon icon={faArrowRight} size="lg" />
                </Arrow>
              </li>
              <li>
                {t("Twitter")}
                <Arrow>
                  <FontAwesomeIcon icon={faArrowRight} size="lg" />
                </Arrow>
              </li>
            </ul>
          </Aside>
          <Article params={params} />
          <Layout></Layout>
        </Column>
      </main>

      <FooterLayout>
        <Footer />
        <Credits />
      </FooterLayout>
    </>
  );
};

export default ArticlePage;
