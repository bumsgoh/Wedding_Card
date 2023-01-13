import React from "react";
import styled from "styled-components";
import {
  WEDDING_DATE,
  WEDDING_LOCATION,
  GROOM_NAME,
  BRIDE_NAME,
} from "../../config.js";
import BackgroundVideo from "../assets/BackgroundVideo.mp4";
import GroovePaper from "../assets/GroovePaper.png";
import MainImage from "../assets/titleImage.png";

const Layout = styled.div`
  padding: 0px;
  margin: 0px;
  width: 100%;
  overflow: hidden;
  text-align: center;
  display: inline-block;
`;

const ImageBackground = styled.img`
  padding: 0px;
  margin: -50px 0px 0px 0px;
  display: inline-block;
  width: 100%;
`;

const Title = () => {
  return (
    <Layout>
      <ImageBackground src={"https://firebasestorage.googleapis.com/v0/b/abroadapp-22417.appspot.com/o/dev%2FuserProfileImage%2FtitleImage.png?alt=media&token=a96ee875-42b4-460f-920f-0b93ff54f271"} />
    </Layout>
  );
};

export default Title;
