import { NextRequest, NextResponse } from "next/server";
import { articles } from "../data";

// Fonction pour gérer les requêtes GET
export async function GET(request: NextRequest) {
    const requestParams = request.nextUrl.searchParams;
    const query = requestParams.get('recherche');

    // Filtrage des articles si un paramètre de recherche est fourni
    const filteredArticles = query
        ? articles.filter((article) => article.title.includes(query))
        : articles;
    
    return NextResponse.json(filteredArticles); // Utiliser NextResponse.json pour retourner une réponse JSON
}

// Fonction pour gérer les requêtes POST
export async function POST(request: NextRequest) {
    const article = await request.json();

    // Création d'un nouvel article
    const newArticle = {
        id: articles.length + 1,
        title: article.title,
    };

    articles.push(newArticle);

    return new NextResponse(JSON.stringify(newArticle), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201,
    });
}
