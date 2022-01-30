import { GlobalStyle } from "./styles/global";
import { Dashboard } from "./pages/dashboard";
import { Blogs } from "./pages/blogs";
import { Videos } from "./pages/videos";
import { Podcast } from "./pages/Podcast";
import { Relatorios } from "./pages/Relatorios";
import { Configuracoes } from "./pages/configuracoes";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export function AppRoutes() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
      </Routes>
    </Router>
  );
}
