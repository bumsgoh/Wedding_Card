import React from "react";
import styled from "styled-components";
import { Divider } from "antd";
import {
  GROOM_NAME,
  GROOM_FATHER_NAME,
  GROOM_MOTHER_NAME,
  BRIDE_NAME,
  BRIDE_FATHER_NAME,
  BRIDE_MOTHER_NAME,
} from "../../config";
import Flower from "../assets/flower1.png";
import ManImage from "../assets/men_bow.png";
import WomanImage from "../assets/women_bow.png";
import Call from "../assets/call.png";


function getHeight({ axis, size }) {
  return axis === 'horizontal' ? 1 : size;
}
function getWidth({ axis, size }) {
  return axis === 'vertical' ? 1 : size;
}
const Spacer = styled.span`
  display: inline-block;
  width: ${getWidth}px;
  min-width: ${getWidth}px;
  height: ${getHeight}px;
  min-height: ${getHeight}px;
`;
const Wrapper = styled.div`
  width: 100%;
  padding-top: 42px;
  text-align: center;
  justify-content: center;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const Content = styled.p`
  font-size: 1rem;
  line-height: 1.75;
  color: var(--font-color);
  width: 100%;
  text-align: center;
  align-items: center;
  letter-spacing: normal;
  vertical-align: text-top;
  word-spacing: -2px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 0px;
  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */
`;

const HorizontalWrapper = styled.div`
  width: 100%;
  axis: vertical;
  text-align: center;
  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */
`;

const GroomBride = styled.p`
  font-size: 1.2rem;
  line-height: 1.75;
  color: var(--font-color);
  width: 100%;
  text-align: center;
  align-items: center;
  letter-spacing: normal;
  vertical-align: text-top;
  word-spacing: -2px;
  font-family: "MaruBuri-Bold";
`;

const ImageBackground = styled.img`
  padding-top:0px;
  width: 100%;
  width: 4rem;
`;

const PhoneImage = styled.img`
  width: 1.1rem;
`;

const ParentsCallBox = styled.p`
  width: 40%;
  font-size: 1rem;
  color: #9b3700;
  display: inline-block;
  text-align: center;
  font-family: "MaruBuri-Light";
  border: 1px solid #9b3700;
  border-radius: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

function ColorfulText({children}) {
  return <span className="text-style-1">{children}</span>;
}

function ColorfulNormalText({children}) {
  return <span className="text-style-2">{children}</span>;
}
 
const Greeting = () => {
  return (
    <Wrapper>
      <Content data-aos="fade-up">
        따듯한 봄날에 꽃 핀 사랑이
        <br />
        이번 봄, 여러분의 축복 아래
        <br />
        평생을 약속하고 같은 곳을 바라보며
        <br />
        함께 걸어가려 합니다.
        <br />
        <br />
        기쁜 날 부디 오셔서
        <br />
        많은 <ColorfulText>축하</ColorfulText>와 <ColorfulText>격려</ColorfulText> 부탁드립니다.
      </Content>
      <Spacer axis="vertical" size={30}></Spacer>
      <ImageWrapper>
        <ImageBackground src={ManImage}>
        </ImageBackground>
        <Spacer axis="horizontal" size={30}></Spacer>
        <ImageBackground src={WomanImage}> 
        </ImageBackground>
      </ImageWrapper>
      <Spacer size={30}></Spacer>
      <HorizontalWrapper>
      <div className="box">
        <GroomBride data-aos="fade-up">
          {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME}<ColorfulNormalText> 의 아들</ColorfulNormalText> 고상범
        </GroomBride> 
        <Spacer axis="horizontal" size={10}></Spacer>
        <PhoneImage src={Call}>
        </PhoneImage>
      </div>
      <div />
      <div className="box">
      <GroomBride data-aos="fade-up">
        {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME}<ColorfulNormalText> 의 딸</ColorfulNormalText> 이혜주
        </GroomBride>
        <Spacer axis="horizontal" size={10}></Spacer>
        <PhoneImage src={Call}>
        </PhoneImage>
      </div>
      
      </HorizontalWrapper>
      <Spacer axis="vertical" size={60}></Spacer>
      <ParentsCallBox>
      혼주에게 연락하기
      </ParentsCallBox>
    </Wrapper>
  );
};

export default Greeting;
