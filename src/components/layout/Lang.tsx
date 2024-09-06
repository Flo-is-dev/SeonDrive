import styled from "styled-components";

const Btn = styled.button`
  padding:10px 18px;
  border: 1px solid white;
  background:none;
  border-radius: 20px;
  color:white;
  font-weight:bold;
  cursor:pointer;
`;
const LanContainer = styled.div`
 flex:1;
 text-align: end;
`;

const Lang = () => {
  return (
    <LanContainer>
        <Btn>Lang</Btn>
    </LanContainer>
    
  )
}
export default Lang