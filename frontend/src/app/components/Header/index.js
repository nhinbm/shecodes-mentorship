import { Layout, Button, Collapse } from "antd";
import {
  AppName,
  HeaderLeft,
  HeaderRight,
  HeaderWrapper,
  LayoutHeader,
  LinkNav,
  Logo,
  ModalPopUpWrapper,
} from "./styles";
import { HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import {
  getAuthUser,
  removeAccessToken,
  removeAuthUser,
} from "@utils/authStorage";
import { IoNotificationsSharp } from "react-icons/io5";
import ModalPopUp from "./ModalPopUp";
import { useState, useEffect } from "react";
import classNames from "classnames";
import api from "../../../api/index";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const authUser = getAuthUser();

  const onSignOut = () => {
    removeAuthUser();
    removeAccessToken();
    window.location.href = "/login";
  };

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  const current = getAuthUser();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userResponse = await api.get("/users");
        setUsers(userResponse.data);
      } catch (error) {}
    };

    fetchUsers();
  }, []);

  const userList = [...users];
  var profile = {};

  const singleProfile = userList.filter(
    (user) => user.mail === current.email
  )[0];

  if (singleProfile != null) {
    profile = singleProfile;
  }

  return (
    <LayoutHeader>
      <HeaderWrapper>
        <HeaderLeft to="/">
          <Logo src="Vector.png" alt="logo" />
          <AppName>Bridgen</AppName>
        </HeaderLeft>
        <HeaderRight>
          <LinkNav to="/">Trang chủ</LinkNav>
          <LinkNav to="/search">Kết nối</LinkNav>

          <LinkNav to={`/personal/${profile.id}`}>Trang cá nhân</LinkNav>

          <LinkNav to="/chatbot">Chatbot</LinkNav>

          <Button
            type="text"
            style={{ position: "relative" }}
            onClick={handleOnClick}
          >
            <IoNotificationsSharp />
            <ModalPopUpWrapper className={classNames({ active: isOpen })}>
              <ModalPopUp authUser={authUser} />
            </ModalPopUpWrapper>
          </Button>
          <Button onClick={onSignOut} type="link">
            Đăng xuất
          </Button>
        </HeaderRight>
      </HeaderWrapper>
    </LayoutHeader>
  );
};

export default Header;
