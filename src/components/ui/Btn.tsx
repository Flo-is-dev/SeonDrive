import Link from "next/link";
import styled from "styled-components";

const Button = styled.div`
 
width: fit-content;

  a {background-color: var(--primary-champagne);
    padding: 10px 22px;
    border-radius: 20px;
    text-decoration:none;  
    font-weight: 400;
    color:black;

    &:hover {
        background-color: #ffdfd0;
    }
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