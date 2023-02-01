import React, { useEffect } from "react";
import { Layout } from "antd";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
import "antd/dist/antd.css";
import Gallery from "../components/gallery";
import Greeting from "../components/greeting";
import Title from "../components/title";
import Calendar from "../components/calendar";
import "../styles/index.css";
import MainImage from "../assets/gallery_1.webp";
import GroovePaper from "../assets/GroovePaper.png";
import Location from "../components/location";
import CongratulatoryMoney from "../components/congratulatoryMoney";
import Share from "../components/share";
import Quote from "../components/quote";
import Song from "../assets/song.mp3";
import { Helmet } from 'react-helmet'
import AOS from "aos";
import "aos/dist/aos.css";

// markup
const { Footer } = Layout;

const Wrapper = styled.div`
  text-align: center;
  background: var(--bg-color);
  width: 100%;
`;
const Head = () => (
  <>
    <title>고상범 & 이혜주 결혼합니다</title>
    <thumb></thumb>
    <meta name="description" content="상범 & 혜주 모바일 청첩장" />
    <meta name="keywords" content="React, JavaScript, meta tags" />
    <meta name="thumbnail" content="https://firebasestorage.googleapis.com/v0/b/abroadapp-22417.appspot.com/o/userProfileImage%2Fgallery_7.jpeg?alt=media&token=b2201405-7a5d-42f6-960a-c5c772215632" />
  </>
)
const IndexPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
    document.body.appendChild(script);

    return () => {
      document.body.romoveChile(script);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
    
  });
  return (
    
    <Wrapper>
      

      <Helmet>
      <title data-react-helmet="true">고상범 & 이혜주 결혼합니다</title>

      <meta name="description" content="상범 & 혜주 모바일 청첩장" data-react-helmet="true"/>
      <meta name="keywords" content="React, JavaScript, meta tags" data-react-helmet="true"/>
      <meta property="og:image" content={MainImage} data-react-helmet="true" />

      
      </Helmet>
      <audio autoPlay loop>
        <source src={Song} />
      </audio>
      <Title />
      <Greeting />
      <Calendar />
      <Gallery />
      <Location />
      <Quote />
      <CongratulatoryMoney />
    </Wrapper>
  );
};

export default IndexPage;
