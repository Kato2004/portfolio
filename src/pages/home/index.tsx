import { Container } from "../../components/container";
import { Profile } from "../../components/sections/profile/index";
import { Skills } from "../../components/sections/skills";
import { Curriculum } from "../../components/sections/curriculum";
import { MyProjects } from "../../components/sections/projects";
import { Footer } from "../../components/footer";
import {
  SiHtml5 as HTLMIcon,
  SiCss3 as CSSIcon,
  SiJavascript as JSIcon,
  SiSass as SassIcon,
  SiBootstrap as BootstrapIcon,
  SiReact as ReactIcon,
  SiGit as GitIcon,
} from "react-icons/si";
import { FaRegMoon as MoonIcon } from "react-icons/fa";
import { useState, useEffect } from "react";
import { changeThemes, darkTheme, lightTheme } from "../../styles/change-theme";
import "./style.css";
import imgProjectGame from "../../assets/jogo-da-velha-print.jpg";

export type ChangeTheme = boolean;

export const Content = () => {
  const [themeDark, setThemeDark] = useState<ChangeTheme>(false);

  useEffect(() => {
    const colorMatch = window.matchMedia("(prefers-color-scheme: dark)");
    if (colorMatch.matches) {
      darkTheme();
      setThemeDark(true);
    }
    if (!colorMatch.matches) {
      lightTheme();
      setThemeDark(false);
    }
  }, []);

  const lightCard =
    "https://github-readme-stats.vercel.app/api/top-langs/?username=Kato2004&layout=compact&locale=pt-br&bg_color=fff&text_color=000&title_color=000&icon_color=000&hide_border=true&show_icons=true)](https://github.com/Kato2004/github-readme-stats";
  const darkCard =
    "https://github-readme-stats.vercel.app/api/top-langs/?username=Kato2004&layout=compact&locale=pt-br&bg_color=333&text_color=dedcdc&title_color=dedcdc&icon_color=dedcdc&hide_border=true&show_icons=true)](https://github.com/Kato2004/github-readme-stats";

  return (
    <main>
      <Container>
        <button
          className="btn-theme"
          onClick={() =>
            changeThemes({ theme: themeDark, setTheme: setThemeDark })
          }
        >
          <MoonIcon />
        </button>
        <Profile />
        <Skills
          skills={[
            { techIcon: <HTLMIcon />, techName: "HTML" },
            { techIcon: <CSSIcon />, techName: "CSS" },
            { techIcon: <JSIcon />, techName: "JavaScript" },
            { techIcon: <SassIcon />, techName: "Sass" },
            { techIcon: <BootstrapIcon />, techName: "Bootstrap" },
            { techIcon: <ReactIcon />, techName: "React" },
            { techIcon: <GitIcon />, techName: "Git" },
          ]}
        />
        <Curriculum
          curriculumURL="/"
          //Theme claro
          imgGithubURL={themeDark ? darkCard : lightCard}
        />
        <MyProjects
          projects={[
            {
              imgSrc: imgProjectGame,
              projectSrc: "https://jogo-da-velha-six-psi.vercel.app/",
              resume:
                "Projeto simples feito somente com HTML, CSS e Javascript do tão famoso e conhecido jogo da velha",
              tags: ["Javascript", "CSS"],
              title: "Jogo da velha",
            },
            {
              imgSrc: "",
              projectSrc: "",
              resume: "A simple project with React and Typescript ",
              tags: ["React", "Typescript"],
              title: "A simple project B",
            },
            {
              imgSrc: "",
              projectSrc: "",
              resume: "A simple project with React and Typescript ",
              tags: ["React", "Typescript"],
              title: "A simple project C",
            },
            {
              imgSrc: "",
              projectSrc: "",
              resume: "A simple project with React and Typescript ",
              tags: ["React", "Typescript"],
              title: "A simple project D",
            },
          ]}
        />
        <Footer />
      </Container>
    </main>
  );
};
