import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
const _ = require("lodash");

const Slider = ({ data }) => {
  const [select, setSelect] = useState(null);

  useEffect(() => {
    if (data.length) {
      setSelect(0);
    }
  }, [data]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checker = useCallback(
    _.debounce((item) => setSelect(item), 100),
    []
  );

  const handleScroll = (e) => {
    const widthItem = e.target.scrollWidth / data.length;
    const item = Math.ceil(e.target.scrollLeft / widthItem);
    if (select !== item) {
      checker(item);
    }
  };

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const renderMain = (item) => {
    return (
      <ItemC
        key={item.id}
        style={{ filter: "drop-shadow(0px 5px 10px #f89f1e55)" }}
      >
        <ImageC>
          <Image src={item.url} alt="item image" />
        </ImageC>
        <Title>{capitalize(item.title)}</Title>
      </ItemC>
    );
  };

  const renderItem = (item, i) => {
    return (
      <ItemC key={item.id}>
        <ImageC>
          <Image src={item.url} alt="item image" />
        </ImageC>
      </ItemC>
    );
  };

  return (
    <>
      <Container onScroll={handleScroll}>
        {data.map((item, i) => {
          if (i === select) {
            return renderMain(item);
          } else return renderItem(item, i);
        })}
      </Container>
      <Counter>
        {select + 1} of {data.length}
      </Counter>
    </>
  );
};

export default Slider;

const Container = styled.div`
  display: flex;
  height: 140px;
  padding-bottom: 20px;
  overflow: auto;
  gap: 12px;
  align-items: center;
  z-index: 9;
  margin-top: -90px;
  padding-left: 12px;
  padding-right: 12px;
  scroll-snap-type: x mandatory;
  padding-top: 20px;

  background-image: linear-gradient(#fff, #f0f0f0);

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ItemC = styled.div`
  max-height: 100%;
  min-width: 180px;
  border-radius: 20px;
  background-color: #f89f1e;
  overflow: hidden;
  scroll-behavior: smooth;
  scroll-snap-align: center;
`;

const Image = styled.img`
  // flex-shrink: 0;
  min-width: 100%;
  min-height: 100%;
`;

const ImageC = styled.div`
  height: 100px;
  border-radius: 0px 0px 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Title = styled.div`
  color: white;
  font-size: 11px;
  padding: 3px 12px;
`;

const Counter = styled.div`
  position: absolute;
  right: 40px;
  top: 280px;
  font-size: 9px;
  color: #969696;
  z-index: 10;
`;
