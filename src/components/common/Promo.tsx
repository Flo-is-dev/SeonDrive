
import styled from "styled-components";
import Image from "next/image";
import Btn from "../ui/Btn";
import { useTranslations } from 'next-intl';


const Section = styled.section`
  min-height:65vh;
  padding:2rem 4rem;
  background: linear-gradient(to right, #425A4D 50%, #2E3B34 50%);
  display:flex;
  align-items: center;
  color: #fff;

  h2 {
    font-size: clamp(2rem,6vw,4.5rem);
  }

  p {
    font-size: clamp(2rem,6vw,2.4rem);
    max-width:350px;
    span {
        color: #b9b9b9;
    }
  }

  div:has(img) {
    flex: 1;
    height: fit-content;
    display: flex;
    justify-content:center;
    align-items:center;
    padding:0rem 4rem
  }

  img {
    max-width:700px
  }
`;

const TxtContainer = styled.div`
height: fit-content;
display: flex;
align-items:flex-start;
flex-direction:column;
gap: 30px;
`


const Promo = () => {
    const t = useTranslations('HomePage');
    // const u = useTranslations('Promo');

  return (
    <Section>
        <TxtContainer>
            <h2>Best offer</h2>
            <p>Bentley Flying Spur for $400/<span>day</span></p>
            <Btn link={"/"} content={t('btnRent')}/>
        </TxtContainer>
        <div>
            <Image
                src="/cars-nobg/rolls-2-removebg.png"
                width={400}
                height={300}
                alt="Picture of the author"
                layout="responsive"
                />
        </div>
        

    </Section>
  )
}
export default Promo