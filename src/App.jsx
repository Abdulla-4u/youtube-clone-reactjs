import { Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import ScrollTop from "./components/animations/ScrollTop";
import useThemeStore from "./store/useThemeStore";
import NotFound from "./Pages/NotFound";
import { lazy, Suspense, useMemo } from "react";
import Loader from "./components/common/Loader";

const Home = lazy(() => import("./Pages/Home"));
const Video = lazy(() => import("./Pages/Video"));
const SearchTerm = lazy(() => import("./Pages/SearchTerm"));

function App() {
  useThemeStore();

  const routes = useMemo(
    () => (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
        <Route path="/search/:searchTerm" element={<SearchTerm />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    ),
    []
  );

  return (
    <div className="transition-colors duration-300 bg-light-background dark:bg-dark-background">
      <ScrollTop />
      <Navbar />
      <Suspense fallback={<Loader/>}>{routes}</Suspense>
    </div>
  );
}

export default App;
