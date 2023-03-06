export interface IProjectCard {
  imgSrc: string;
  title: string;
  resume: string;
  tags: string[];
  projectSrc: string;
}
import "./style.css";

export const ProjectCard = ({
  imgSrc,
  title,
  resume,
  tags,
  projectSrc,
}: IProjectCard) => {
  return (
    <article className="project-card">
      <img src={imgSrc} alt="printscreen do projeto" />
      <div>
        <h5>{title}</h5>
        <p>{resume}</p>
        <div className="tags-container">
          {tags.map((tag) => {
            return <span key={tag}>{tag}</span>;
          })}
        </div>
        <a href={projectSrc} target="_blank">
          Veja mais
        </a>
      </div>
    </article>
  );
};
