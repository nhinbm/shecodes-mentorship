import { devices } from "@app/constants/sizes";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const LayoutHeader = styled(Layout.Header)`
  background: #fffdf1;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #000;
  background: #fffdf1;
`;

export const HeaderLeft = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: center;
  gap: 24px;
  text-decoration: none;
  color: #000;
`;

export const AppName = styled.div`
  font-size: 24px;
  font-weight: 700;
  @media ${devices.desktop} {
    font-size: 32px;
    font-weight: 700;
  }
`;

export const HeaderRight = styled.div`
  display: none;
  color: #000;
  position: relative;
  @media ${devices.desktop} {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 24px;
  }
`;

export const MobileHeaderRight = styled.div`
  margin-left: auto;
  @media ${devices.desktop} {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

export const LinkNav = styled(Link)`
  color: #000;
`;

export const ModalPopUpWrapper = styled.div`
  position: absolute;
  top: 10;
  right: 60%;
  display: none;
  background: #000;
  color: #fff;
  border-radius: 20px;

  &.active {
    display: block;
  }
`;
