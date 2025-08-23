import { useContext, useEffect } from "react";
import { ProjectsIntro } from "../styles/Projects.styled";
import { Cmd, CmdDesc, CmdList, HelpWrapper } from "../styles/Help.styled";
import {
  checkRedirect,
  generateTabs,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Socials: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command makes redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "socials")) {
      socials.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="socials" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <HelpWrapper data-testid="socials">
      <ProjectsIntro>Here are my contact details</ProjectsIntro>
      {socials.map(({ id, title, url, tab }) => {
        const href = title === "Email ID" ? `mailto:${url}` : url;
        return (
          <CmdList key={title}>
            <Cmd>{`${title}`}</Cmd>
            {generateTabs(tab)}
            <CmdDesc>
              -{" "}
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textDecoration = "underline";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textDecoration = "none";
                }}
              >
                {url}
              </a>
            </CmdDesc>
          </CmdList>
        );
      })}
    </HelpWrapper>
  );
};

const socials = [
  {
    id: 1,
    title: "Email ID",
    url: "aryan@aryanjain.net",
    tab: 5,
  },
  {
    id: 2,
    title: "GitHub",
    url: "https://github.com/AryanJain1304",
    tab: 7,
  },
  {
    id: 3,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/aryan-jain13/",
    tab: 5,
  }
];

export default Socials;
