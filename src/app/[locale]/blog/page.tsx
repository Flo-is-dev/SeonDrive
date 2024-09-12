import Blog from "@/components/common/Blog"
import {Metadata} from "next"

export const metadata: Metadata = {
    title: "SeonDrive - Blog",
    description: "Découvrez notre actualité"
}


const BlogPage = () => {
  return (
    <main>

        <Blog filtered={false} />
    
    </main>
  )
}
export default BlogPage