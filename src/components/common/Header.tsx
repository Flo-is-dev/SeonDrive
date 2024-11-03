"use client";

import Link from "next/link";
import NavList from "@/components/layout/Nav";
import Lang from "@/components/layout/Lang";
import styled from "styled-components";
import Image from "next/image";
import Auth from "../layout/Auth";

const HeaderLayout = styled.header`
  padding: 1rem;
  width: 100%;
  height: 92px;
  padding-inline: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 100;
  @media (max-width: 450px) {
    padding-inline: 1rem;
  }
`;

const Nav = styled.nav`
  flex: 1;
  @media (max-width: 950px) {
    display: none;
  }
`;
const BrandDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const Linke = styled(Link)`
  text-decoration: none;
`;

const Brand = styled.span`
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  font-family: monospace, Verdana, sans-serif;
  @media (max-width: 650px) {
    font-size: 1.5rem;
  }
`;

const Header = () => {
  return (
    <HeaderLayout>
      <Nav>
        <NavList />
      </Nav>
      <Linke href={`/`}>
        <BrandDiv>
          <Image
            src="/logo-seondrive.png"
            width={60}
            height={60}
            alt="SeonDrive Logo"
          />

          <Brand>SeonDrive</Brand>
        </BrandDiv>
      </Linke>

      <Lang />
      <Auth />
    </HeaderLayout>
  );
};
export default Header;
