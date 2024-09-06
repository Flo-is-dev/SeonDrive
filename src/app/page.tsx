import Hero from "@/components/common/Hero";
import ServerLayout from "./ServerLayout"; 

export default function Home() {
  return (
    <>
        <Hero />
      <p>corps du site</p>
    </>
  );
}

// Utilise ServerLayout comme layout d'entrée pour cette page
Home.getLayout = function getLayout(page: React.ReactNode) {
  return <ServerLayout>{page}</ServerLayout>;
};
