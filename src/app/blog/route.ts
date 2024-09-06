import { NextRequest } from "next/server";
import { articles } from "./data";

export async function GET(request: NextRequest) {
    const requestParams = request.nextUrl.searchParams;
    console.log(requestParams);
    const query = requestParams.get('recherche')
    const filteredArticles = query ? articles.filter((article) => article.title.includes(query)) : articles
    
    return Response.json(filteredArticles)
}

export async function POST(request: Request) {
const article = await request.json();
const newArticle = {
    id: articles.length + 1,
    title: article.title
}
articles.push(newArticle)
return new Response(JSON.stringify(newArticle), {
    headers: {
        "Content-type": "application/json"
    },
    status: 201
})
}