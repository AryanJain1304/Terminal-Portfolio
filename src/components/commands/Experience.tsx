import { Wrapper } from "../styles/Output.styled";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectTitle,
  ProjectsIntro,
} from "../styles/Projects.styled";

const Experience: React.FC = () => {
  return (
    <Wrapper data-testid="experience">
      <ProjectsIntro>
        Here’s my professional experience so far
      </ProjectsIntro>
      {experience.map(({ title, desc }) => (
        <ProjectContainer key={title}>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectDesc>
            {desc.map((line, idx) => (
              <div key={idx}>• {line}</div>
            ))}
          </ProjectDesc>
        </ProjectContainer>
      ))}
    </Wrapper>
  );
};

const experience = [
  {
    title: "Summer Research Intern – IIT Jammu (Remote) | Jun 2024 – Jul 2024",
    desc: [
      "Gained hands-on exposure to Large Language Models (LLMs), Generative AI, and Agentic AI, including architectures, fine-tuning, and deployment.",
      "Built practical NLP applications such as chatbots, summarization, and translation systems, while addressing model performance and bias.",
      "Explored creative AI applications in text, design, and storytelling, leveraging generative modeling techniques.",
      "Researched and analyzed autonomous AI systems for decision-making in robotics and smart environments, with emphasis on ethics.",
      "Completed a capstone project integrating LLMs, generative modeling, and agentic AI to design an end-to-end AI-driven solution.",
    ],
  },
];

export default Experience;