import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  width: 80%;

  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    scroll-snap-align: none;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
    height: 50%;
    scroll-snap-align: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.a`
  display: flex;

  justify-content: center;
  text-decoration: none;
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  width: 50%;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
    height: 50%;
    scroll-snap-align: center;
  }
`;

const Img = styled.img`
  width: 55%;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = ({ handleClick }) => {
  const handleButtonClick = () => {
    handleClick("about");
  };
  return (
    <Section id="home">
      <Container>
        <Left>
          <Title>Hi, I'm Roman.</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Who Am I</Subtitle>
          </WhatWeDo>
          <Desc>
            Fullstack Developer specializing in PERN application development. I
            thrive on challenges and problem-solving. With a constant thirst for
            knowledge, I'm always looking for innovative solutions to complex
            problems.
          </Desc>
          <Button href="#about" onClick={handleButtonClick}>
            Learn More
          </Button>
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.0}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src="./img/roman-avatar.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
