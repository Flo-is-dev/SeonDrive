"use client"
import styled from "styled-components";

const Section = styled.section`
  height:50px;
  background-color: var(--background-gray-light);
  position: absolute ;
  bottom: 0 ;
  width: 100%;
  display:  flex ;
  justify-content: center;
align-items: center;

  p {
    color:white;
  }
`;

const Credits = () => {
  return (
    <Section>
        <p>© 2024 SeonDrive LLC. All rights reserved</p>
        </Section>
  )
}
export default Credits