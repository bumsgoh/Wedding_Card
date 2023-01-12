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
  width: 100%;
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
