"use client"
import styled from "styled-components";

const Section = styled.section`
  background: url("/home/hero-bg.jpg") center/cover;
  height:100vh;
`;

const Hero = () => {
  return (
    <Section>
        <p>Hero</p>
    </Section>
  )
}
export default Hero