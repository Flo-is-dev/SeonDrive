import CustomCarousel from "../ui/Carousel";
import styled from "styled-components";
import { useTranslations } from "next-intl";

const CarouselContainer = styled.div`
  width: 100%;
  min-height: 550px;
  background-color: var(--background-champagne-dark);
  margin: auto;
  overflow: hidden;
  position: relative;
  padding: 4rem 8rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: 950px) {
    padding: 4rem;
    gap: 4rem;
  }

  h2 {
    font-size: clamp(2rem, 5vw, 3.5rem);
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-bottom: 3rem;

  @media (max-width: 550px) {
    flex-direction: column;
    width: 100%;
    margin-bottom: 2rem;
  }
`;

const UserCarousel = () => {
  const t = useTranslations("UserCarousel");

  return (
    <CarouselContainer>
      <TextContainer>
        <h2>{t("title")}</h2>
        <p>{t("subtitle")}</p>
      </TextContainer>
      <CustomCarousel />
    </CarouselContainer>
  );
};
export default UserCarousel;
