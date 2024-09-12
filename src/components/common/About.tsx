"use client"
import styled from "styled-components";
import Image from "next/image";

const Section = styled.section`
  min-height:75vh;
  padding: 4rem;
  display:flex;
  justify-content: space-around;
`;

const TxtContainer = styled.div`
width: 30%;
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
    height: 100%;
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
        max-height:400px;
    }
    div:has(img):nth-child(1) img {
        object-fit: cover;
       height: 100% !important;
       width: 100%; 
       height: 100%; 
       max-width: 100%; 
       max-height: 100%; 
    }
    div:has(img):last-child {
        grid-area: ro; 
    }
    div:has(img):last-child img {
        object-fit: cover;
        border-radius:20px;
       height: 100% !important;
       width: auto; 
       height: 100%; 
       max-width: 100%; 
       max-height: 100%; 

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
    padding-block:1rem;
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
                height={300}
                alt="Picture of the author"
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
                />     
            </div>
           

        </ImgContainer>
        
    </Section>
  )
}
export default About