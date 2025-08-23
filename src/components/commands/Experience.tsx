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
      "Explored and experimented with OpenAI and Gemini APIs as well as open-source pre-trained models using Hugging Face Transformer library to develop AI-powered applications. ",
      "Learned and implemented automation workflows using N8N for efficient AI model integration and deployment. ",
      "Completed a capstone project integrating LLMs, generative modeling, and agentic AI to design an end-to-end AI-driven solution.",
    ],
  },
];

export default Experience;