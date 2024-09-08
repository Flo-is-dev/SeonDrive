import { articles } from "@/app/data"
import {Metadata} from "next"
import { notFound } from "next/navigation";
import Image from "next/image";


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
                <Image
                  src={`/blog/blog${article.id}.jpg`}
                  width={400}
                  height={300}
                  alt={article.title}
                //   layout="responsive"
                />
                <h2>{article.title} </h2>
                <p>le {article.date} par {article.author}</p>
                <article>{article.description}</article>
            </div>}
    </>
  )
}
export default ArticlePage