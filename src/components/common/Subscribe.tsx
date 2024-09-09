import styled from "styled-components";

const Section = styled.section`
  height:30vh;
  min-height:200px;
  padding:4rem 8rem;
  text-align:center;

  h3 {
    font-size: clamp(1rem, 3vw, 2rem);

  }
`

const Subscribe = () => {
  return (
    <Section>
        <h3>Subscribe and get 20/ off your first rental.</h3>
        <form action="">
            <input type="text" />    
        </form>
    </Section>
  )
}
export default Subscribe