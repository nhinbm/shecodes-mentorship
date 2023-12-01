import { Button, Input } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  background: #ffda6f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  text-align: center;
  font-weight: 800;
  font-size: 36px;
  padding: 50px;
`;

export const CustomInput = styled(Input.TextArea)``;

export const SearchItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
`;

export const SearchListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SearchItemAvatarWrapper = styled.div``;

export const SearchItemAvatar = styled.img`
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 20px;
  position: relative;
`;

export const CustomButton = styled(Button)`
  background: #fff;
  color: #000;
  border-radius: 24px;
  font-size: 16px;
  font-weight: 700;
  padding: 12px 24px;
  height: auto;
  margin-bottom: 30px;
`;

export const ConnectButton = styled(Button)`
  margin-top: 10px;
  background: #000;
  color: #fff;
  font-weight: 800;
  font-size: 16px;
  height: auto;
  border-radius: 24px;
  padding: 4px 24px;
`;
