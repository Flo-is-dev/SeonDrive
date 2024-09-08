import { articles } from "@/app/data"
import {Metadata} from "next"
import { notFound } from "next/navigation";

export function generateMetadata({params}: {params: {id: string}}): Metadata {
    const article = articles.find((element) => element.id === parseInt(params.id));
    return {
        title: article?.title,
        description: article?.description

    }
}

const ArticlePage = ({params}: {params: {id : string}}) => {
    const article = articles.find((element) => element.id === parseInt(params.id));

    if(parseInt(params.id) > articles.length) {
        notFound()
    }


  return (
    <>
        {article && 
            <div>
                <h2>{article.title} le {article.date} par {article.author}</h2>
                <article>{article.description}</article>
            </div>}
    </>
  )
}
export default ArticlePage