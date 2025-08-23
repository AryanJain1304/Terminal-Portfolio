// components/Skills.tsx
import React from "react";
import { Wrapper } from "../styles/Output.styled";
import {
  ProjectContainer,
  ProjectTitle,
  ProjectsIntro,
} from "../styles/Projects.styled";
import {
  SkillBubbleContainer,
  SkillBubble,
} from "../styles/Skills.styled"; // import bubble styles

const skills = [
  {
    title: "Languages",
    desc: ["Python", "SQL", "JavaScript"],
  },
  {
    title: "Machine Learning Tools",
    desc: [
      "Scikit-Learn",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "Hugging Face",
      "Transformers",
      "OpenCV",
      "CrewAI",
    ],
  },
  {
    title: "Data Analysis & Visualization Tools",
    desc: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
  },
  {
    title: "Machine Learning Skills",
    desc: [
      "Supervised Learning",
      "Deep Learning",
      "Computer Vision",
      "Hyperparameter Optimization",
    ],
  },
  {
    title: "Web Development",
    desc: [
      "MERN (MongoDB, Express.js, React.js, Node.js)",
      "HTML5",
      "CSS3",
      "Flask",
    ],
  },
  {
    title: "Database Tools",
    desc: ["MySQL", "Oracle Database", "MongoDB"],
  },
  {
    title: "Automation & Deployment Tools",
    desc: ["N8N", "Docker", "Jenkins"],
  },
];

const Skills: React.FC = () => {
  return (
    <Wrapper data-testid="skills">
      <ProjectsIntro>
        Here are the technical skills I've gained and worked with so far
      </ProjectsIntro>
      {skills.map(({ title, desc }) => (
        <ProjectContainer key={title}>
          <ProjectTitle>{title}</ProjectTitle>
          <SkillBubbleContainer>
            {desc.map((skill) => (
              <SkillBubble key={skill}>{skill}</SkillBubble>
            ))}
          </SkillBubbleContainer>
        </ProjectContainer>
      ))}
    </Wrapper>
  );
};

export default Skills;