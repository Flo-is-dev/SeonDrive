"use client"
import styled from "styled-components";

const Section = styled.section`
  background: url("/home/hero-bg.jpg") center/cover;
  height:100vh;
  padding:8rem  4rem;
  /* position: relative; */

  h1 {
    color: white;
    font-size: clamp(2rem,6vw,4.5rem);
  }
  p {
    color: white;
    max-width:400px;
    margin:100px 0px 0px auto;
  }
`;

const Hero = () => {
  return (
    <Section>
        <h1>Luxury car <br></br> rental in italy</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quisquam qui architecto quia magni harum assumenda sit aliquid neque mollitia!</p>
        
    </Section>
  )
}
export default Hero