import ServerLayout from "./ServerLayout"; 

export default function Home() {
  return (
    <div>
      <p>corps du site</p>
    </div>
  );
}

// Utilise ServerLayout comme layout d'entrée pour cette page
Home.getLayout = function getLayout(page: React.ReactNode) {
  return <ServerLayout>{page}</ServerLayout>;
};
