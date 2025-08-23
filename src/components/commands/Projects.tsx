import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't miss
      </ProjectsIntro>
      {projects.map(({ id, title, desc, url }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>
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
          </ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Hybrid Intrusion Detection System for Cloud Environment",
    desc: "A hybrid IDS for cloud networks trained on CSE-CIC-IDS2018, combining deep learning (SAE, CNN, LSTM) with ML classifiers (RF, XGBoost, Logistic Regression).",
    url: "https://github.com/AryanJain1304/Hybrid-ML-DL-Intrusion-Detection-System"
  },
  {
    id: 2,
    title: "Benchmarking Regression Models for Forecasting Gold ETF Prices",
    desc: "Comparison of performance of multiple regression models for gold etf price prediction; Extra Trees achieved best results with R² = 0.99 and MSE = 3.43.",
    url: "https://github.com/AryanJain1304/Benchmarking-Regression-Models-for-Gold-Prices-Forecasting"
  },
  {
    id: 3,
    title: "SeoInspect",
    desc: "A web app for SEO analysis using Replit that scrapes website metadata, evaluates SEO factors, and generates reports with scores, recommendations, and previews for search engines and social media.",
    url: "http://replit.com/@aryanjain221/SeoInspect",
  },
  {
    id: 4,
    title: "ParkRank",
    desc: "A National Parks ranking app where users vote on park matchups. Rankings are determined using the ELO algorithm, with features for voting, viewing standings, and tracking recent activity.",
    url: "http://replit.com/@aryanjain221/ParkRank",
  },
  {
    id: 5,
    title: "Modular Steganography System",
    desc: "A simple steganography web application to hide confidential data using Least Significant Bit technique",
    url: "https://github.com/AryanJain1304/Modular-Steganography-System",
  },
];

export default Projects;
