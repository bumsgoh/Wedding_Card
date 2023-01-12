import React, { useState } from "react";
import Collapsible from 'react-collapsible';
import Collapse from "react-collapsible-wrapper";
import { Button, Divider, message, Modal } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";
import styled from "styled-components";
import CopyToClipboard from "react-copy-to-clipboard";
import HStack from "../components/HStack";
import VStack from "../components/VStack";
import XSpacer from "../components/XSpacer";
import {
  GROOM_NAME,
  GROOM_ACCOUNT_NUMBER,
  GROOM_FATHER_NAME,
  GROOM_FATHER_ACCOUNT_NUMBER,
  GROOM_MOTHER_NAME,
  GROOM_MOTHER_ACCOUNT_NUMBER,
  BRIDE_NAME,
  BRIDE_ACCOUNT_NUMBER,
  BRIDE_FATHER_NAME,
  BRIDE_FATHER_ACCOUNT_NUMBER,
  BRIDE_MOTHER_NAME,
  BRIDE_MOTHER_ACCOUNT_NUMBER,
} from "../../config";

const Wrapper = styled.div`
  padding-top: 42px;
  padding-bottom: 18px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.p`
  font-size: 200%;
  color: var(--font-color);
  letter-spacing: normal;
  display: inline;
  border: solid 1px #efddde;
  font-family: "MaruBuri-Bold";
`;

const Content = styled.p`
  font-size: 100%;
  color: #rgba(51 39 1, 0.9);
  letter-spacing: normal;
  display: inline;
  font-family: "MaruBuri-SemiBold";
  border: solid 1px #efddde;
`;

const InfoText = styled.p`
  font-size: 100%;
  width: 100%;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 0px;
  color: #FFFFFF;
  background: #292000;
  letter-spacing: normal;
  font-family: "MaruBuri-Regular";
  margin-top: 90px;
`;

const AccountTitle = styled.span`
  font-size: 140%;
  width: 100%;
  text-align: left;
  margin: 0px;
  color: #292000;
  letter-spacing: normal;
  font-family: "MaruBuri-Bold";
  padding: 10px 0px 10px 0px;
`;
const AccountContent = styled.span`
  font-size: 120%;
  text-align: left;
  margin: 0px;
  color: #292000;
  letter-spacing: normal;
  padding: 5px 0px 10px 0px;
  font-family: "MaruBuri-Regular";
`;

const SubContent = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 42px;
`;

const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.65;
  margin-top: 8px;
`;

const ButtonWrap = styled.div`
  margin-bottom: 3.125rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`;
const ContactButton = styled.div`
  width: 10.75rem;
  padding: 2.188rem 0;
`;

const CopyButton = styled.button`
  width: 20%;
  height: 30px;
  color: #FFFFFF;
  background: #292000;
  letter-spacing: normal;
  font-family: "MaruBuri-Regular";
  border-radius: 25px;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const SpacingHStack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const BorderWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  border: solid 1px #292000;
  border-radius: 10px;
`;

const AttentNotice = styled.p`
  color: #292000;
  letter-spacing: normal;
  font-size: 80%;
  font-family: "MaruBuri-Regular";
`;


const Spacer = ({
  size,
  axis,
  style = {},
}) => {
  const width = axis === 'vertical' ? 1 : size;
  const height = axis === 'horizontal' ? 1 : size;
  return (
    <span
      style={{
        display: 'block',
        width,
        minWidth: width,
        height,
        minHeight: height,
        ...style,
      }}
    />
  );
};
const ExampleComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  var title = isOpen == false ? "▼  신랑 측 계좌번호  ▼" : "▲  신랑 측 계좌번호  ▲";
  return (
    <article style={{background: "white"}}>
      <button className="money-info-text"
       onClick={() => setIsOpen(!isOpen)}>{title}</button>
      <Collapse isOpen={isOpen}>

        <HStack>
        <Spacer size={20} axis={"horizontal"}/>
        <VStack>
          <AccountTitle>신랑 측</AccountTitle>
          <SpacingHStack>
            <AccountContent>신한 110-508-665888 고상범</AccountContent>
            <CopyButton onClick={()=>navigator.clipboard.writeText('110508665888')}>복사하기</CopyButton>
          </SpacingHStack>
        </VStack>
        <Spacer size={20} axis={"horizontal"}/>
        </HStack>

        <Spacer size={10} axis={"vertical"}/>
        <hr className="dashed"/>

        <HStack>
        <Spacer size={20} axis={"horizontal"}/>
        <VStack>
          <AccountTitle>신부 측</AccountTitle>
          <SpacingHStack>
            <AccountContent>카카오뱅크 3333-03-0952774 이혜주</AccountContent>
            <CopyButton onClick={()=>navigator.clipboard.writeText('3333030952774')}>복사하기</CopyButton>
          </SpacingHStack>
        </VStack>
        <Spacer size={20} axis={"horizontal"}/>
        </HStack>
        <Spacer size={20} axis={"vertical"}/>
      </Collapse>
    </article>
  );
};


const CongratulatoryMoney = () => {
  const [groomVisible, setGroomVisible] = useState(false);
  const [brideVisible, setBrideVisible] = useState(false);

  return (
    <Wrapper>
      <Divider
        data-aos="fade-up"
        plain
        style={{ marginTop: 0, marginBottom: 80 }}
      >
        <Title>마음 전하실 곳</Title>
      </Divider>

      <Content data-aos="fade-up">
      참석이 어려우신 분들은 <br /> 축하의 마음을 전달해주세요
      </Content>
      <Spacer size={100}/>

    <ExampleComponent>
    </ExampleComponent>
    <Spacer size={100} axis={"vertical"}/>
    <BorderWrapper>
    <AttentNotice>
    축하를 위해 참석하시는 분들을 <br/>쾌적하게 모실 수 있도록<br/>신랑 신부에게 미리 참석 의사를 전달해주세요
    </AttentNotice>

    </BorderWrapper>

      <Modal
        title={<b>신랑측 계좌번호</b>}
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
          <CopyToClipboard text={GROOM_FATHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {GROOM_FATHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div style={{ marginTop: 24, marginBottom: 24 }}>
          <b>모 : {GROOM_MOTHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={GROOM_MOTHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {GROOM_MOTHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div>
          <b>신랑 {GROOM_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={GROOM_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {GROOM_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
      </Modal>
      <Modal
        title={<b>신부측 계좌번호</b>}
        visible={brideVisible}
        onOk={() => setBrideVisible(false)}
        onCancel={() => setBrideVisible(false)}
        footer={[
          <Description>
            계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다.
          </Description>,
        ]}
      >
        <div>
          <b>부 : {BRIDE_FATHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={BRIDE_FATHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {BRIDE_FATHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div style={{ marginTop: 24, marginBottom: 24 }}>
          <b>모 :{BRIDE_MOTHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={BRIDE_MOTHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {BRIDE_MOTHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div>
          <b>신부 {BRIDE_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={BRIDE_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {BRIDE_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
      </Modal>
    </Wrapper>
  );
};

export default CongratulatoryMoney;
