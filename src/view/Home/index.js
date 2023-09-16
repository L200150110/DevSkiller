import React, { useState, useEffect } from "react";
import Header from "./Header";
import Slider from "./Slider";
import List from "./List";
import styled from "styled-components";
import { Plus } from "react-feather";
const _ = require("lodash");

const Home = () => {
  const [data, setData] = useState([]);
  const [slider, setSlider] = useState([]);
  const [select, setSelect] = useState(null);

  let scroll = 0;

  const [user] = useState({
    name: "Melanie Tan",
    job: "Professional Food Photographer",
    address: "Bangkok",
    email: "melanietan99@gmail.com",
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setSlider(_.uniqBy(d, "albumId").slice(0, 10));
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = (e) => {
    if (e.target.scrollTop > scroll) {
      if (document.getElementById("navbar").style.top !== "-130px") {
        document.getElementById("navbar").style.top = "-130px";
      }
    } else {
      if (document.getElementById("navbar").style.top !== "0") {
        document.getElementById("navbar").style.top = "0";
      }
    }
    scroll = e.target.scrollTop;
  };

  return (
    <Container onScroll={handleScroll}>
      <StickyC id="navbar">
        <Header user={user} />
        <Slider data={slider} select={select} setSelect={setSelect} />
      </StickyC>
      <List
        data={select ? data.filter((item) => item.albumId === select) : []}
      />
      <AddButton>
        <Plus size={20} color="#fff" />
      </AddButton>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100dvw;
  font-family: "Poppins";
  background-color: #f0f0f0;
  height: 100dvh;
  overflow: auto;
`;

const StickyC = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  transition: top 0.3s;
`;

const AddButton = styled.div`
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e71d35;
  position: fixed;
  right: 12px;
  bottom: 12px;
  border-radius: 50%;
  filter: drop-shadow(0px 0px 3px #0004);
`;
