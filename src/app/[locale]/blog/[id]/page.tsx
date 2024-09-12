import { articles } from "@/app/data";
import { Metadata } from "next";
import Article from "./ArticlePage";

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const article = articles.find((element) => element.id === parseInt(params.id));
  return {
    title: article ? article.title : "Article non trouvé",
    description: article ? article.description : "Cet article n'existe pas."
  };
}

const ArticlePage = ({ params }: { params: { id: string } }) => {
  return ( 
    <main>
      <Article params={params} />
    </main>
  );
};

export default ArticlePage;
