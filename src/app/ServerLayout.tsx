import type { Metadata } from "next";
import Layout from "./layout"; 

export const metadata: Metadata = {
  title: "SeonDrive",
  description: "Un large choix de voitures respectueuses de l'environnement",
};

// Layout Serveur pour gérer les métadonnées et éviter le conflit avec styled components
export default function ServerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
}
