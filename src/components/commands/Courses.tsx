import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";

const Courses: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  const currentCommand = getCurrentCmdArry(history);

  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "courses")) {
      courses.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && url && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  // Just render the courses list regardless of args
  return (
    <div data-testid="courses">
      <ProjectsIntro>
        Here are some courses and certifications I have completed:
      </ProjectsIntro>
      {courses.map(({ id, title, provider, date, url }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.textDecoration = "underline")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.textDecoration = "none")
                }
              >
                {`${id}. ${title}`}
              </a>
            ) : (
              `${id}. ${title}`
            )}
          </ProjectTitle>
          <ProjectDesc>
            {provider} | {date}
          </ProjectDesc>
        </ProjectContainer>
      ))}
    </div>
  );
};

const courses = [
  {
    id: 1,
    title: "The MCP Course - Fundamentals of MCP",
    provider: "Hugging Face",
    date: "Aug 2025",
    url: "",
  },
  {
    id: 2,
    title: "Hugging Face Agents: Fundamentals of Agents",
    provider: "Hugging Face",
    date: "Aug 2025",
    url: "",
  },
  {
    id: 3,
    title: "The LLM Course - Fundamentals of LLMs",
    provider: "Hugging Face",
    date: "Aug 2025",
    url: "",
  },
  {
    id: 4,
    title: "The LLM Course - Fine-tuning Language Models",
    provider: "Hugging Face",
    date: "Aug 2025",
    url: "",
  },
  {
    id: 5,
    title: "Vibe Coding 101 with Replit",
    provider: "Deeplearning.ai",
    date: "July 2025",
    url: "",
  },
  {
    id: 6,
    title: "How Transformer LLMs Work",
    provider: "Deeplearning.ai",
    date: "July 2025",
    url: "",
  },
];

export default Courses;