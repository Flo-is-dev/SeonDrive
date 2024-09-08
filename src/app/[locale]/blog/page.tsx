
// import { articles } from "@/app/data"
// import { Article } from "@/app/types"
import Blog from "@/components/common/Blog"
import {Metadata} from "next"
// import Link from "next/link"

export const metadata: Metadata = {
    title: "SeonDrive - Blog",
    description: "Découvrez notre actualité"
}


const BlogPage = () => {
  return (
    <main>

        {/* <section style={{margin:"4rem auto",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"2rem",maxWidth:"1050px"}}>
            {articles.map((article: Article) => {
                const link = `blog/${article.id}`
                return (
                    <div key={article.id}>
                        <h2>{article.title} le {article.date} par {article.author}</h2>
                        <Link href={link}>Voir l'article</Link>
                    </div>
                )
            })}
        </section> */}
        <Blog filtered={false} />
    
    </main>
  )
}
export default BlogPage