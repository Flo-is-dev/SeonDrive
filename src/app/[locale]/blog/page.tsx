import { articles } from "@/app/data"
import { Article } from "@/app/types"
import {Metadata} from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "SeonDrive - Blog",
    description: "Découvrez notre actualité"
}

const BlogPage = () => {
  return (
    <>
    {articles.map((article: Article) => {
        const link = `blog/${article.id}`
        return (
            <div key={article.id}>
                <h2>{article.title} le {article.date} par {article.author}</h2>
                <Link href={link}>Voir l'article</Link>
            </div>
        )
    })}
    </>
  )
}
export default BlogPage