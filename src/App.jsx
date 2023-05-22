import { Header } from "./components/Header";
import { NewsGrid } from "./components/NewsGrid";
import { ReleasesGrid } from "./components/ReleasesGrid";

const App = () => {
  return (
    <div className="font-normal">
      <Header />
      <section className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-1 m-2">
        <NewsGrid />
        <ReleasesGrid />
      </section>
    </div>
  );
};

export default App;
