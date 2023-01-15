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
  padding-top: 250px;
  padding-bottom: 18px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 200%;
  color: var(--font-color);
  letter-spacing: normal;
  font-family: "MaruBuri-Bold";
  margin-bottom: 80px;
`;

const Content = styled.p`
  font-size: 100%;
  color: #rgba(51 39 1, 0.9);
  letter-spacing: normal;
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

const CopyButton = styled.button`
  width: 130px;
  height: 30px;
  color: #FFFFFF;
  background: #292000;
  letter-spacing: normal;
  font-family: "MaruBuri-Regular";
  border-radius: 25px;
  border: none;
`;

const SpacingHStack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

const BorderWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  align-items: center;
  text-align: center;
  border: solid 1px #292000;
  border-radius: 5px;
`;

const AttentNotice = styled.p`
  color: #292000;
  letter-spacing:normal;
  line-height: 2;
  font-size: 100%;
  padding: 30px;
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
const notify = () => toast.success("복사되었습니다!");

const ExampleComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  var title = isOpen == false ? "▼  계좌번호 확인  ▼" : "▲  계좌번호 확인  ▲";
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
            <VStack>
            <AccountContent>신한은행</AccountContent>
            <AccountContent>110-508-665888 고상범</AccountContent>
            </VStack>
            <CopyButton onClick={
              ()=>{navigator.clipboard.writeText('110508665888');
              notify();}
            }>복사하기</CopyButton>
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
            <VStack>
            <AccountContent>카카오뱅크</AccountContent>
            <AccountContent>3333-03-0952774 이혜주</AccountContent>
            </VStack>
            <CopyButton onClick={()=>{
               navigator.clipboard.writeText('3333030952774');
               notify();
                }}>복사하기</CopyButton>
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

  return (
    <Wrapper>
      <Title>마음 전하실 곳</Title>
      <Content>
      참석이 어려우신 분들은 <br /> 축하의 마음을 전달해주세요
      </Content>
      <Spacer size={100}/>

    <ExampleComponent>
    </ExampleComponent>
    <ToastContainer />
    <Spacer size={100} axis={"vertical"}/>
    <BorderWrapper>
    <AttentNotice>
    축하를 위해 참석하시는 분들을 <br/> 쾌적하게 모실 수 있도록<br/>신랑 신부에게 미리 참석 의사를 전달해주세요
    </AttentNotice>
    </BorderWrapper>
    <Spacer size={150} axis={"vertical"}/>
    </Wrapper>
  );
};

export default CongratulatoryMoney;
