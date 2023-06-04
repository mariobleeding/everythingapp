import { Header } from "./components/Header";
import { NewsGrid } from "./components/NewsGrid";
import { PostsGrid } from "./components/PostsGrid";
import { ReleasesGrid } from "./components/ReleasesGrid";

const App = () => {
  return (
    <div className="font-normal h-screen">
      <Header />
      <section className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-1 mx-2">
        <NewsGrid />
        <ReleasesGrid />
      </section>
    </div>
  );
};

export default App;
