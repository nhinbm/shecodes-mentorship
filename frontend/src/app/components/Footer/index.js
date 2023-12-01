import { Layout, Button } from "antd";
import "./styles.css";
import { HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import ChatInterface from "./ChatInterface";

export const Footer = () => {
  const [input, setInput] = useState("");

  return (
    <div className="footer-container">
      {/* <ChatInterface /> */}
      <div className="grid-container"></div>
      <div className="footer-nav">
        <div className="brand">
          <Link to="/">
            <img className="logo" src="Vector.png" alt="Bridgen logo" />
          </Link>
          <Link className="bridgen" to="/">
            Bridgen
          </Link>
        </div>
        <div className="nav">
          <Link className="nav-link" to="/">
            Trang chủ
          </Link>
          <Link className="nav-link" to="/search">
            Kết nối
          </Link>
          <Link className="nav-link" to="/personal/:id">
            Trang cá nhân
          </Link>
        </div>
      </div>

      <div className="newsletter-form">
        <p className="h5">Nhận thông tin từ chúng tôi</p>
        <input
          type="email"
          className="email-field"
          placeholder="Email"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button
          type="submit"
          className="submit"
          disabled={input.length === 0 || !/\S+@\S+\.\S+/.test(input)}
          onClick={() => {
            setInput("");
          }}
        >
          Theo dõi
        </button>
      </div>

      <div className="contact">
        <div className="h5">Thông tin liên hệ</div>
        <p className="contact-info">
          slaysquad@gmail.com
          <br />
          Địa chỉ: 235 NVC
          <br />
          Số điện thoại: 00000000
        </p>
        <div className="privacy-container">
          <div className="privacy-policy">
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
