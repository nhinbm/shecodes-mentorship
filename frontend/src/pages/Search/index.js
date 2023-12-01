import React, { useState } from "react";
import { CustomButton, CustomInput, Title, Wrapper } from "./style";
import { Select, Tag } from "antd";
import SearchList from "./SearchList";
import { OPTIONS } from "./data";

const Search = () => {
  const [isClick, setIsClick] = useState(false);
  const [listSkills, setListSkills] = useState([]);

  const tagRender = (props) => {
    const { label, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        color="#fff"
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{
          marginRight: 8,
          background: "#000",
          fontSize: "16px",
          borderRadius: "20px",
          padding: 5,
        }}
      >
        {label}
      </Tag>
    );
  };

  const options = OPTIONS;

  const handleOnClick = () => {
    if (listSkills && listSkills.length > 0) {
      setIsClick(true);
    }
  };

  const handleChange = (value) => {
    setListSkills(value);
  };

  return (
    <Wrapper>
      <Title>Hãy cho chúng tôi biết vấn đề bạn đang gặp</Title>
      <CustomInput
        placeholder="Nhập vấn đề bạn cần giúp đỡ..."
        style={{
          height: 120,
          resize: "none",
          maxWidth: "80vw",
          fontSize: 16,
          radius: 20,
        }}
      />

      <Select
        mode="tags"
        size="large"
        placeholder="Chọn ngành cho vấn đề..."
        onChange={handleChange}
        style={{
          width: "80%",
          radius: 20,
          margin: "30px 0",
        }}
        options={options}
        bordered={false}
        tagRender={tagRender}
      />

      <CustomButton onClick={handleOnClick}>TÌM KIẾM</CustomButton>
      {isClick === true && listSkills && listSkills.length > 0 && (
        <SearchList listSkills={listSkills} />
      )}
    </Wrapper>
  );
};

export default Search;
