"use client"
import styled from "styled-components";
import Image from "next/image";

const Section = styled.section`
  height:75vh;
  padding: 4rem;
  display:flex;
  justify-content: space-around;
`;

const TxtContainer = styled.div`
width: 33%;
  h2 {
    font-size: clamp(2rem,6vw,4.5rem);
  }
  p {
    color: var(--text-color-gray);
    margin-top: 1.5rem;
  }
`;
const ImgContainer = styled.div`
    width: 55%;
    display:grid;
    gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
        "fe ca"
        "fe ro"
        "fe ro";
    
    div:has(img):nth-child(1) {
        max-height: 100%;
        grid-area: fe;
        overflow:hidden;
        border-radius:20px;
    }
    div:has(img):nth-child(1) img {
        object-fit: contain;
       
    }
    div:has(img):last-child {
        grid-area: ro;
        object-fit: contain;
    }
    div:has(img):last-child img {
        object-fit: contain;
        border-radius:20px;
    }
`;
const TxtCard = styled.div`
    background-color: var(--primary-gray);
    border-radius:20px;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    color:white;
    grid-area: ca;
    font-size:3rem;
    padding-block:2rem;
    small {
    font-size:1rem;
        margin-top:1rem;
    }
`;

const About = () => {
  return (
    <Section>
        <TxtContainer>
            <h2>About Us</h2>   
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sequi et saepe enim rerum! Sed asperiores dolorum veritatis, at delectus placeat maxime quos nulla ratione sunt, eligendi amet eos voluptate sapiente eveniet distinctio enim reiciendis debitis. Fugiat ratione libero explicabo?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia possimus dolore optio vel nam sit animi sequi odit aut adipisci.</p>
        </TxtContainer>
        <ImgContainer>
            <div>
                <Image
                src="/about/ferrari.jpg"
                width={400}
                height={350}
                alt="Picture of the author"
                layout="responsive"
                />
            </div>
            <TxtCard>
                +10 years
                <small>Experience</small>
            </TxtCard>
            <div>
                <Image
                    src="/about/rolls-1.jpg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    layout="responsive"
                />     
            </div>
           

        </ImgContainer>
        
    </Section>
  )
}
export default About