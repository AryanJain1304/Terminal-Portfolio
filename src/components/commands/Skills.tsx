import { Wrapper } from "../styles/Output.styled";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectTitle,
  ProjectsIntro,
} from "../styles/Projects.styled";

const Skills: React.FC = () => {
  return (
    <Wrapper data-testid="skills">
      <ProjectsIntro>
        Here are the technical skills I've gained and worked with so far
      </ProjectsIntro>
      {skills.map(({ title, desc }) => (
        <ProjectContainer key={title}>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
    </Wrapper>
  );
};

const skills = [
  {
    title: "Languages",
    desc: "Python, SQL, JavaScript",
  },
  {
    title: "Machine Learning Tools",
    desc: "Scikit-Learn, TensorFlow, Keras, PyTorch",
  },
  {
    title: "Data Analysis & Visualization Tools",
    desc: "NumPy, Pandas, Matplotlib, Seaborn",
  },
  {
    title: "Machine Learning Skills",
    desc: "Supervised Learning, Deep Learning (CNN, RNN), Computer Vision, Hyperparameter Optimization",
  },
  {
    title: "Web Development",
    desc: "MERN (MongoDB, Express.js, React.js, Node.js), HTML5, CSS3, Flask",
  },
  {
    title: "Database Tools",
    desc: "MySQL, Oracle Database, MongoDB",
  },
];

export default Skills;