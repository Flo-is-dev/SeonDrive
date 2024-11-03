import styled from "styled-components";
import Image from "next/image";
import Btn from "../ui/Btn";
import { useTranslations } from "next-intl";

const Section = styled.section`
  min-height: 65vh;
  padding: 2rem 4rem;
  background: linear-gradient(to right, #425a4d 50%, #2e3b34 50%);
  display: flex;
  align-items: center;
  color: #fff;
  gap: 2rem;

  @media (max-width: 950px) {
    background: linear-gradient(to bottom, #425a4d 50%, #2e3b34 50%);
    flex-direction: column;
    padding: 2rem;
  }

  h2 {
    font-size: clamp(2rem, 6vw, 4rem);
  }

  p {
    font-size: clamp(2rem, 6vw, 2.4rem);
    max-width: 350px;
    span {
      color: #b9b9b9;
    }
  }

  div:has(img) {
    /* flex: 1; */
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0rem 4rem;
    width: 100%;
  }

  img {
    width: auto;
    height: 25vw;
    max-width: 100%;
    max-height: 450px;

    @media (max-width: 550px) {
      height: 45vw;
      max-width: none;
    }
  }
`;

const TxtContainer = styled.div`
  height: fit-content;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 30px;
  max-width: 60%;

  @media (max-width: 950px) {
    max-width: 100%;
  }
`;

const Promo = () => {
  const t = useTranslations("HomePage");
  const u = useTranslations("Promo");

  return (
    <Section>
      <TxtContainer>
        <h2>{u("offerTitle")}</h2>
        <p>
          {u("offer")}/<span>{u("day")}</span>
        </p>
        <Btn link={"/"} content={t("btnRent")} />
      </TxtContainer>
      <div>
        <Image
          src="/cars-nobg/rolls-2-removebg.webp"
          width={400}
          height={400}
          alt="Picture of the author"
        />
      </div>
    </Section>
  );
};
export default Promo;
