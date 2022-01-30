import { Wrapper, SideItems, WrapperLogo, WrapperConfig } from "./styled";
import logoImg from "../../assets/img/logo.svg";
import speedometerIcon from "../../assets/img/speedometer.svg";
import fileIcon from "../../assets/img/file.svg";
import videosIcon from "../../assets/img/video.svg";
import musicIcon from "../../assets/img/music.svg";
import graphIcon from "../../assets/img/graph.svg";
import configIcon from "../../assets/img/config.svg";
import { Link, useLocation } from "react-router-dom";

export function Sidebar() {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <WrapperLogo>
        <img src={logoImg} alt="" />
      </WrapperLogo>
      <SideItems>
        <Link to="/" className={pathname === "/" ? "active" : ""}>
          <img src={speedometerIcon} alt="" />
          <span>Dashboard</span>
        </Link>
        <Link to="/blogs" className={pathname === "/blogs" ? "active" : ""}>
          <img src={fileIcon} alt="" />
          <span>BLogs</span>
        </Link>
        <Link to="/videos" className={pathname === "/videos" ? "active" : ""}>
          <img src={videosIcon} alt="" />
          <span>Videos</span>
        </Link>
        <Link to="/podcast" className={pathname === "/podcast" ? "active" : ""}>
          <img src={musicIcon} alt="" />
          <span>Podcast</span>
        </Link>
        <Link
          to="/relatorios"
          className={pathname === "/relatorios" ? "active" : ""}
        >
          <img src={graphIcon} alt="" />
          <span>Relatórios</span>
        </Link>

        <WrapperConfig>
          <div></div>
          <Link
            to="/configuracoes"
            className={pathname === "/configuracoes" ? "active" : ""}
          >
            <img src={configIcon} alt="" />
            <span>Configuracoes</span>
          </Link>
        </WrapperConfig>
      </SideItems>
    </Wrapper>
  );
}
