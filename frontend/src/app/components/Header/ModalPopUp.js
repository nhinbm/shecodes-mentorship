import React, { useEffect, useState } from "react";
import api from "../../../api/index";

const ModalPopUp = ({ authUser }) => {
  const [allConnects, setAllConnects] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [idPersonal, setIdPersonal] = useState(0);
  const data = [];
  const trial = ["Lê Gia Linh"];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const connects = await api.get("/connects");
        setAllConnects(connects.data);
        const response = await api.get("/users");
        setIdPersonal(
          response.data.filter((e) => e.mail === authUser.email)[0].id
        );
        setAllUsers(response.data);
        console.log(idPersonal);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, []);

  for (let i = 0; i < allConnects.length; i++) {
    if (allConnects[i].mentorId === idPersonal) {
      data.push(allUsers.filter((e) => e.id === allConnects[i].userId)[0]);
    }
  }

  console.log(data);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        borderRadius: "20px",
      }}
    >
      {data &&
        data.map((item) => (
          <div style={{ fontWeight: 700, padding: 16 }}>
            Bạn đã kết nối với {item.name}
          </div>
        ))}
    </div>
  );
};

export default ModalPopUp;
