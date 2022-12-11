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
  padding: 0px;
  margin: 0px;
  width: 100%;
  overflow: hidden;
  text-align: center;
  display: inline-block;
`;

const VerticalSpacer = styled.div`
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: ${props => props.height};
`;

const TitleWrapper = styled.div`
  padding: 0px;
  margin: 0px;  
  width: 100%;
  text-align: center;
  display: inline-block;
  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */
`;

const SubTitleWrapper = styled.div`
  padding: 0px;
  margin: 0px;
  width: 100%
  text-align: center;
  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */
`;

const ImageBackground = styled.img`
padding: 0px;
  margin: 0px;
  display: inline-block;
  width: 80%;
`;

const WeddingInvitation = styled.p`
  padding: 0px;
  margin: 0px;  
  width: 100%;
  font-size: 1.6rem;
  font-family: "MaruBuri-SemiBold";
  text-align: center;
  display: inline-block;
  color: var(--font-color);
  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */
`;

const GroomBride = styled.div`
  padding: 0px;
  margin: 0px;
  width: 100%;
  font-size: 2.5rem;
  display: inline-block;
  font-family: "TimesNewerRoman-Regular";
  color: var(--font-color);
  text-align: center;
`;

const Line = styled.hr`
padding: 0px;
  margin: 0px;
  color: #332701;
  width: 80%;
  display: inline-block;
  text-align: center;
  border-top: 0.1px solid #332701;
  
`;

const Schedule1 = styled.p`
  padding: 0px;
  margin: 0px;
  font-size: 1.3rem;
  font-family: "MaruBuri-Regular";
  color: var(--font-color);
`;

const Schedule2 = styled.p`
  padding: 0px;
  margin: 0px;
  font-family: "MaruBuri-Light";
  font-size: 1.1rem;
  color: var(--font-color);
`;

const Title = () => {
  return (
    <Layout>
      <TitleWrapper>
      <WeddingInvitation>WE ARE GETTING MARRIED!</WeddingInvitation>
      <VerticalSpacer height="20px" />
      </TitleWrapper>
      <ImageBackground src={MainImage} />
      
      <SubTitleWrapper>
        <VerticalSpacer height="20px" />
        <GroomBride>
          {GROOM_NAME} &#38; {BRIDE_NAME}
        </GroomBride>
        <Line></Line>
        
      </SubTitleWrapper>
      <VerticalSpacer height="10px" />
      <Schedule1>
          {WEDDING_DATE}
        </Schedule1>
        <Schedule2>
          {WEDDING_LOCATION}
        </Schedule2>
    </Layout>
  );
};

export default Title;
