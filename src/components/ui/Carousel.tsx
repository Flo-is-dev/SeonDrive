"use client";

import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useMessages } from "next-intl";

// Interface pour les véhicules
interface Vehicle {
  id: number;
  name: string;
  price: string;
  image: string;
}

// Styled Components

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  /* overflow: hidden; */
  position: relative;
  padding: 20px 0;
`;

const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  padding-left: 2rem;
`;

const Card = styled.div`
  min-width: 300px;
  margin: 0 10px;
  padding: 20px;
  border-radius: 20px;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover,
  &.selected {
    transform: scale(1.05);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
    background-color: #fce9db;
  }

  > div {
    width: 100%;
  }
`;

const VehicleImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 15px;
`;

const VehicleName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const VehiclePrice = styled.p`
  font-size: 14px;
  color: #777;
`;

// Boutons de navigation
const ArrowButton = styled.button<{ direction: "left" | "right" }>`
  position: absolute;
  top: -6rem;
  ${({ direction }) => (direction === "left" ? "right: 150px" : "right: 10px")};
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 20px;
  width: 45px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;

  @media (max-width: 950px) {
    top: -4rem;
    ${({ direction }) => (direction === "left" ? "left: 30%" : "left: 70%")};
    transform: translateX(-50%);
  }
`;

// Conteneur des points de pagination
const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Dot = styled.span<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? "38px" : "16px")};
  height: 6px;
  border-radius: 25px;
  background-color: ${({ $active }) => ($active ? "#bbaba5" : "#FFF7F4")};
  margin: 0 5px;
  transition:
    background-color 0.3s ease,
    width 0.3s ease,
    border-radius 0.3s ease;
  cursor: pointer;
`;

// Composant du Carousel
const CustomCarousel: React.FC = () => {
  const messages = useMessages();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Récupérer les véhicules depuis les traductions
  const vehicles = Array.isArray(messages.carsCarousel)
    ? (messages.carsCarousel as Vehicle[])
    : [];

  console.log("Vehicles data:", vehicles);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = (carouselRef.current.children[0] as HTMLElement)
        .clientWidth;
      carouselRef.current.style.transform = `translateX(-${
        index * (cardWidth + 20)
      }px)`;
    }
  };

  const handleNext = () => {
    const maxIndex = vehicles.length - 1;
    const newIndex = Math.min(currentIndex + 1, maxIndex);
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex = Math.max(currentIndex - 1, 0);
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  return (
    <CarouselContainer>
      <CarouselWrapper ref={carouselRef}>
        {vehicles.map((vehicle, index) => (
          <Card
            key={vehicle.id}
            className={index === currentIndex ? "selected" : ""}
          >
            <div>
              <VehicleName>{vehicle.name}</VehicleName>
              <VehiclePrice>{vehicle.price}</VehiclePrice>
            </div>

            <VehicleImage src={vehicle.image} alt={vehicle.name} />
          </Card>
        ))}
      </CarouselWrapper>
      <ArrowButton
        direction="left"
        onClick={handlePrev}
        aria-label="Slide précédent"
      >
        &lt;
      </ArrowButton>
      <ArrowButton
        direction="right"
        onClick={handleNext}
        aria-label="Slide suivant"
      >
        &gt;
      </ArrowButton>
      <DotsContainer>
        {vehicles.map((_, index) => (
          <Dot
            key={index}
            $active={index === currentIndex}
            onClick={() => {
              setCurrentIndex(index);
              scrollToIndex(index);
            }}
          />
        ))}
      </DotsContainer>
    </CarouselContainer>
  );
};

export default CustomCarousel;
