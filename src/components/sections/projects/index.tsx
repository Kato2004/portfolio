import { IProjectCard, ProjectCard } from "../../small/project-card";
import { Title } from "../../small/title";
import "./style.css";

interface IMyProjects {
  projects: IProjectCard[];
}

export const MyProjects = ({ projects }: IMyProjects) => {
  return (
    <section className="content">
      <Title>Meus projetos</Title>
      <div className="grid-projects">
        {projects.map(({ imgSrc, projectSrc, resume, tags, title }, index) => {
          return (
            <ProjectCard
              imgSrc={imgSrc}
              projectSrc={projectSrc}
              resume={resume}
              tags={tags}
              title={title}
              key={title}
            />
          );
        })}
      </div>
    </section>
  );
};
