'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { useTranslations,useLocale  } from "next-intl";

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  gap: 4vw;
  color: white;
  width: fit-content;
`;

const Header = () => {
  const t = useTranslations('navigation'); // Utilise le namespace 'navigation' pour les traductions
  const pathname = usePathname();
  const locale = useLocale();
  // Définis les liens avec les traductions
  const navLinks = [
    { name: t('about'), href: "/about" },
    { name: t('vehicules'), href: "/vehicules" },
    { name: t('blog'), href: "/blog" },
    { name: t('contacts'), href: "/contacts" },
  ];

  return (
    <Ul>
      {navLinks.map(link => {
        // On vérifie si pathname n'est pas null avant d'utiliser startsWith
        const isActive = pathname ? pathname.startsWith(link.href) : false;
        return (
          <li key={link.href}>
            <Link href={`/${locale}${link.href}`} className={isActive ? "activeNav" : ""}>
              {link.name}
            </Link>
          </li>
        );
      })}
    </Ul>
  );
};

export default Header;
