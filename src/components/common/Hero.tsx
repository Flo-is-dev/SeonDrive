"use client"
import styled from "styled-components";
import { useTranslations } from 'next-intl';
import Btn from "../ui/Btn";
import Tabs from "../ui/Tabs";

const Section = styled.section`
  background: url("/home/hero-bg-copie.jpg") center/cover;
  height:100vh;
  padding:8rem  4rem;
  position: relative;

  h1 {
    color: white;
    font-size: clamp(2rem,5vw,4.5rem);
    width: 60%;
    font-weight: 500;
    text-wrap: pretty;
    margin-bottom:3rem;
    line-height:65px;
  }
  > p {
    color: white;
    max-width:400px;
    margin:100px 0px 0px auto;
  }
`;

const StyledTabs = styled(Tabs)`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 90%;
  height: 100px;

  .tab-content {
    background: white;
    height: 100%;
    margin-top:10px;
    border-radius: 8px;
    padding: .5rem 0rem;
    display: flex;
    justify-content:space-between;
    align-items:center;

    > * {
        /* flex:1; */
    }

    strong {
        color: #b7b7b7;
        font-weight:400;
        font-size:1rem;
    }

    > div {
        position:relative;
        padding-inline:1.5rem;
        width:fit-content;
    }

    > div:nth-child(n+2):after {
            content:"";
            position: absolute;
            border-radius: 4px;
            top: 50%;
            left: 0%;
            transform: translate(0%,-50%);
            height:100%;
            width: 1px;
            background-color:#b7b7b7;

    }

    input, input:focus-visible {
        border: none;
        outline: none;
        font-weight:500;
        font-size:.9rem;
    }

    > a {
        background-color: #F4C6A4;
        border-radius: 8px;
        height:100%;
        padding-inline: 2rem;
        margin-right: .5rem;
        width: fit content;
        display: flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        text-decoration:none;
        font-weight:500;
        font-size: 1rem;


        &:hover {
        background-color: #F4C6A4;

        }

        img {
            margin-left:10px;
        }
    }
  }

  .tab-buttons {
   

    button {
        padding:8px 18px;
        font-size:1rem;
        border-radius:4px;
        border:none;
        margin-right:10px;
        background: #202020;
        color: white;
        font-weight:400;
        cursor: pointer;
    }
    button.active {
      background: white;
      color: black;
    }
  }
`;

const Hero = () => {
    const t = useTranslations('HomePage');

  return (
    <Section>
        <div>
            <h1>{t('heroTitle')}</h1>
            <Btn link={"/"} content={t('btnRent')}/>
        </div>
        
        <p>{t('heroTxt')}</p>

        <StyledTabs />
    </Section>
  )
}
export default Hero

