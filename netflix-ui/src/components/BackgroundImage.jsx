import React from 'react';
import backgroundImage from "../assets/login.jpg";
import styled from 'styled-components';

export default function BackgroundImage() {
  return (
    <Container>
      <img src={backgroundImage} alt="" />
    </Container>
  )
}

const Container = styled.div`
      height:100vh;
      width:100vw;
      img{
        height:100vh;
        width:100vw;

      }

`;
