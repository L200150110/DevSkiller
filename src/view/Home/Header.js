import React, { useState } from "react";
import styled from "styled-components";
import { CheckCircle, MapPin, Mail, Menu } from "react-feather";
import Photo from "./../assets/Profile Picture@2x.png";

const Header = ({ user }) => {
  const [show] = useState(true);

  return (
    <Container style={{ height: show ? "140px" : "40px" }}>
      {user && show ? (
        <>
          <Avatar>
            <Image src={Photo} alt="avatar" />
          </Avatar>
          <Detail>
            <Name>
              <div>{user.name}</div>
              <Center>
                <CheckCircle size={18} color="#3FC4B6" />
              </Center>
            </Name>
            <Job>{user.job}</Job>
            <InfoC>
              <Info>
                <MapPin size={14} color="#F89F1E" />
                <div>{user.address}</div>
              </Info>
              <Info>
                <Mail size={14} color="#F89F1E" />
                <div>{user.email}</div>
              </Info>
            </InfoC>
          </Detail>
          <MenuC>
            <Menu size={26} color="#3FC4B6" />
          </MenuC>
        </>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  padding: 40px 20px;
  gap: 20px;
  background-color: #fff;
`;

const Avatar = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const Image = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Job = styled.div`
  font-weight: bold;
  color: #969696;
  font-size: 12px;
`;

const InfoC = styled.div`
  display: flex;
  gap: 12px;
  font-size: 11px;
  margin-top: 6px;
`;

const Info = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  color: #969696;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuC = styled.div`
  display: flex;
  height: 20px;
  width: 20px;
  right: 20px;
  top: 45px;
  justify-content: center;
  align-items: center;
  position: absolute;
`;
