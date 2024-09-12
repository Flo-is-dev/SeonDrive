'use client';
import Image from "next/image";
import styled from 'styled-components';
import { useTranslations } from 'next-intl';
import { notFound } from "next/navigation";

const ArticleContainer = styled.div`
  margin: 4rem auto;
  max-width: 800px;

  img  {
    width: 100%; 
    height: auto; 
    max-width: 100%; 
    max-height: 100%; 
  }
`;

const ArticleTitle = styled.h2`
  font-size: 2rem;
  margin-top: 1rem;
`;

const ArticleInfo = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
`;

const ArticleContent = styled.article`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #333;
`;

const Article = ({ params }: { params: { id: string } }) => {
  const t = useTranslations('blog'); 
  // Récupère les articles traduits à partir du JSON de traduction sous la clé 'articles'
  const articles = t.raw('articles');  // Récupère l'objet brut sous 'articles'
  
  
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
        width={800}
        height={400}
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
