import styled from "styled-components";
import { useTranslations,useLocale } from 'next-intl';
import Link from "next/link";


const Section = styled.section`
background: orange;
  height:60vh;
  padding:4rem;
`

const Blog = () => {
    const t = useTranslations('Blog');
  const locale = useLocale();


  return (
    <Section>
        
        <Link href={`/${locale}/blog`}>{t('blogLink')}</Link>  
    </Section>
  )
}
export default Blog