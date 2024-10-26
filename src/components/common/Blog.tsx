'use client'
import styled from "styled-components";
import { useTranslations, useLocale } from 'next-intl';
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Section = styled.section`
  min-height: 500px;
  padding: 4rem 8rem;

  h2 {
    font-size: clamp(1rem, 3vw, 1.1rem);
    margin-right: 2rem
  }
  > h2 {
    font-size: clamp(2rem, 6vw, 4.5rem);
    display: inline-block;
  }
`;

const BlogCardSection = styled.div`
   margin: 4rem auto; 
   display: grid; 
   grid-template-columns: repeat(3,1fr); 
   gap: 3rem

`;

const BlogCardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

const TxtContainer = styled.div`
  flex:1
`;

const ImageContainer = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  margin-bottom: 1rem;
  min-height: 170px;
  flex:2;

  img {
    object-fit: cover;
    width: 100%; 
    height: 100%; 
    max-width: 100%; 
    max-height: 100%; 
    border-radius: 18px;
  }
`;

const Time = styled.time`
  background-color: #F4C6A4;
  font-size: 14px;
  border-radius: 8px;
  padding: 6px 12px;
  position: absolute;
  bottom: 9%;
  left: 7%;
  font-weight: 500;
`;

const Arrow = styled.div`
  background-color: white;
    height: 40px;
    width: 40px;
    border-radius: 50px;
    padding: 0px;
    position: absolute;
    top: 6%;
    right: 5%;
    display: flex;
    justify-content:center;
    align-items:center;

    svg {
        font-size:1rem;
    }
`;

    interface BlogProps {
    filtered: boolean;
  }

const Blog: React.FC<BlogProps> = ({filtered}) => {
  const t = useTranslations('blog'); 
  const locale = useLocale();

  // Récupère les articles traduits à partir du JSON de traduction sous la clé 'articles'
  const articles = t.raw('articles');  // Récupère l'objet brut sous 'articles'
  const translatedArticles = Object.keys(articles).map((key) => articles[key]);

  return (
    <Section>
      <h2>Blog</h2>
      <Link href={`/${locale}/blog`}>{t('blogLink')}</Link>
      <BlogCardSection >
        {translatedArticles.map((article, index) => {
          const link = `/${locale}/blog/${article.id}`; 
            //   Permet de limiter le nombre d'article à 3 ou full
          if (filtered) {
            if (article.id < translatedArticles.length - 2) {
            return null;  
          }
          }
          
          return (
            <BlogCardContainer key={article.id}>
              <ImageContainer>
                <Image
                  src={`/blog/blog${article.id}.jpg`}
                  width={400}
                  height={300}
                  alt={article.title}
                  priority={index === 0}  // Ajoute la propriété `priority` pour la première image
                />
                <Time dateTime={article.date}>{article.date}</Time>
                <Arrow>
                    <FontAwesomeIcon icon={faArrowRight} size="lg" />
                </Arrow>
              </ImageContainer>
              <TxtContainer>
                <h2>{article.title}</h2>
                <Link href={link} style={{ marginTop: "auto" }}>{t('blogLink')}</Link>
              </TxtContainer>
              
            </BlogCardContainer>
          );
        })}
      </BlogCardSection>
    </Section>
  );
};

export default Blog;
