"use client";

import styled from "styled-components";
import GlobalStyles from "@/styles/GlobaleStyles";
import Blog from "@/components/common/Blog"
import Header from "@/components/common/Header"
import Heroblog from '../../../components/common/Heroblog';
import Footer from "@/components/common/Footer";
import Credits from "@/components/common/Credits";

const FooterLayout = styled.footer`
  min-height: 350px;
  background-color: var(--background-gray-dark);
  position: relative;
`;

const BlogPage = () => {
  return (
    <>
    <GlobalStyles />
        <Header/>
        <main>
           <Heroblog />
            <Blog filtered={false} />
        </main>
        <FooterLayout>
          <Footer />
          <Credits />
        </FooterLayout>
    </>
  )
}
export default BlogPage