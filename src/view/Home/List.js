import React from "react";
import styled from "styled-components";
import PhotoAlbum from "react-photo-album";

const List = ({ data }) => {
  const breakpoints = [1080, 720, 680, 600, 480];

  return (
    <Container>
      <PhotoAlbum
        layout="columns"
        photos={data.map((item) => ({
          key: item.id,
          src: item.url,
          width: breakpoints[Math.floor(Math.random() * breakpoints.length)],
          height: breakpoints[Math.floor(Math.random() * breakpoints.length)],
        }))}
        columns={(containerWidth) => {
          if (containerWidth < 400) return 2;
          if (containerWidth < 800) return 3;
          return 4;
        }}
      />
    </Container>
  );
};

export default List;

const Container = styled.div`
  padding: 12px;
`;
