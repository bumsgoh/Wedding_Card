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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  font-family: "MaruBuri-Bold";
`;

const Content = styled.p`
  font-size: 100%;
  color: #rgba(51 39 1, 0.9);
  letter-spacing: normal;
  display: inline;
  font-family: "MaruBuri-SemiBold";
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
  padding: 10px 0px 20px 0px;
`;
const AccountContent = styled.span`
  font-size: 120%;
  text-align: left;
  margin: 0px;
  color: #292000;
  letter-spacing: normal;
  font-family: "MaruBuri-Regular";
`;

const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.65;
  margin-top: 8px;
`;

const CopyButton = styled.button`
  width: 130px;
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
  align-items: flex-end;
  justify-content: space-between;
`;

const BorderWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  align-items: center;
  text-align: center;
  border: solid 1px #292000;
  border-radius: 10px;
`;

const AttentNotice = styled.p`
  color: #292000;
  letter-spacing: normal;
  font-size: 100%;
  margin: 30px;
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
const notify = () => toast.success("?????????????????????!");

const ExampleComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  var title = isOpen == false ? "???  ?????? ??? ????????????  ???" : "???  ?????? ??? ????????????  ???";
  return (
    <article style={{background: "white"}}>
      <button className="money-info-text"
       onClick={() => setIsOpen(!isOpen)}>{title}</button>
      <Collapse isOpen={isOpen}>

        <HStack>
        <Spacer size={20} axis={"horizontal"}/>
        <VStack>
          <AccountTitle>?????? ???</AccountTitle>
          <SpacingHStack>
            <VStack>
            <AccountContent>????????????</AccountContent>
            <AccountContent>110-508-665888 ?????????</AccountContent>
            </VStack>
            <CopyButton onClick={
              ()=>{navigator.clipboard.writeText('110508665888');
              notify();}
            }>????????????</CopyButton>
          </SpacingHStack>
        </VStack>
        <Spacer size={20} axis={"horizontal"}/>
        </HStack>

        <Spacer size={10} axis={"vertical"}/>
        <hr className="dashed"/>

        <HStack>
        <Spacer size={20} axis={"horizontal"}/>
        <VStack>
          <AccountTitle>?????? ???</AccountTitle>
          <SpacingHStack>
            <VStack>
            <AccountContent>???????????????</AccountContent>
            <AccountContent>3333-03-0952774 ?????????</AccountContent>
            </VStack>
            <CopyButton onClick={()=>{
               navigator.clipboard.writeText('3333030952774');
               notify();
                }}>????????????</CopyButton>
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
        <Title>?????? ????????? ???</Title>
      </Divider>

      <Content data-aos="fade-up">
      ????????? ???????????? ????????? <br /> ????????? ????????? ??????????????????
      </Content>
      <Spacer size={100}/>

    <ExampleComponent>
    </ExampleComponent>
    <ToastContainer />
    <Spacer size={100} axis={"vertical"}/>
    <BorderWrapper>
    <AttentNotice>
    ????????? ?????? ??????????????? ????????? <br/>???????????? ?????? ??? ?????????<br/>?????? ???????????? ?????? ?????? ????????? ??????????????????
    </AttentNotice>

    </BorderWrapper>

      <Modal
        title={<b>????????? ????????????</b>}
        visible={groomVisible}
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        footer={[
          <Description>
            ???????????? ?????????, ???????????? ????????? ???????????? ???????????????.
          </Description>,
        ]}
      >
        <div>
          <b>??? : {GROOM_FATHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={GROOM_FATHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("??????????????? ?????????????????????.")}
            >
              {GROOM_FATHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div style={{ marginTop: 24, marginBottom: 24 }}>
          <b>??? : {GROOM_MOTHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={GROOM_MOTHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("??????????????? ?????????????????????.")}
            >
              {GROOM_MOTHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div>
          <b>?????? {GROOM_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={GROOM_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("??????????????? ?????????????????????.")}
            >
              {GROOM_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
      </Modal>
      <Modal
        title={<b>????????? ????????????</b>}
        visible={brideVisible}
        onOk={() => setBrideVisible(false)}
        onCancel={() => setBrideVisible(false)}
        footer={[
          <Description>
            ???????????? ?????????, ???????????? ????????? ???????????? ???????????????.
          </Description>,
        ]}
      >
        <div>
          <b>??? : {BRIDE_FATHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={BRIDE_FATHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("??????????????? ?????????????????????.")}
            >
              {BRIDE_FATHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div style={{ marginTop: 24, marginBottom: 24 }}>
          <b>??? :{BRIDE_MOTHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={BRIDE_MOTHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("??????????????? ?????????????????????.")}
            >
              {BRIDE_MOTHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div>
          <b>?????? {BRIDE_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={BRIDE_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("??????????????? ?????????????????????.")}
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
