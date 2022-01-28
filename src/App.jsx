import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/home";
import { Blogs } from "./pages/blogs";
import { Videos } from "./pages/videos";
import { Podcast } from "./pages/Podcast";
import { Relatorios } from "./pages/Relatorios";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/relatorios" element={<Relatorios />} />
      </Routes>
    </Router>
  );
}

export default App;
