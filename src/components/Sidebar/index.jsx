import {
  Wrapper,
  SideItems,
  WrapperLogo,
  WrapperConfig,
  WrapperSeparetor,
  WrapperIconSeparetor,
} from "./styled";
import logoImg from "../../assets/img/logo.svg";
import speedometerIcon from "../../assets/img/speedometer.svg";
import fileIcon from "../../assets/img/file.svg";
import videosIcon from "../../assets/img/video.svg";
import musicIcon from "../../assets/img/music.svg";
import graphIcon from "../../assets/img/graph.svg";
import configIcon from "../../assets/img/config.svg";
import separadorIcon from "../../assets/img/separador.svg";
import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <Wrapper>
      <WrapperLogo>
        <img src={logoImg} alt="" />
      </WrapperLogo>
      <SideItems>
        <Link to="/dashboard">
          <img src={speedometerIcon} alt="" />
          <span>Dashboard</span>
        </Link>
        <Link to="/blogs">
          <img src={fileIcon} alt="" />
          <span>BLogs</span>
        </Link>
        <Link to="/videos">
          <img src={videosIcon} alt="" />
          <span>Videos</span>
        </Link>
        <Link to="/podcast">
          <img src={musicIcon} alt="" />
          <span>Podcast</span>
        </Link>
        <Link to="/relatorios">
          <img src={graphIcon} alt="" />
          <span>Relatórios</span>
        </Link>

        <WrapperConfig>
          <div></div>
          <a href="#">
            <img src={configIcon} alt="" />
            <span>Configuracoes</span>
          </a>
        </WrapperConfig>
      </SideItems>
    </Wrapper>
  );
}
