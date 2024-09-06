"use client"
import styled from "styled-components";
import Link from "next/link"


const Section = styled.section`
  height: 100%;
  padding:4rem;
  color:white;
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10%;

  h4 {
    font-size:1.2rem;
    font-weight:500;
    margin-bottom: 1rem;
  }
`;

const Ul = styled.ul`
  display:flex;
  align-items: flex-start;
  flex-direction: column;
  list-style-type: none;
  color: var(--text-color-gray);
`;

const renters = [
    {name:"About Us",href:"/about"},
    {name:"How it works",href:"#"},
    {name:"Our fleet",href:"/vehicules"},
    {name:"FAQ's",href:"#"},
    {name:"contacts",href:"/contacts"},
    {name:"locations",href:"#"},

]

const resources = [
    {name:"Media & Blog",href:"/blog"},
    {name:"Partners",href:"#"},
    {name:"Privacy policy",href:"#"},
    {name:"Cookies policy",href:"#"},
    {name:"Legal information",href:"#"},
    {name:"Help center",href:"#"},

]

const Footer = () => {

  return (
    <Section>
        <div>
            <h3>SeonDrive</h3>
            <p>Via Callicratide 36</p>
            <small>Roisson, Aosta(AOI), 111 000</small>
            <small>032 0575190</small>
            <div className="social-icon-container">
                
            </div>
        </div>

        <div>
            <h4>For Renters</h4>
            <Ul>
                {renters.map(link => {
                    return (
                        <li key={link.name}>
                            <Link href={link.href}> 
                                {link.name}
                            </Link>
                        </li>
                    )
                })}
            </Ul>

        </div>
        <div>
            <h4>Resources</h4>
            <Ul>
                {resources.map(link => {
                    return (
                        <li key={link.name}>
                            <Link href={link.href}> 
                                {link.name}
                            </Link>
                        </li>
                    )
                })}
            </Ul>
        </div>
        <div>
            <h4>Contact Us</h4>
            <p>Monday - Sunday</p>
            <strong>8:00 AM - 5:00 PM</strong>
            <p>Hotline</p>
            <strong>978-806-3277</strong>
            <p>Email</p>
            <a href="mailto:seondrive@gmail.com"><strong>seondrive@gmail.com</strong></a>

        </div>
    </Section>
  )
}
export default Footer