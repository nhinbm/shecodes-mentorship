import React, { useEffect, useState } from "react";
import { SEARCH_ITEM_DATA } from "./data";
import SearchItem from "./SearchItem";
import { SearchListWrapper } from "./style";
import { chunk, difference, intersection } from "lodash";
import { Col, Row } from "antd";
import api from "../../api/index";
import { getAuthUser } from "@utils/authStorage";

const SearchList = ({ listSkills }) => {
  const [allUsers, setAllUsers] = useState([]);
  const [idPersonal, setIdPersonal] = useState(0);
  const authUser = getAuthUser();
  const data = [];
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/users");
        setAllUsers(response.data);
        const id = response.data.filter((e) => e.mail === authUser.email)[0];
        setIdPersonal(id.id);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, []);

  for (let i = 0; i < allUsers.length; i++) {
    if (intersection(allUsers[i].skills, listSkills).length > 0) {
      const diff = difference(allUsers[i].skills, listSkills);
      data.push({ ...allUsers[i], skills: diff });
    }
  }

  return (
    <SearchListWrapper>
      <div style={{ width: "100%" }}>
        {data && data.length > 0 ? (
          chunk(data, 3).map((row) => (
            <Row style={{ marginBottom: 16 }}>
              {row.map((item) => (
                <Col span={8}>
                  <SearchItem item={item} idPersonal={idPersonal}></SearchItem>
                </Col>
              ))}
            </Row>
          ))
        ) : (
          <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>
            Không tìm thấy người phù hợp
          </div>
        )}
      </div>
    </SearchListWrapper>
  );
};

export default SearchList;
