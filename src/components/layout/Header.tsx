'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
    {
        name:"cv",href:"/cv"
    },
    {
        name:"contact",href:"/contact"
    },
    {
        name:"products",href:"/products"
    },

]

const Header = () => {

    const pathname = usePathname()

  return (
    <ul>
        {navLinks.map(link => {
            const isActive = pathname.startsWith(link.href)
            return (
                <li key={link.name}>
                    <Link href={link.href} className={isActive ? "text-green-500" : "text-blue-500"}> 
                        {link.name}
                    </Link>
                </li>
            )
        })}
    </ul>
  )
}
export default Header