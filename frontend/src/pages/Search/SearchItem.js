import React, { useEffect, useState } from "react";
import {
  ConnectButton,
  SearchItemAvatar,
  SearchItemAvatarWrapper,
  SearchItemWrapper,
} from "./style";
import { Modal } from "antd";
import api from "../../api/index";
import { getAuthUser } from "@utils/authStorage";
import axios from "axios";

const SearchItem = ({ item, idPersonal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [allConnects, setAllConnects] = useState([]);
  const authUser = getAuthUser();
  const { id } = item;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/connects");
        setAllConnects(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, []);

  const handleConnect = async () => {
    try {
      if (item.level === "Chuyên nghiệp") {
        setIsOpen(true);
      }
      if (!idPersonal || !item.id) return null;

      const response = await api.post(
        "/connects",
        {
          id: allConnects.length + 1,
          userId: idPersonal,
          mentorId: id,
        },
        { headers: { "Content-Type": "application/json" } }
      );
    } catch (err) {
      console.log(err);
    }
  };
  const handleOk = () => {
    setIsOpen(false);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <SearchItemWrapper>
      <SearchItemAvatarWrapper>
        <SearchItemAvatar src={item.ava} alt="avatar" />
      </SearchItemAvatarWrapper>
      <div style={{ fontSize: 16 }}>
        <span style={{ fontWeight: 700 }}>Tên: </span>
        <span>{item.name}</span>
      </div>
      <div style={{ fontSize: 16 }}>
        <span style={{ fontWeight: 700 }}>Kỹ năng: </span>
        {item.skills.map((i) => (
          <span>{i}, </span>
        ))}
      </div>
      {item.level === "Chuyên nghiệp" ? (
        <div style={{ fontSize: 16 }}>
          <span style={{ fontWeight: 700 }}>Cấp độ: </span>
          <span>Chuyên nghiệp</span>
        </div>
      ) : null}
      <ConnectButton onClick={handleConnect}>Kết nối</ConnectButton>
      <Modal
        open={isOpen}
        title="Người chuyên nghiệp cần phải trả tiền"
        onCancel={handleCancel}
        onOk={handleOk}
      ></Modal>
    </SearchItemWrapper>
  );
};

export default SearchItem;
