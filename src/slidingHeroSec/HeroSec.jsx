import React from "react";
import styled from "styled-components";
import "./style.css"
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowBackIos";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowForwardIos";
import { Slideritems } from "./data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props=>props.slideIndex * -100}vw);
`;

const Heading = styled.h1``;
const Text = styled.p``;
const HeroBtn = styled.button``;
const Slide = styled.div`
  width: 100vw;
  height: 100%;
  background: ${(props) => {
    // if (props.identity === 1) {
    //   return "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../assets/rock.jpg)";
    // } else if (props.identity === 2) {
    //   return "linear-gradient(rgba(255, 0, 0, 0.6), rgba(255, 0, 0, 0.6)), url(./assets/another_background.jpg)";
    // } else if (props.identity === 3) {
    //   return "linear-gradient(rgba(0, 255, 0, 0.6), rgba(0, 255, 0, 0.6)), url(./assets/yet_another_background.jpg)";
    // } else {
    //   return "default_background_value";
    // }
  }};
`;

const HeroSec = (props) => {
  const [slideIndex, setSlideindex] = React.useState(0)
  const handleClick = (direction) => {
    if(direction ==="left"){
      setSlideindex(slideIndex > 0 ? slideIndex-1 : 2)
    }else{
      setSlideindex(slideIndex < 2 ? slideIndex +1 : 0 )
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {Slideritems.map((item) => (
          <Slide bg={item.bg} identity={item.id} className={item.class}>
            <p>Seamless</p>
            <Heading>{props.header}</Heading>
            <Text>{item.desc}</Text>
            <HeroBtn>Get started</HeroBtn>
            <HeroBtn>View more</HeroBtn>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default HeroSec;
