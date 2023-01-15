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
import MainImage from "../assets/mainTitle.webp";

const Layout = styled.div`
  padding: 0px;
  margin: 0px;
  width: 70%;
  overflow: hidden;
  text-align: center;
  display: inline-block;
`;

const ImageBackground = styled.img`
  padding: 0px;
  margin: 50px 0px 0px 0px;
  display: inline-block;
  width: 100%;
`;

const Title = () => {
  return (
    <Layout>
      <ImageBackground src={MainImage} />
    </Layout>
  );
};

export default Title;
