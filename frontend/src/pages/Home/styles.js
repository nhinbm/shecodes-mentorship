import { devices } from "@app/constants/sizes";
import { Row } from "antd";
import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  //   @media ${devices.desktop} {
  //     padding: 0 2vw;
  //   }
  //   @media ${devices.large} {
  //     padding: 0 8vw;
  //   }
`;

export const HomeFirstContainer = styled.div`
  width: 100vw;
  height: 700px;
  display: flex;
`;

export const HomeContent = styled.div`
  margin-top: 245px;
  margin-left: 57px;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  font-size: 76px;
  font-weight: 650;
  margin-right: auto;
`;

export const ContentImg = styled.div`
  display: inline-block;
  margin-left: auto;
`;

export const HomeSecContainer = styled.div`
  height: 900px;
  width: 100vw;
  margin-top: 300px;
  background-color: #ffda6f;
  display: flex;
  align-items: center;
`;

export const Item = styled.div`
  margin-left: 57px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
`;

export const Par = styled.text`
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: left;
`;

export const Item2 = styled.div`
  margin-right: 57px;
`;

export const ContentImg2 = styled.div`
  display: inline-block;
  margin-left: 100px;
`;

export const DetailContainer = styled.div`
  height: 70vh;
  overflow-y: auto;
`;

export const HomeThirdContainer = styled.div`
  height: 900px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Item3 = styled.div`
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  gap: 100px;
`;

export const Title3 = styled.div``;

export const Content3 = styled.div`
  font-size: 76px;
  font-weight: 650;
`;

export const ContentImg3 = styled.div`
  margin-top: 30px;
  margin-left: 100px;
`;
