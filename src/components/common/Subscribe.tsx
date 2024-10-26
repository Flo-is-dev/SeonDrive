import styled from "styled-components";

const Section = styled.section`
  min-height:200px;
  text-align:center;
  display: flex;
  justify-content:flex-start;
  align-items:center;
  flex-direction:column;

  h3 {
    font-size: clamp(1rem, 3vw, 2.5rem);

  }
`

const Form = styled.form`
position:relative;
`

const TextInput = styled.input`
margin-top:30px;
border: 1px solid lightgray;
padding:10px 100px 10px 5px;
border-radius:8px;

&:focus-within {
    border-color:#5e8770;
    outline:none;
}
`

const SubmitInput = styled.input`
position: absolute;
top: 50%;
right: 2%;
background-color: var(--primary-green);
color: white;
font-weight:300;
border:none;
padding:6px 12px;
border-radius:6px;
cursor:pointer;

&:hover {
    background-color: var(--secondary-green)
}
`


const Subscribe = () => {
  return (
    <Section>
        <h3>Subscribe and get 20% off <br/> your first rental.</h3>
        <Form action="php">
            <TextInput type="text" placeholder="exemple@gmail.com"/>
            <SubmitInput type="submit" value="Submit"/>
        </Form>
    </Section>
  )
}
export default Subscribe