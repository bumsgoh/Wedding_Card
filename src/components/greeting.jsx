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
import HStack from "../components/HStack";
import XSpacer from "../components/XSpacer";

function getHeight({ axis, size }) {
  return axis === 'horizontal' ? 1 : size;
}
function getWidth({ axis, size }) {
  return axis === 'vertical' ? 1 : size;
}
const VerticalSpacer = styled.div`
  padding: 0px;
  margin: 0px;
  height: ${props => props.height};
`;

const HorizontalSpacer = styled.div`
  padding: 0px;
  margin: 0px;
  width: ${props => props.width};
`;
const Wrapper = styled.div`
  width: 100%;
  padding-top: 200px;
  padding-bottom: 200px;
  text-align: center;
  justify-content: center;
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
  font-family: "MaruBuri-Light";
  word-spacing: -2px;
`;

const GroomBride = styled.p`
  font-size: 120%;
  color: var(--font-color);
  letter-spacing: normal;
  display: inline;
  word-spacing: -2px;
  font-family: "MaruBuri-Bold";
`;

const ImageBackground = styled.img`
  padding-top:0px;
  width: 4rem;
`;

const PhoneImage = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 10px;
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

function BOXCALL() {
  return <div className="text-table">
    <div>
      <p className="text-style-1">
        <span className="text-style-1">
          김진수・이미연의
        <span>
          &nbsp;&nbsp;
        </span>
          아들 &nbsp;<strong>민 재</strong>
        </span>
      </p>
     </div>
  </div>;
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
        많은 <ColorfulText>축하</ColorfulText>와 <ColorfulText>격려 </ColorfulText> 부탁드립니다.
      </Content>
      <VerticalSpacer height="20px"></VerticalSpacer>

      <HStack>
        <XSpacer />
        <ImageBackground src={ManImage}>
        </ImageBackground>
        <HorizontalSpacer width="10px"></HorizontalSpacer>
        <ImageBackground src={WomanImage}> 
        </ImageBackground>
        <XSpacer />
      </HStack>


      <VerticalSpacer height="30px"></VerticalSpacer>
        <span style={{flexDirection:'row', alignItems:'center'}}>
        <GroomBride>
          {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME}<ColorfulNormalText> 의 아들</ColorfulNormalText> 고상범
        </GroomBride>
        <PhoneImage src={Call} />
        </span>
        <VerticalSpacer height="10px"></VerticalSpacer>
        <span style={{flexDirection:'row', alignItems:'center'}}>
        <GroomBride>
          {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME}<ColorfulNormalText> 의 딸</ColorfulNormalText> 이혜주
        </GroomBride>
        <PhoneImage src={Call}>
        </PhoneImage>
        </span>
      <VerticalSpacer height="20px"></VerticalSpacer>
      <ParentsCallBox>
      혼주에게 연락하기
      </ParentsCallBox>
      
    </Wrapper>
  );
};

export default Greeting;
