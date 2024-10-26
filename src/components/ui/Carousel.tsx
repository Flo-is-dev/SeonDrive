import React, { useRef, useState } from 'react';
import styled from 'styled-components';

interface Vehicle {
  id: number;
  name: string;
  price: string;
  image: string;
}

const vehicles: Vehicle[] = [
  { id: 1, name: 'McLaren 720S', price: '$420/day', image: '/path/to/mclaren.png' },
  { id: 2, name: 'Bentley Continental GT V8', price: '$380/day', image: '/path/to/bentley.png' },
  { id: 3, name: 'Rolls-Royce Spectre', price: '$400/day', image: '/path/to/rollsroyce.png' },
  { id: 4, name: 'Ferrari', price: '$380/day', image: '/path/to/ferrari.png' },
];

// Styled Components
const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  overflow: hidden;
  position: relative;
  padding: 20px 0;
`;

const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease;
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
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover,
  &.selected {
    transform: scale(1.05);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
  }
`;

const VehicleImage = styled.img`
  width: 150px;
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

// Nous créons un composant de bouton stylisé en utilisant styled-components.
const ArrowButton = styled.button<{ direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${({ direction }) => (direction === 'left' ? 'left: 10px' : 'right: 10px')};
  transform: translateY(-50%);
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Dot = styled.span<{ active: boolean }>`
  width: ${({ active }) => (active ? '16px' : '8px')};
  height: 8px;
  border-radius: 25px;
  background-color: ${({ active }) => (active ? '#333' : '#ddd')};
  margin: 0 5px;
  transition: background-color 0.3s ease;
  cursor: pointer;
`;

const CustomCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0].clientWidth;
      carouselRef.current.style.transform = `translateX(-${index * (cardWidth + 20)}px)`;
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
          <Card key={vehicle.id} className={index === currentIndex ? 'selected' : ''}>
            <VehicleImage src={vehicle.image} alt={vehicle.name} />
            <VehicleName>{vehicle.name}</VehicleName>
            <VehiclePrice>{vehicle.price}</VehiclePrice>
          </Card>
        ))}
      </CarouselWrapper>
      <ArrowButton direction="left" onClick={handlePrev}>&lt;</ArrowButton>
      <ArrowButton direction="right" onClick={handleNext}>&gt;</ArrowButton>
      <DotsContainer>
        {vehicles.map((_, index) => (
          <Dot key={index} active={index === currentIndex} onClick={() => scrollToIndex(index)} />
        ))}
      </DotsContainer>
    </CarouselContainer>
  );
};

export default CustomCarousel;
