'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import styled from "styled-components";

const Ul = styled.ul`
  display:flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  gap:4vw;
  color: white;
  width: fit-content;
`;

const navLinks = [
    {name:"About",href:"/about"},
    {name:"Vehicules",href:"/vehicules"},
    {name:"Blog",href:"/blog"},
    {name:"Contacts",href:"/contacts"},

]

const Header = () => {
  const pathname = usePathname()

  return (
    <Ul>
        {navLinks.map(link => {
            // On vérifie si pathname n'est pas null avant d'utiliser startsWith
            const isActive = pathname ? pathname.startsWith(link.href) : false
            return (
                <li key={link.name}>
                    <Link href={link.href} className={isActive ? "activeNav" : ""}> 
                        {link.name}
                    </Link>
                </li>
            )
        })}
    </Ul>
  )
}
export default Header