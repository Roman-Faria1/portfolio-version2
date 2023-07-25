import React, { Suspense } from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 20;
  color: white;
  width: 100%;
  height: 100%;
  overflow: hidden;

  border-radius: 17px;

  img {
    height: 300px;
    width: 100%;
    border-radius: 17px 17px 0px 0px;
  }
`;
const Container = styled.div`
  height: 100%;
  border-top: 2px solid #af40ff;
  border-radius: 0px 0px 17px 17px;
  display: flex;
  flex-direction: column;
`;

const ProjectHeader = styled.section`
  display: flex;
  justify-content: center;

  height: 20%;
`;
const Left = styled.div`
  width: 50%;
  display: flex;
  height: 100%;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    gap: 5px;
    margin: 0px;
    height: 80%;
    padding: 10px;
  }
`;

const ProjectTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  width: 50%;

  @media only screen and (max-width: 768px) {
    margin: 0px;
    font-size: 20px;
  }
`;
const ProjectDescription = styled.label`
  height: 50%;
  font-size: 20px;
  @media only screen and (max-width: 768px) {
    margin: 0px;
    height: auto;
    font-size: auto;
  }
`;

const Description = styled.div`
  padding-left: 10px;
  font-size: 17px;
  margin-bottom: 10px;
  color: #da4ea2;
  font-weight: 500;
`;
const ProjectDescriptionText = styled.div`
  font-size: 15px;
  padding-right: 20px;
  padding-left: 20px;
  @media only screen and (max-width: 768px) {
    margin: 0px;
    padding: 0px;
    font-size: 14px;
  }
`;
const Technologies = styled.div`
  height: 50%;
  @media only screen and (max-width: 768px) {
    margin: 0px;
    display: none;
  }
`;
const TechnoList = styled.ul`
  padding-left: 40px;
  font-size: 15px;
`;
const Techs = styled.li``;

const Right = styled.div`
  width: 50%;

  @media only screen and (max-width: 768px) {
    gap: 5px;
    margin: 0px;
    height: 80%;
    padding: 10px;

    display: flex;
    flex-direction: column;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10%;
  width: 40%;
  padding-left: 5%;
  padding-right 5%;
 
  align-items: center;
  @media only screen and (max-width: 768px) {
    gap: 10px;
    
    margin-bottom: 0px;
    width: 30%;
   
    
  }
`;
const Button = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  width: 50%;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    margin: 0px;
  }
`;

const Challenges = styled.div`
  height: 50%;
  @media only screen and (max-width: 768px) {
    margin: 0px;
    display: none;
  }
`;
const ChallengesText = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  font-size: 15px;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const Lessons = styled.div`
  height: 50%;
  text-overflow: ellipsis;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    margin: 0px;
    display: none;
  }
`;
const LessonsText = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  font-size: 15px;
`;

const DescriptionsSection = styled.section`
  display: flex;
  height: 100%;
  overflow: hidden;
`;

const MobileTechnologies = styled.ul`
  display: none;

  @media only screen and (max-width: 768px) {
    height: 80%;
    display: block;
    margin-top: ;
  }
`;

const projectData = [
  {
    id: "ds-visualizer",
    src: "./img/pageturner_login.PNG",
    deployed: "https://pageturnersreviews.onrender.com",
    code: "https://github.com/Roman-Faria1/PageTurners-FrontEnd",
    projectTitle: "PageTurners Reviews",
    projectDescription:
      "A React application that allows users to interact, search, add, and review with each other and their favorite reading material.",
    technologies: [
      "JavaScript",
      "MaterialUI",
      "React",
      "Tailwind",
      "Shadcn",
      "HTML",
    ],
    challenges:
      "Building a scalable and deployable front end in React posed many difficulties, most notably prop drilling issues native to React itself.",
    lessons:
      "Improved file structure, more efficient use of existing code, dramatically improved react experience. The reason for programming best practices is becoming glaringly obvious as projects get larger. ",
  },
  {
    id: "e-commerce",
    src: "./img/pt_backend_server.PNG",
    deployed: "https://pageturners-backend.onrender.com",
    code: "https://github.com/Roman-Faria1/PageTurners-Backend",
    projectTitle: "PageTurners - Backend",
    projectDescription:
      "Backend for PageTurners built using Node and Express. Multiple API endpoints for front end to leverage for data rendering. Leverages Passport for Google OAuth inegration.",
    technologies: [
      "Express.js",
      "Passport.js",
      "Node.js",
      "Cookie-Sessions.js",
    ],
    challenges:
      "Implementing something like 3rd part authentication posed a wide variety of problems, the largest being getting the authenticated data back to the front end to interact with.",
    lessons:
      "Spend more time database planning. Sure you can make things on the fly but not having to go back and forth or just having the structure fully planned out goes a long way.",
  },
  {
    id: "coffee",
    src: "./img/pt_admin_dash.PNG",
    deployed: "https://pageturners-admin.netlify.app/",
    code: "https://github.com/Roman-Faria1/PageTurners-Admin",
    projectTitle: "Page Turners - Admin Console",
    projectDescription:
      "Single pane of glass data view for admin users. Multiple data grids that allows access for admins to manage and modify site data. Report tracking for reported reviews on front end site.",
    technologies: [
      "React",
      "Javascript",
      "React-admin",
      "HTML",
      "Tailwind",
      "MaterialUI",
    ],
    challenges:
      "This was my first project working with MaterialUI and React-admin. Learning it on the fly in the midst of a capstone project was a tall order but I wanted a cooler admin console that I didn't think anyone else was going to deliver. Once I set my mind to something I figure out a way to get it done.",
    lessons:
      "Definitely learn to pace myself and don't bit off more than I can chew. I get very excited when it comes to learning new tech but it took many late nights to pull this off within project deadline.",
  },
  {
    id: "things",
    src: "./img/strangersthings.PNG",
    deployed: "https://strangersthings1.netlify.app/",
    code: "https://github.com/banana-fubar-1/strangers-things-project",
    projectTitle: "Strangers Things",
    projectDescription:
      "Small project to familiarize myself with React. Similar to Craigs List in functionality.",
    technologies: ["React", "Redux", "Node.js", "Tailwind"],
    challenges:
      "Learning the building blocks of prop drilling. Learning Redux. Learning Tailwind. A lot of learning happened here.",
    lessons:
      "Try to plan how you are going to use props ahead of time as much as possible.",
  },
  {
    id: "mtgcard",
    src: "./img/pt_backend_server.png",
    deployed: "#",
    code: "https://github.com/Roman-Faria1/RF-MTG-CSCT",
    projectTitle: "MTG Card Scanner",
    projectDescription:
      "CURRENTLY WIP.......A Scanner that uses computer vision leveraging OpenCV and Tesseract to scan provided Magic: The Gathering cards, match the data to scryfalls database and store collection data for the user to look at.",
    technologies: [
      "Javascript",
      "Python",
      "OpenCV",
      "Tesseract",
      "Tailwind",
      "HTML",
      "CSS",
      "Firebase",
    ],
    challenges:
      "Computer vision can be a pain. Just because I can tell what it is usually means the computer can't.",
    lessons:
      "Definitely my most enlighting lesson so far, over complicated design, lots of new tech to learn. The list goes on....",
  },
];

const ProjectCard = ({ projectId }) => {
  const project = projectData.find((p) => p.id === projectId);
  const {
    projectTitle,
    projectDescription,
    technologies,
    challenges,
    lessons,
    src,
    deployed,
    code,
  } = project;

  return (
    <Card>
      <img src={src} alt={projectTitle} />
      <Container>
        <ProjectHeader>
          <ProjectTitle>{projectTitle}</ProjectTitle>
          <Buttons>
            <Button href={deployed} target="_blank">
              Deployed
            </Button>
            <Button href={code} target="_blank">
              Code
            </Button>
          </Buttons>
        </ProjectHeader>
        <DescriptionsSection>
          <Left>
            <ProjectDescription className="projectDesc">
              <Description> Description:</Description>
              <ProjectDescriptionText>
                {projectDescription}
              </ProjectDescriptionText>
            </ProjectDescription>
            <Technologies>
              <Description> Technolgies Used:</Description>
              <TechnoList>
                {technologies.map((tech, index) => (
                  <Techs key={index}>{tech}</Techs>
                ))}
              </TechnoList>
            </Technologies>
          </Left>
          <Right>
            <Challenges>
              <Description>Challenges:</Description>
              <ChallengesText>{challenges}</ChallengesText>
            </Challenges>
            <Lessons>
              <Description>Lessons Learned:</Description>
              <LessonsText>{lessons}</LessonsText>
            </Lessons>
            <MobileTechnologies>
              <Description> Technolgies:</Description>
              <TechnoList>
                {technologies.map((tech, index) => (
                  <Techs key={index}>{tech}</Techs>
                ))}
              </TechnoList>
            </MobileTechnologies>
          </Right>
        </DescriptionsSection>
      </Container>
    </Card>
  );
};

export default ProjectCard;
