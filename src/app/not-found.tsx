"use client";

import GlobalStyles from "@/styles/GlobaleStyles";
import styled from "styled-components";

import Footer from "@/components/common/Footer";
import Credits from "@/components/common/Credits";
import Header from "@/components/common/Header";

const FooterLayout = styled.footer`
  min-height: 350px;
  background-color: var(--background-gray-dark);
  position: relative;
`;

const Container = styled.div`
  min-height: 500px;
  padding-top: 92px;
  background: url("/blog/header-bg.jpg") center/cover;
  /* background: #787878; */
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    color: white;
    font-size: 1.6rem;
  }
`;
const Title = styled.h1`
  text-align: center;
  color: #ffffff;
  font-size: clamp(2rem, 4vw, 5rem);
`;
const Main = styled.main`
  display: flex;
  justify-content: center;
  height: 130vh;
  flex-direction: column;
`;

export default function HomePage() {
  return (
    <>
      <GlobalStyles />

      <Header />

      <Main>
        <Container>
          <Title>ERROR 404</Title>
          <p>Not Found</p>
        </Container>

        <FooterLayout>
          <Footer />
          <Credits />
        </FooterLayout>
      </Main>
    </>
  );
}
