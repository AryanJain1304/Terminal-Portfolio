import About from "./commands/About";
import Clear from "./commands/Clear";
import Echo from "./commands/Echo";
import Education from "./commands/Education";
import Email from "./commands/Email";
import GeneralOutput from "./commands/GeneralOutput";
import Gui from "./commands/Gui";
import Help from "./commands/Help";
import Welcome from "./commands/Welcome";
import History from "./commands/History";
import Projects from "./commands/Projects";
import Socials from "./commands/Socials";
import Themes from "./commands/Themes";
import Skills from "./commands/Skills";
import Experience from "./commands/Experience";
import Resume from "./commands/Resume";
import Courses from "./commands/Courses";
import { OutputContainer, UsageDiv } from "./styles/Output.styled";
import { termContext } from "./Terminal";
import { useContext } from "react";

type Props = {
  index: number;
  cmd: string;
};

const Output: React.FC<Props> = ({ index, cmd }) => {
  const { arg } = useContext(termContext);

  const specialCmds = ["projects", "socials", "themes", "echo"];

  // return 'Usage: <cmd>' if command arg is not valid
  // eg: about tt
  if (!specialCmds.includes(cmd) && arg.length > 0)
    return <UsageDiv data-testid="usage-output">Usage: {cmd}</UsageDiv>;

  return (
    <OutputContainer data-testid={index === 0 ? "latest-output" : null}>
      {
        {
          about: <About />,
          clear: <Clear />,
          echo: <Echo />,
          edu: <Education />,
          email: <Email />,
          gui: <Gui />,
          help: <Help />,
          hist: <History />,
          proj: <Projects />,
          course: <Courses />,
          pwd: <GeneralOutput>/home/aryanjain</GeneralOutput>,
          "@": <Socials />,
          themes: <Themes />,
          banner: <Welcome />,
          whoami: <p style={{ marginTop: "3px", marginBottom: "9px"}}>I am here, but not to stay; the world is not mine, only borrowed for a time—who am I?<br/><i>- A visitor</i></p>,
          skills: <Skills />,
          exp: <Experience />,
          res: <Resume />
        }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;