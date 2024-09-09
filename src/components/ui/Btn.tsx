
import Link from "next/link";
import styled from "styled-components";

const Button = styled.div`
 background: var(--primary-champagne);
 padding: 10px 22px;
    width: fit-content;
    border-radius: 20px;
  

  a {
    text-decoration:none;  
    font-weight: 400;
    color:black;
  }
`;

interface BtnProps {
    link: string; 
    content: React.ReactNode;
  }

const Btn: React.FC<BtnProps> = ({ link, content }) => {
  return (
    <Button>
        <Link href={link}>{content} </Link> 
    </Button>
    
  )
}
export default Btn