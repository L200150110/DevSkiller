import React, { useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Slider = ({ data, select, setSelect }) => {
  useEffect(() => {
    if (data.length) {
      setSelect(data[0].albumId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const renderMain = (item) => {
    return (
      <SwiperSlide style={{ width: "180px" }} key={item.id}>
        <ItemC
          style={{
            filter: "drop-shadow(0px 5px 10px #f89f1e55)",
            minHeight: "140px",
          }}
        >
          <ImageC>
            <Image src={item.url} alt="item image" />
          </ImageC>
          <Title>{capitalize(item.title)}</Title>
        </ItemC>
      </SwiperSlide>
    );
  };

  const renderItem = (item) => {
    return (
      <SwiperSlide style={{ width: "180px" }} key={item.id}>
        <ItemC>
          <ImageC>
            <Image src={item.url} alt="item image" />
          </ImageC>
        </ItemC>
      </SwiperSlide>
    );
  };

  return (
    <>
      <Container>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          className="mySwiper"
          loop={true}
          onSlideChange={(swiperCore) => {
            const { realIndex } = swiperCore;
            setSelect(data[realIndex].albumId);
          }}
          mousewheel={true}
          modules={[Mousewheel]}
        >
          {data.map((item, i) => {
            if (item.albumId === select) {
              return renderMain(item);
            } else return renderItem(item);
          })}
        </Swiper>
      </Container>
      <Counter>
        {data.findIndex((item) => item.albumId === select) + 1} of {data.length}
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

  .swiper-wrapper {
    align-items: center;
  }
`;

const ItemC = styled.div`
  max-height: 140px;
  width: 180px;
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
