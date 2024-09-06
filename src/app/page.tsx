import Hero from "@/components/common/Hero";
import ServerLayout from "./ServerLayout"; 
import About from "@/components/common/About";

export default function Home() {
  return (
    <>
        <Hero />
        <About />
    </>
  );
}

// Utilise ServerLayout comme layout d'entrée pour cette page
Home.getLayout = function getLayout(page: React.ReactNode) {
  return <ServerLayout>{page}</ServerLayout>;
};
