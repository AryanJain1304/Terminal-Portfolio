import {
  Cmd,
  HeroContainer,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`  
███████ ██████╗ ██╗   ██╗ █████╗ ███╗  ██╗       ██╗ █████╗ ██╗███╗  ██╗  
██╔══██╗██╔══██╗╚██╗ ██╔╝██╔══██╗████╗ ██║       ██║██╔══██╗██║████╗ ██║  
███████║██████╔╝ ╚████╔╝ ███████║██╔██╗██║       ██║███████║██║██╔██╗██║  
██╔══██║██╔══██╗  ╚██╔╝  ██╔══██║██║╚████║  ██╗  ██║██╔══██║██║██║╚████║  
██║  ██║██║  ██║   ██║   ██║  ██║██║ ╚███║  ╚█████╔╝██║  ██║██║██║ ╚███║  
╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚══╝   ╚════╝ ╚═╝  ╚═╝╚═╝╚═╝  ╚══╝  
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
    
▄▀█ █▀█ █▄█ ▄▀█ █▄ █
█▀█ █▀▄  █  █▀█ █ ▀█
          
      █ ▄▀█ █ █▄ █
    █▄█ █▀█ █ █ ▀█
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Authenticating... Access granted to Aryan Jain's dev terminal.</div>
        <Seperator></Seperator>
        <div>Welcome to my terminal portfolio. (Version 1.0)</div>
        <Seperator></Seperator>
        <div>Explore my work, skills, and journey — one command at a time.</div>
        <Seperator></Seperator>
        <div>Execute <Cmd>&lt;help&gt;</Cmd> to scan for available commands.</div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                       ,##,,eew,
                     ,##############C
                  a###############@##
                 7####^\`^"7W7^"@####
                 @#@b\`         ^@#@^
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\`~~'.#\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^     \` 'b 3-
              .<\` 'p   ^v   #   b   *.
            {      }   #"GpGb   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
