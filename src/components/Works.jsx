import React, { useState } from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const Section = styled.section`
  height: 100vh;

  display: flex;
  justify-content: center;

  color: black;
  font-size: 14px;
  font-weight: 300;
  @media only screen and (max-width: 768px) {
    height: 200vh;
    width: auto;
    flex-direction: column;
    scroll-snap-align: none;
  }
`;

const Container = styled.div`
  width: 100%;
  width: 80%;

  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 200vh;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;

  flex-direction: column;
  height: 100%;

  justify-content: center;

  @media only screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
    scroll-snap-align: center;
    align-items: center;
    gap: 20px;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media only screen and (max-width: 768px) {
  }
`;

const ListItem = styled.li`
  font-size: 50px;
  font-weight: bold;
  cursor: pointer;

  color: ${(props) => (props.selected ? "#da4ea2" : "transparent")};
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #da4ea2;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
    height: 50%;
    scroll-snap-align: center;
  }
`;
const Projects = styled.div`
  width: 100%;
  height: 80%;
  border-radius: 20px;
  padding: 5px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #da4ea2);
  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`;
const ProjectBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(5, 6, 45);
  border-radius: 17px;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 768px) {
    margin: 0px;
    width: 100%;
  }
`;
const Button = styled.a`
  display: flex;
  align-self: flex-start;

  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    margin: 0px;
    display: none;
  }
`;

const ProjectMobile = styled.h1`
  display: none;

  @media only screen and (max-width: 768px) {
    display: block;
    font-size: 40px;
    color: white;
    width: 300px;
    border-bottom: 3px solid white;
    align-self: center;
  }
`;
const ProjectMobileScroll = styled.div`
  scroll-snap-align: bottom;
`;

const Works = ({ handleClick }) => {
  const [work, setWork] = useState("");
  const [data, setData] = useState([
    { name: "Page Turners - Front End", selected: true },
    { name: "Page Turners API", selected: false },
    { name: "Page Turners - Admin", selected: false },
    { name: "Craigslist-like App", selected: false },
    { name: "MTG Card Scanner", selected: false },
  ]);

  const handleItemClick = (index) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData.forEach((item, i) => {
        if (i === index) {
          item.selected = true;
        } else {
          item.selected = false;
        }
      });

      return newData;
    });
    setWork(data[index].name);
    if (window.innerWidth < 768) {
      const mobileDiv = document.getElementById("mobile");
      mobileDiv.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleButtonClick = () => {
    handleClick("contact");
  };

  return (
    <Section>
      <Container>
        <Left>
          <ProjectMobile>Project Selector</ProjectMobile>
          <List>
            {data.map((item, index) => (
              <ListItem
                selected={item.selected}
                key={item.name}
                text={item.name}
                onClick={() => handleItemClick(index)}
              >
                {item.name}
              </ListItem>
            ))}
            <Button href="#contact" onClick={handleButtonClick}>
              Contact Me
            </Button>
          </List>
        </Left>{" "}
        <ProjectMobileScroll id="mobile"></ProjectMobileScroll>
        <Right>
          <Projects>
            <ProjectBox>
              {work === "Page Turners - Front End" ? (
                <ProjectCard projectId="ds-visualizer" />
              ) : work === "Page Turners API" ? (
                <ProjectCard projectId="e-commerce" />
              ) : work === "Page Turners - Admin" ? (
                <ProjectCard projectId="coffee" />
              ) : work === "Craigslist-like App" ? (
                <ProjectCard projectId="things" />
              ) : work === "MTG Card Scanner" ? (
                <ProjectCard projectId="mtgcard" />
              ) : (
                <ProjectCard projectId="ds-visualizer" />
              )}
            </ProjectBox>
          </Projects>
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
