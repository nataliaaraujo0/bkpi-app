import { Wrapper, SideItems, WrapperLogo } from "./styled";
import logoImg from "../../assets/img/logo.svg";
import speedometerIcon from "../../assets/img/speedometer.svg";
import fileIcon from "../../assets/img/file.svg";
import videosIcon from "../../assets/img/video.svg";
import musicIcon from "../../assets/img/music.svg";
import graphIcon from "../../assets/img/graph.svg";

export function Sidebar() {
  return (
    <Wrapper>
      <WrapperLogo>
        <img src={logoImg} alt="" />
      </WrapperLogo>
      <SideItems>
        <a href="#">
          <img src={speedometerIcon} alt="" />
          <span>Dashboard</span>
        </a>
        <a href="#">
          <img src={fileIcon} alt="" />
          <span>BLogs</span>
        </a>
        <a href="#">
          <img src={videosIcon} alt="" />
          <span>Videos</span>
        </a>
        <a href="#">
          <img src={musicIcon} alt="" />
          <span>Podcast</span>
        </a>
        <a href="#">
          <img src={graphIcon} alt="" />
          <span>Podcast</span>
        </a>
      </SideItems>
    </Wrapper>
  );
}
