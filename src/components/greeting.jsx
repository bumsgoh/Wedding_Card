import React, { useState } from 'react';
import styled from "styled-components";
import { Button, Divider, message, Modal } from "antd";
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
import CopyToClipboard from "react-copy-to-clipboard";

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
  padding-top: 100px;
  padding-bottom: 200px;
  flex-direction: column;
  text-align: center;
  justify-content: flex-start;
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
  width: 16px;
  height: 16px;
  color: transparent;
  margin-left: 10px;
`;

const ParentsCallBox = styled.button`
  width: 80%;
  font-size: 1rem;
  color: #9b3700;
  background: transparent;
  display: inline-block;
  text-align: center;
  font-family: "MaruBuri-Light";
  border: 1px solid #9b3700;
  border-radius: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const SpacingHStack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const InvisibleText = styled.div`
  font-size: 0.8rem;
  color: transparent;
  display: inline-block;
`;

const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.65;
  margin-top: 8px;
`;

function ColorfulText({children}) {
  return <span className="text-style-1">{children}</span>;
}

function ColorfulNormalText({children}) {
  return <span className="text-style-2">{children}</span>;
}

function PhoneCallButton({phoneNumber}) {
  const handleClick = () => {
    window.location.href = phoneNumber;
  };

  return (
    <PhoneImage src={Call} onClick={handleClick}>
    </PhoneImage>
  );
}
 
const Greeting = () => {
  const [groomVisible, setGroomVisible] = useState(false);
  return (
    <Wrapper>
      
      <Content>
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
      <VerticalSpacer height="50px"></VerticalSpacer>

      <SpacingHStack>
        <ImageBackground src={ManImage}>
        </ImageBackground>
        <HorizontalSpacer width="10px"></HorizontalSpacer>
        <ImageBackground src={WomanImage}> 
        </ImageBackground>
      </SpacingHStack>


      <VerticalSpacer height="70px"></VerticalSpacer>
        <span style={{flexDirection:'row', alignItems:'center'}}>
        <GroomBride>
          {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME}<ColorfulNormalText> 의 아들</ColorfulNormalText> 고상범
        </GroomBride>
        <PhoneCallButton phoneNumber={'tel:01091403396'} />
        </span>
        <VerticalSpacer height="10px"></VerticalSpacer>
        <span style={{flexDirection:'row', alignItems:'center'}}>
        <GroomBride>
          {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME}<ColorfulNormalText> 의 딸</ColorfulNormalText> <InvisibleText>아</InvisibleText>이혜주
        </GroomBride>
        <PhoneCallButton phoneNumber={'tel:01023871834'} />
        </span>
      <VerticalSpacer height="40px"></VerticalSpacer>
      <ParentsCallBox>
      혼주에게 연락하기
      </ParentsCallBox>

      <Modal
        title={<b>신랑측 전화번호</b>}
        visible={groomVisible}
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        footer={[
          <Description>
            계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다.
          </Description>,
        ]}
      >
        <div>
          <b>부 : {GROOM_FATHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={"01087615733"}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("전화번호가 복사되었습니다.")}
            >
              {"01087615733"}
            </Button>
          </CopyToClipboard>
        </div>
        <div style={{ marginTop: 24, marginBottom: 24 }}>
          <b>모 : {GROOM_MOTHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={"01042090808"}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("전화번호가 복사되었습니다.")}
            >
              {"01087615733"}
            </Button>
          </CopyToClipboard>
        </div>
      </Modal>

    </Wrapper>
  );
};

export default Greeting;
