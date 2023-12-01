import "./styles.css";
import { ConfigProvider, Rate, Timeline } from "antd";
import { getAuthUser } from "@utils/authStorage";
import Skills from "./Skills";
import { useState, useEffect } from "react";
import api from "../../api/index";
import { Link, useParams } from "react-router-dom";

const mean = (arr) => {
  if (!arr) return null;
  else {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return Math.round((sum / arr.length) * 10) / 10;
  }
};

const Personal = () => {
  const { id } = useParams();

  const [users, setUsers] = useState([]);
  const [connects, setConnects] = useState([]);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userResponse = await api.get("/users");
        setUsers(userResponse.data);
      } catch (error) {}
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchConnects = async () => {
      try {
        const connectResponse = await api.get("/connects");
        setConnects(connectResponse.data);
        return connectResponse.data;
      } catch (error) {}
    };

    fetchConnects();
  }, []);

  const userList = [...users];
  const connectList = [...connects];
  var profile = {};
  var connectList_filtered = [];
  var connectedMentorIds = [];
  var connectedMentors = [];

  const singleProfile = userList.filter((user) => user.id == id)[0];

  if (singleProfile != null) {
    profile = singleProfile;
  }

  const [rating, setRating] = useState(mean(profile.rate) + "/4");

  if (
    connectList.filter((entry) => (entry.userId === profile.id) !== undefined)
  ) {
    connectList_filtered = connectList.filter(
      (entry) => entry.userId === profile.id
    );
    connectedMentorIds = connectList_filtered.map((entry) => entry.mentorId);
    for (let i = 0; i < connectedMentorIds.length; i++) {
      connectedMentors.push(
        userList.filter((user) => user.id === connectedMentorIds[i])[0]
      );
    }
  }

  return (
    <div className="personal-container">
      <div className="profile">
        <div className="ava-name-rate">
          <div className="ava-name">
            <img className="avatar" src={profile.ava} alt="avatar" />
            <div className="rname">{profile.name}</div>
            <div className="rate">
              <div class="subhead">Đánh giá mentor này</div>
              <Rate
                allowHalf
                defaultValue={0}
                style={{ color: "#000" }}
                count={4}
                onChange={(value) => {
                  profile.rate.push(value);
                  setRating(mean(profile.rate) + "/4");
                }}
              />
            </div>
          </div>
        </div>

        <div className="profile-text-history">
          <div className="profile-text">
            <div className="h5">
              Giới tính:
              <span>{profile.sex}</span>
            </div>
            <div className="h5">
              Ngày sinh:
              <span>{profile.birth}</span>
            </div>
            <div className="h5">
              Thông tin liên lạc:<span>{profile.email}</span>
            </div>
            <div className="h5">
              Kỹ năng:
              <Skills array={profile.skills} />
            </div>
            <div className="h5">
              Cấp độ: <span>{profile.level}</span>
            </div>
            <div className="h5">
              Đánh giá:
              <span className="rating">
                {mean(profile.rate) > 0
                  ? mean(profile.rate) + "/4"
                  : " Chưa có đánh giá"}
              </span>
            </div>
          </div>

          <div className="history">
            <div className="subhead">Lịch sử hoạt động</div>
            <ConfigProvider
              theme={{
                token: {
                  fontFamily: "montserrat",
                  fontSize: "18px",
                },
              }}
            >
              <Timeline>
                {connectedMentors &&
                  connectedMentors.map((item) => (
                    <Timeline.Item color="#000">
                      Bạn đã kết nối với{" "}
                      <Link
                        className="mentor-profile"
                        to={`/personal/${item.id}`}
                      >
                        {item.name}
                      </Link>
                      .
                    </Timeline.Item>
                  ))}
              </Timeline>
            </ConfigProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
