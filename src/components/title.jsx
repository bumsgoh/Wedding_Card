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
import MainImage from "../assets/main_image.png";

const Layout = styled.div`
  width: 70%;
  overflow: hidden;
  margin: 0 auto;
`;

const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 50px;
  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */
`;

const SubTitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 20px;
  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */
`;

const ImageBackground = styled.img`
  padding-top: 20px;
  width: 100%;
`;

const VideoBackground = styled.video`
  width: 100%;
`;

const WeddingInvitation = styled.text`
  width: 70%;
  font-size: 1.3rem;
  font-family: "MaruBuri-SemiBold";
  text-align: center;
  padding-top: 42px;  
  color: var(--font-color);
  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */
`;

const GroomBride = styled.text`
  width: 70%;
  font-size: 2rem;
  font-family: "TimesNewerRoman-Regular";
  color: var(--font-color);
  text-align: center;
  padding-top: 42px;  
  color: var(--font-color);
`;

const Line = styled.hr`
  color: #000000;
  margin-left: -100px;
`;

const Schedule = styled.p`
  font-size: 1.06rem;
  font-family: "MaruBuri-Light";
  color: var(--font-color);
  margin-bottom: 24px;
`;

const Title = () => {
  return (
    <Layout>
      <TitleWrapper>
      <WeddingInvitation>WE ARE GETTING MARRIED!</WeddingInvitation>
      </TitleWrapper>
      <ImageBackground src={MainImage} />
      <SubTitleWrapper>
        <GroomBride>
          {GROOM_NAME} &#38; {BRIDE_NAME}
        </GroomBride>
        <Line></Line>
        <Schedule>
          {WEDDING_DATE}
          <br />
          {WEDDING_LOCATION}
        </Schedule>
      </SubTitleWrapper>
    </Layout>
  );
};

export default Title;
