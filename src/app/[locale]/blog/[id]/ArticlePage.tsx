"use client";
import Image from "next/image";
import styled from "styled-components";
import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";

const ArticleContainer = styled.div`
  margin: 4rem;
  max-width: 1200px;
  position: relative;

  img {
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }

  h1:before {
    content: "";
    height: 120%;
    width: 2px;
    background: lightgray;
    position: absolute;
    top: 0%;
    left: 0;
    border-radius: 20px;
    @media (max-width: 1200px) {
      height: 50%;
    }
    @media (max-width: 750px) {
      width: 0px;
    }
  }
`;

const ArticleTitle = styled.h1`
  font-size: 5rem;
  padding-left: 3rem;
  position: absolute;
  top: 10%;
  left: -40%;
  width: 100%;
  line-height: 5rem;
  font-weight: 500;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  mix-blend-mode: overlay;
  @media (max-width: 1200px) {
    position: static;
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 3rem;
    padding-left: 1rem;
    padding-block: 2rem;
    mix-blend-mode: Normal;
  }
`;

const ArticleInfo = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 2rem;
`;

const ArticleContent = styled.article`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  column-count: 2;
  text-align: justify;
  @media (max-width: 750px) {
    column-count: 1;
  }
`;

const Article = ({ params }: { params: { id: string } }) => {
  const t = useTranslations("blog");
  // Récupère les articles traduits à partir du JSON de traduction sous la clé 'articles'
  const articles = t.raw("articles"); // Récupère l'objet brut sous 'articles'

  const articleKey = `article${params.id}`;
  const article = articles[articleKey];

  // Si l'article n'est pas trouvé, on affiche une page 404
  if (!article) {
    notFound();
    return null;
  }

  return (
    <ArticleContainer>
      <Image
        src={`/blog/blog${article.id}.jpg`}
        width={700}
        height={350}
        alt={article.title}
        priority
      />
      <ArticleTitle>{article.title}</ArticleTitle>
      <ArticleInfo>{`le ${article.date} par ${article.author}`}</ArticleInfo>
      <ArticleContent>{article.description}</ArticleContent>
    </ArticleContainer>
  );
};

export default Article;
