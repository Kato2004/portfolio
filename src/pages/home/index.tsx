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
import "./style.css";

export const Content = () => {
  return (
    <main>
      <Container>
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
          imgGithubURL="https://github-readme-stats.vercel.app/api/top-langs/?username=Kato2004&layout=compact&bg_color=fff&text_color=000&title_color=000&icon_color=000&hide_border=000)](https://github.com/Kato2004/github-readme-stats"
        />
        <MyProjects
          projects={[
            {
              imgSrc: "",
              projectSrc: "",
              resume: "A simple project with React and Typescript ",
              tags: ["React", "Typescript"],
              title: "A simple project A",
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
