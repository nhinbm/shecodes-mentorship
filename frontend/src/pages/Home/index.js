import React from "react";
import {
  HomeWrapper,
  HomeFirstContainer,
  HomeContent,
  Content,
  ContentImg,
  HomeSecContainer,
  Item,
  Title,
  Par,
  Item2,
  ContentImg2,
  HomeThirdContainer,
  ContentImg3,
  Item3,
  Title3,
  Content3,
} from "./styles";
// import "./style.css";

const Home = () => {
  return (
    <HomeWrapper>
      <HomeFirstContainer>
        <HomeContent>
          <Content>
            Where <span style={{ color: "#0038FF" }}>Support</span>
            <br></br>
            Meets <span style={{ color: "#FF0000" }}>Connection</span>
          </Content>
          <ContentImg>
            <img src="frame2.png" alt=""></img>
          </ContentImg>
        </HomeContent>
      </HomeFirstContainer>

      <HomeSecContainer>
        <Item>
          <Title>
            <Content>Sứ mệnh của Bridgen</Content>
          </Title>
          <Par>
            Sứ mệnh của chúng tôi tại Bridgen là xây dựng một cộng đồng mạng đa
            dạng và phát triển, nơi mọi người, đặc biệt là những người mới ra
            trường và người chưa có nhiều kinh nghiệm, có cơ hội nối kết, chia
            sẻ kiến thức và phát triển sự nghiệp
            <br />
            <br />
            Chúng tôi tin rằng mọi người có tiềm năng và mọi người có thể là
            người hướng dẫn. Với sứ mệnh này, chúng tôi tạo ra một môi trường
            đáng tin cậy và cởi mở, nơi người học có thể tìm kiếm mentor để học
            hỏi, thăng tiến, và xây dựng tương lai sự nghiệp của họ.
          </Par>
        </Item>
        <Item2>
          <ContentImg2>
            <img src="frame3.png" alt=""></img>
          </ContentImg2>
        </Item2>
      </HomeSecContainer>

      <HomeThirdContainer>
        <Item3>
          <Title3>
            <Content3>Các gói dịch vụ cho người dùng</Content3>
          </Title3>
          <ContentImg3>
            <img src="frame4.png" alt=""></img>
          </ContentImg3>
        </Item3>
      </HomeThirdContainer>
    </HomeWrapper>
  );
};

export default Home;
