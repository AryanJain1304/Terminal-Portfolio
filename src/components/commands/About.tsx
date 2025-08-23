import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Aryan Jain</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a computer science student</HighlightAlt> at NIIT Uniersity, Neemrana
      </p>
      <p>
        My focus lies in applying machine learning and AI techniques<br />
        to solve real-life challenges.
      </p>
    </AboutWrapper>
  );
};

export default About;
