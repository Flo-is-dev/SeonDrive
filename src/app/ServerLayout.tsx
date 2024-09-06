import type { Metadata } from "next";
import Layout from "./layout"; 

export const metadata: Metadata = {
  title: "SeonDrive",
  description: "Un large choix de voitures respectueuses de l'environnement",
  keywords: "Location de voiture, voitures écologiques, voitures de luxe, location en Italie, SeonDrive",
  authors: [{ name: "Florent Gironde - 纪若帆", url: "https://www.seondrive.com" }],
  creator: "Florent Gironde - 纪若帆", 
  robots: {
    index: false,  
    follow: false, 
  },
  openGraph: {
    type: "website",
    url: "https://www.seondrive.com",
    title: "SeonDrive - Location de Voitures de Luxe et Écologiques",
    description: "Découvrez un large choix de voitures respectueuses de l'environnement à louer en Italie.",
    siteName: "SeonDrive",
    images: [
      {
        url: "/logo-seondrive.png",
        width: 600,
        height: 600,
        alt: "SeonDrive - Location de Voitures de Luxe et Écologiques",
      },
    ],
  },
  twitter: {
    card: "summary_large_image", 
    title: "SeonDrive - Location de Voitures de Luxe et Écologiques",
    description: "Découvrez un large choix de voitures respectueuses de l'environnement à louer en Italie.",
    creator: "@tonCompteTwitter",
    images: "/logo-seondrive.png",
  },
  icons: {
    icon: "/favicon.ico", // Chemin vers le favicon
  },
};

// Layout Serveur pour gérer les métadonnées et éviter le conflit avec styled components et le layout par default
export default function ServerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
}
