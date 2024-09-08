import styled from "styled-components";
import LocalSwitcher from "./local-switcher"

const LanContainer = styled.div`
 flex:1;
`;

const Lang = () => {
  return (
    <LanContainer>
        <LocalSwitcher/>
    </LanContainer>
    
  )
}
export default Lang