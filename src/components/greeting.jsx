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

const GroomBride = styled.span`
  font-size: 5vw;
  color: var(--font-color);
  letter-spacing: normal;
  word-spacing: 4px;
  font-family: "MaruBuri-Bold";
`;

const ColorfulNormalText = styled.span`
  font-size: 5vw;
  color: #292000;
  font-family: 'MaruBuri-Light' !important;
  position: relative;
`;

const ImageBackground = styled.img`
  padding-top:0px;
  width: 4rem;
`;

const PhoneImage = styled.img`
  width: 4.5vw;
  height: 4.5vw;
  color: transparent;
  margin-left: 10px;
  align-items: center;
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

const SpacingHStack = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0px;
`;

const BaselineHStack = styled.span`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0px;
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
      <Modal className='modal'
        title={<b>혼주 전화번호</b>}
        visible={groomVisible}
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        footer={[
          <Description>
            전화번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다.
          </Description>,
        ]}
      >
        <ColorfulText>신랑 측</ColorfulText>
        <div>
          <b>부 : {GROOM_FATHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={"01087615733"}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("전화번호가 복사되었습니다.")}
            >
              {"010-8761-5733"}
            </Button>
          </CopyToClipboard>
        </div>
        <div style={{ marginTop: 10, marginBottom: 24 }}>
          <b>모 : {GROOM_MOTHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={"01042090808"}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("전화번호가 복사되었습니다.")}
            >
              {"010-4209-0808"}
            </Button>
          </CopyToClipboard>
        </div>
        <ColorfulText>신부 측</ColorfulText>
        <div>
          <b>부 : {BRIDE_FATHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={"01030701834"}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("전화번호가 복사되었습니다.")}
            >
              {"010-3070-1834"}
            </Button>
          </CopyToClipboard>
        </div>
        <div style={{ marginTop: 10, marginBottom: 24 }}>
          <b>모 : {BRIDE_MOTHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={"01041011834"}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("전화번호가 복사되었습니다.")}
            >
              {"010-4101-1834"}
            </Button>
          </CopyToClipboard>
        </div>
      </Modal>

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

        <BaselineHStack>
        <GroomBride>
          {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME}<ColorfulNormalText> 의 아들</ColorfulNormalText> 고상범
        </GroomBride>
        <PhoneCallButton phoneNumber={'tel:01091403396'} />
        </BaselineHStack>
        <VerticalSpacer height="10px"></VerticalSpacer>
        <BaselineHStack>
        <GroomBride>
          {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME}<ColorfulNormalText> 의 딸</ColorfulNormalText> 
          <InvisibleText>아아</InvisibleText>
          이혜주
        </GroomBride>
        <PhoneCallButton phoneNumber={'tel:01023871834'} />
        </BaselineHStack>
      <VerticalSpacer height="40px"></VerticalSpacer>
      <ParentsCallBox onClick={
        () => setGroomVisible(true)
      }>
      혼주에게 연락하기
      </ParentsCallBox>
    </Wrapper>
  );
};

export default Greeting;
