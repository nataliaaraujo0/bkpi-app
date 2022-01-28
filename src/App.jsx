import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/home";
import { Blogs } from "./pages/blogs";
import { Videos } from "./pages/videos";
import { Podcast } from "./pages/Podcast";
import { Relatorios } from "./pages/Relatorios";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/blogs" exact element={<Blogs />} />
          <Route path="/videos" exact element={<Videos />} />
          <Route path="/podcast" exact element={<Podcast />} />
          <Route path="/relatorios" exact element={<Relatorios />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
