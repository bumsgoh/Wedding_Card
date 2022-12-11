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
import CalendarImage from "../assets/calendar.png";

const Layout = styled.div`
  padding: 0px;
  margin: 0px;
  width: 100%;
  overflow: hidden;
  text-align: center;
  display: inline-block;
  background-color: #FFFFFF;
`;

const VerticalSpacer = styled.div`
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: ${props => props.height};
`;


const ImageBackground = styled.img`
padding: 0px;
  margin: 0px;
  display: inline-block;
  width: 80%;
`;

const DateInfo = styled.p`
  padding: 0px;
  margin: 0px;  
  width: 100%;
  font-size: 1.6rem;
  font-family: "MaruBuri-SemiBold";
  text-align: center;
  display: inline-block;
  color: var(--font-color);
`;
const WeekDateInfo = styled.p`
  padding: 0px;
  margin: 0px;  
  width: 100%;
  font-size: 1.2rem;
  font-family: "MaruBuri-Regular";
  text-align: center;
  display: inline-block;
  color: var(--font-color);
`;

const GroomBride = styled.div`
  padding: 0px;
  margin: 0px;
  width: 100%;
  font-size:1rem;
  display: inline-block;
  font-family: "TimesNewerRoman-Regular";
  color: var(--font-color);
  text-align: center;
`;

const Line = styled.p`
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

const Calendar = () => {
  return (
    <Layout>
      <VerticalSpacer height="20px" />
      <ImageBackground src={CalendarImage}></ImageBackground>
    </Layout>
  );
};

export default Calendar;
