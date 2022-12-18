import React from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import styled from "styled-components";

import GalleryPhoto1 from "../assets/gallery_1.webp";
import GalleryPhoto2 from "../assets/gallery_2.webp";
import GalleryPhoto3 from "../assets/gallery_3.webp";
import GalleryPhoto4 from "../assets/gallery_4.webp";
import GalleryPhoto5 from "../assets/gallery_5.webp";
import GalleryPhoto6 from "../assets/gallery_6.webp";
import GalleryPhoto7 from "../assets/gallery_7.webp";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 100%;
`;

const VerticalSpacer = styled.div`
  padding: 0px;
  margin: 0px;
  height: ${props => props.height};
`;

const Title = styled.p`
  font-size: 200%;
  color: var(--font-color);
  letter-spacing: normal;
  display: inline;
  font-family: "MaruBuri-Bold";
`;

const NormalText = styled.p`
  font-size: 130%;
  color: var(--font-color);
  letter-spacing: normal;
  display: inline;
  font-family: "MaruBuri-Regular";
`;

const InfoText = styled.p`
  font-size: 100%;
  width: 100%;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 0px;
  color: var(--font-color);
  background: #FFFFFF;
  letter-spacing: normal;
  font-family: "MaruBuri-Regular";
`;

const images = [
  {
    original: GalleryPhoto1,
    thumbnail: GalleryPhoto1,
  },
  {
    original: GalleryPhoto2,
    thumbnail: GalleryPhoto2,
  },
  {
    original: GalleryPhoto3,
    thumbnail: GalleryPhoto3,
  },
  {
    original: GalleryPhoto4,
    thumbnail: GalleryPhoto4,
  },
  {
    original: GalleryPhoto5,
    thumbnail: GalleryPhoto5,
  },
  {
    original: GalleryPhoto6,
    thumbnail: GalleryPhoto6,
  },
];

const Gallery = () => {
  return (
    <Wrapper>
        <Title>갤러리</Title>
        <VerticalSpacer height="0px"></VerticalSpacer>
        <NormalText>GALLERY</NormalText>
        <VerticalSpacer height="50px"></VerticalSpacer>
        
        <InfoText>좌우로 넘기면 신랑 신부의 사진을 보실 수 있습니다</InfoText>
        
      <ImageGallery 
        showThumbnails={false}
        showBullets={true}
        showPlayButton={false}
        showFullscreenButton={false}
        showNav={false}
        items={images}
      />
    </Wrapper>
  );
};

export default Gallery;
