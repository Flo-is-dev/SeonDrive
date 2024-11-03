"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Section = styled.section`
  min-height: 500px;
  padding: 4rem 8rem;

  @media (max-width: 950px) {
    padding: 4rem;
  }
  @media (max-width: 450px) {
    padding: 2rem;
  }

  h2 {
    font-size: 1rem;
  }

  > h2 {
    font-size: clamp(2rem, 6vw, 4.5rem);
    display: inline-block;
    margin-right: 2rem;
  }
`;

const BlogCardSection = styled.div`
  margin: 4rem auto 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;

  @media (max-width: 450px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

const BlogCardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

const TxtContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 2rem;

  a {
    align-self: flex-end;
    font-size: 0.9rem;
    text-decoration: none;
    font-style: italic;

    &:hover {
      text-decoration: underline;
    }
  }
  span {
    font-size: 1.1rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  margin-bottom: 1rem;
  min-height: 170px;
  flex: 3;

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
  background-color: #f4c6a4;
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
  justify-content: center;
  align-items: center;

  svg {
    font-size: 1rem;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const PaginationButton = styled.button`
  background-color: #f4c6a4;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0 1rem;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const PageInfo = styled.span`
  font-size: 1rem;
`;

const ArticlesPerPageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1rem;

  label {
    margin-right: 0.5rem;
    font-size: 1rem;
  }

  select {
    padding: 0.3rem 0.5rem;
    font-size: 1rem;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
`;

interface Article {
  id: number;
  title: string;
  date: string;
}

interface BlogProps {
  filtered: boolean;
}

const Blog: React.FC<BlogProps> = ({ filtered }) => {
  const t = useTranslations("blog");
  const locale = useLocale();

  // Récupère les articles traduits à partir du JSON de traduction sous la clé 'articles'
  const articles = t.raw("articles"); // Récupère l'objet brut sous 'articles'
  const translatedArticles: Article[] = Object.values(articles);

  // Tri des articles par date décroissante
  const sortedArticles = [...translatedArticles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // État pour la pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState<number | "all">(3);

  // Calcul du nombre total de pages
  const totalPages =
    articlesPerPage === "all"
      ? 1
      : Math.ceil(sortedArticles.length / (articlesPerPage as number));

  // Obtenir les articles pour la page actuelle
  const indexOfLastArticle =
    articlesPerPage === "all"
      ? sortedArticles.length
      : currentPage * (articlesPerPage as number);
  const indexOfFirstArticle =
    articlesPerPage === "all"
      ? 0
      : indexOfLastArticle - (articlesPerPage as number);
  const articlesToDisplay =
    articlesPerPage === "all"
      ? sortedArticles
      : sortedArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  // Gestion des changements de page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Gestion du changement d'articles par page
  const handleArticlesPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = e.target.value;
    if (value === "all") {
      setArticlesPerPage("all");
      setCurrentPage(1);
    } else {
      setArticlesPerPage(Number(value));
      setCurrentPage(1);
    }
  };

  return (
    <Section>
      <h2>{t("title")}</h2>
      {filtered && <Link href={`/${locale}/blog`}>{t("blogLink")}</Link>}

      <ArticlesPerPageContainer>
        <label htmlFor="articlesPerPage">{t("articlePage")}:</label>
        <select
          id="articlesPerPage"
          value={articlesPerPage}
          onChange={handleArticlesPerPageChange}
        >
          <option value={3}>3</option>
          <option value={6}>6</option>
          <option value={9}>9</option>
          {/* <option value="all">&#8734;</option> */}
        </select>
      </ArticlesPerPageContainer>

      <BlogCardSection>
        {articlesToDisplay.map((article, index) => {
          const link = `/${locale}/blog/${article.id}`;

          return (
            <BlogCardContainer key={article.id}>
              <ImageContainer>
                <Image
                  src={`/blog/blog${article.id}.jpg`}
                  width={400}
                  height={300}
                  alt={article.title}
                  priority={index === 0} // Ajoute la propriété `priority` pour la première image
                />
                <Time dateTime={article.date}>{article.date}</Time>
                <Arrow>
                  <FontAwesomeIcon icon={faArrowRight} size="lg" />
                </Arrow>
              </ImageContainer>
              <TxtContainer>
                <h2>{article.title}</h2>
                <Link href={link} style={{ marginTop: "auto" }}>
                  {t("blogLink")} <span>→</span>
                </Link>
              </TxtContainer>
            </BlogCardContainer>
          );
        })}
      </BlogCardSection>

      {/* Contrôles de pagination */}
      {articlesPerPage !== "all" && (
        <PaginationContainer>
          <PaginationButton
            disabled={currentPage === 1}
            onClick={handlePreviousPage}
          >
            {t("previous")}
          </PaginationButton>
          <PageInfo>
            {currentPage}/{totalPages}
          </PageInfo>
          <PaginationButton
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
          >
            {t("next")}
          </PaginationButton>
        </PaginationContainer>
      )}
    </Section>
  );
};

export default Blog;
