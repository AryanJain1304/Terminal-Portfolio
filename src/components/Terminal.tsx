import React, {
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import _ from "lodash";
import Output from "./Output";
import TermInfo from "./TermInfo";
import {
  CmdNotFound,
  Empty,
  Form,
  Hints,
  Input,
  MobileBr,
  MobileSpan,
  Wrapper,
  Cursor,
} from "./styles/Terminal.styled";
import { Cmd } from "./styles/Welcome.styled";
import { argTab } from "../utils/funcs";

type Command = {
  cmd: string;
  desc: string;
  tab: number;
}[];

export const commands: Command = [
  { cmd: "about", desc: "Learn more about me", tab: 8 },
  { cmd: "banner", desc: "Display the banner", tab: 7 },
  { cmd: "edu", desc: "My education background", tab: 10 },
  { cmd: "exp", desc: "View my work experience", tab: 10 },
  { cmd: "skills", desc: "Checkout my technical skills", tab: 7 },
  { cmd: "proj", desc: "A glimpse into my work", tab: 9 },
  { cmd: "course", desc: "View the courses and certifications I have done", tab: 7 },
  { cmd: "gui", desc: "Visit my GUI portfolio", tab: 10 },
  { cmd: "res", desc: "Download my resume as PDF", tab: 10 },
  { cmd: "@", desc: "You can find me here!", tab: 12 },
  { cmd: "themes", desc: "Check available themes", tab: 7 },
  { cmd: "help", desc: "Check available commands", tab: 9 },
  { cmd: "hist", desc: "View command history", tab: 9 },
  { cmd: "echo", desc: "Print out anything", tab: 9 },
  { cmd: "pwd", desc: "Print current working directory", tab: 10 },
  { cmd: "clear", desc: "Clear the terminal", tab: 8 },
  //{ cmd: "email", desc: "send an email to me", tab: 8 },
  { cmd: "whoami", desc: "A truly perplexing question", tab: 7 },
];

type Term = {
  arg: string[];
  history: string[];
  rerender: boolean;
  index: number;
  clearHistory?: () => void;
};

export const termContext = createContext<Term>({
  arg: [],
  history: [],
  rerender: false,
  index: 0,
});

const Terminal = () => {
  const containerRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [inputVal, setInputVal] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>(["banner"]);
  const [rerender, setRerender] = useState(false);
  const [hints, setHints] = useState<string[]>([]);
  const [pointer, setPointer] = useState(-1);
  const [cursorPos, setCursorPos] = useState(0);

  // Input change
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
    setCursorPos(e.target.selectionStart || e.target.value.length);
  }, []);

  // Submit command
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCmdHistory([inputVal, ...cmdHistory]);
    setInputVal("");
    setCursorPos(0);
    setRerender(true);
    setHints([]);
    setPointer(-1);
  };

  const clearHistory = () => {
    setCmdHistory([]);
    setHints([]);
  };

  // Focus input on click
  const handleDivClick = () => {
    inputRef.current?.focus();
  };
  useEffect(() => {
    document.addEventListener("click", handleDivClick);
    return () => document.removeEventListener("click", handleDivClick);
  }, []);

  // Key handling
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setRerender(false);
    const ctrlI = e.ctrlKey && e.key.toLowerCase() === "i";
    const ctrlL = e.ctrlKey && e.key.toLowerCase() === "l";

    // Tab / Ctrl + I for autocomplete
    if (e.key === "Tab" || ctrlI) {
      e.preventDefault();
      if (!inputVal) return;

      let hintsCmds: string[] = [];
      commands.forEach(({ cmd }) => {
        if (_.startsWith(cmd, inputVal)) hintsCmds.push(cmd);
      });

      const returnedHints = argTab(inputVal, setInputVal, setHints, hintsCmds);
      hintsCmds = returnedHints ? [...hintsCmds, ...returnedHints] : hintsCmds;

      if (hintsCmds.length > 1) setHints(hintsCmds);
      else if (hintsCmds.length === 1) {
        const currentCmd = _.split(inputVal, " ");
        setInputVal(
          currentCmd.length !== 1
            ? `${currentCmd[0]} ${currentCmd[1]} ${hintsCmds[0]}`
            : hintsCmds[0]
        );
        setHints([]);
        setCursorPos((currentCmd.length !== 1 ? `${currentCmd[0]} ${currentCmd[1]} `.length : 0) + hintsCmds[0].length);
      }
      return;
    }

    // Ctrl + L to clear
    if (ctrlL) {
      e.preventDefault();
      clearHistory();
      return;
    }

    // Arrow Up / Down for history
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (pointer + 1 < cmdHistory.length) {
        setPointer(prev => prev + 1);
        const val = cmdHistory[pointer + 1];
        setInputVal(val);
        setCursorPos(val.length);
      }
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (pointer > 0) {
        setPointer(prev => prev - 1);
        const val = cmdHistory[pointer - 1];
        setInputVal(val);
        setCursorPos(val.length);
      } else {
        setPointer(-1);
        setInputVal("");
        setCursorPos(0);
      }
      return;
    }

    // Arrow Left / Right for cursor movement
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setCursorPos(prev => Math.max(prev - 1, 0));
      return;
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setCursorPos(prev => Math.min(prev + 1, inputVal.length));
      return;
    }
  };

  // Keep hidden input focused and selection at cursorPos
  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
        inputRef.current.setSelectionRange(cursorPos, cursorPos);
      }
    }, 1);
    return () => clearTimeout(timer);
  }, [cursorPos, inputVal]);

  return (
    <Wrapper data-testid="terminal-wrapper" ref={containerRef}>
      {hints.length > 1 && (
        <div>
          {hints.map(hCmd => (
            <Hints key={hCmd}>{hCmd}</Hints>
          ))}
        </div>
      )}

      <Form onSubmit={handleSubmit}>
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <TermInfo /> <MobileBr />
          <MobileSpan>&#62;</MobileSpan>

          <div
            style={{
              display: "inline-flex",
              position: "relative",
              flexGrow: 1,
              fontFamily: "monospace",
              fontSize: "1rem",
              minHeight: "1.2em",
            }}
            onClick={() => inputRef.current?.focus()}
          >
            {/* Hidden input for real typing */}
            <Input
              title="terminal-input"
              ref={inputRef}
              value={inputVal}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              spellCheck={false}
              autoFocus
              style={{
                position: "absolute",
                opacity: 0,
                width: "100%",
                left: 0,
              }}
            />

            {/* Text before cursor */}
            <span>{inputVal.slice(0, cursorPos)}</span>

            {/* Block cursor */}
            <Cursor>█</Cursor>

            {/* Text after cursor */}
            <span>{inputVal.slice(cursorPos)}</span>
          </div>
        </div>
      </Form>

      {cmdHistory.map((cmdH, index) => {
        const commandArray = _.split(_.trim(cmdH), " ");
        const validCommand = _.find(commands, { cmd: commandArray[0] });
        const contextValue = {
          arg: _.drop(commandArray),
          history: cmdHistory,
          rerender,
          index,
          clearHistory,
        };
        return (
          <div key={_.uniqueId(`${cmdH}_`)}>
            {(() => {
              const isSeedWelcome =
                cmdH === "banner" && index === cmdHistory.length - 1;
              return isSeedWelcome ? null : (
                <div>
                  <TermInfo />
                  <MobileBr />
                  <MobileSpan>&#62;</MobileSpan>
                  <span data-testid="input-command">{cmdH}</span>
                </div>
              );
            })()}
            {validCommand ? (
              <termContext.Provider value={contextValue}>
                <Output index={index} cmd={commandArray[0]} />
              </termContext.Provider>
            ) : cmdH === "" ? (
              <Empty />
            ) : (
              <CmdNotFound data-testid={`not-found-${index}`}>
                <span style={{ color: "red" }}>{cmdH}</span>: command not found: Type <Cmd>&lt;help&gt;</Cmd> to view the list of available command.
              </CmdNotFound>
            )}
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Terminal;