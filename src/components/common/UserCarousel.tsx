import CustomCarousel from "../ui/Carousel";
import styled from 'styled-components';


const CarouselContainer = styled.div`
  width: 100%;
  height:500px;
  background-color: var(--background-champagne-dark);
  margin: auto;
  overflow: hidden;
  position: relative;
  padding: 4rem 8rem;
  display: flex;
  justify-content:center;
  align-items:flex-start;
  flex-direction:column;

  h2 {
    font-size: clamp(2rem, 5vw, 3.5rem);
  }
`;

const TextContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:40px;
`



const UserCarousel = () => {
  return (
    <CarouselContainer>
            <TextContainer>
                <h2>Vehicules</h2>
                <p>Lorem ipsum dolor sit amet consectetur, <br/> adipisicing elit. Distinctio incidunt nobis</p>
            </TextContainer>
        <CustomCarousel/>

    </CarouselContainer>
  )
}
export default UserCarousel