import React, { useEffect } from "react";
import { Divider } from "antd";
import styled from "styled-components";
import LocationImage from "../assets/locationImage.webp";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 100%;
  margin: 0 auto;
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
  color: #846400;
  letter-spacing: normal;
  display: inline;
  font-family: "MaruBuri-Regular";
`;

const LocationTitle = styled.p`
  font-size: 200%;
  color: var(--font-color);
  letter-spacing: normal;
  display: inline;
  font-family: "MaruBuri-SemiBold";
  margin: 0;
`;

const LocationNormalText = styled.p`
  font-size: 130%;
  color: var(--font-color);
  letter-spacing: normal;
  display: inline;
  font-family: "MaruBuri-Regular";
  margin: 0;
`;

const LocationSubNormalText = styled.p`
  font-size: 100%;
  color: #846400;
  letter-spacing: normal;
  display: inline;
  font-family: "MaruBuri-Regular";
  margin: 0;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Content = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.75;
  width: 100%;
  text-align: center;
  padding-top: 42px;
  padding-bottom: 42px;
  margin: 0;
`;

const ImageBackground = styled.img`
  padding: 0px;
  margin: 0px;
  display: inline-block;
  width: 100%;
`;

const Map = styled.div`
  width: 100%;
  padding: 0;
`;

const Location = () => {
  // 카카오 맵 불러오기

  // <!-- 3. 실행 스크립트 -->
  const executeScript = () => {
    const scriptTag = document.createElement("script");
    const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
    "timestamp" : "1671398290485",
    "key" : "2d3ge",
    "mapWidth" : "640",
    "mapHeight" : "360"
  }).render();`);
    scriptTag.appendChild(inlineScript);
    document.body.appendChild(scriptTag);
  };

  // <!-- 2. 설치 스크립트 * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다. -->
  // document.write 문제가 발생해서 해당 파일을 직접 가져온다음 수정했음
  const InstallScript = () => {
    (function () {
      let c = window.location.protocol === "https:" ? "https:" : "http:";
      let a = "16137cec";

      if (window.daum && window.daum.roughmap && window.daum.roughmap.cdn) {
        return;
      }
      window.daum = window.daum || {};
      window.daum.roughmap = {
        cdn: a,
        URL_KEY_DATA_LOAD_PRE: c + "//t1.daumcdn.net/roughmap/",
        url_protocal: c,
      };
      let b =
        c +
        "//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/" +
        a +
        "/roughmapLander.js";

      // document.write -> doumnet.body.append로 수정
      const scriptTag = document.createElement("script");
      scriptTag.src = b;
      document.body.append(scriptTag);
      scriptTag.onload = () => {
        executeScript();
      };
    })();
  };

  useEffect(() => {
    InstallScript();
  }, [InstallScript]);

  return (
    <Wrapper>
      <Title>오시는 길</Title>
      <VerticalSpacer height="0px"></VerticalSpacer>
      <NormalText>LOCATION</NormalText>
      <VerticalSpacer height="40px"></VerticalSpacer>
      <LocationTitle>더마레보 15F Atelier.M</LocationTitle>
      <VerticalSpacer height="0px"></VerticalSpacer>
      <LocationNormalText>경기도 수원시 영통구 봉영로 1591</LocationNormalText>
      <VerticalSpacer height="0px"></VerticalSpacer>
      <LocationSubNormalText>Tel. 031-202-3773</LocationSubNormalText>
      <VerticalSpacer height="30px"></VerticalSpacer>
      <div id="daumRoughmapContainer1671398290485" class="root_daum_roughmap root_daum_roughmap_landing"></div>
      <VerticalSpacer height="40px"></VerticalSpacer>
      <ImageBackground src={LocationImage} />
    </Wrapper>
  );
};

export default Location;
