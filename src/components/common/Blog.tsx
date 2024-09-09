'use client'
import styled from "styled-components";
import { useTranslations, useLocale } from 'next-intl';
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Section = styled.section`
  min-height: 60vh;
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

const BlogCardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 250px;
  width: 100%;
  overflow: hidden;
  border-radius: 18px;
  margin-bottom: 1rem;

  img {
    object-fit: cover;
    height: 100% !important;
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
      <div style={{ margin: "4rem auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "3rem" }}>
        {translatedArticles.map((article) => {
          const link = `/${locale}/blog/${article.id}`; 
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
                  layout="responsive"
                />
                <Time dateTime={article.date}>{article.date}</Time>
                <Arrow>
                    <FontAwesomeIcon icon={faArrowRight} size="lg" />
                </Arrow>
              </ImageContainer>
              <h2>{article.title}</h2>
              <Link href={link} style={{ marginTop: "auto" }}>See Article</Link>
            </BlogCardContainer>
          );
        })}
      </div>
    </Section>
  );
};

export default Blog;
