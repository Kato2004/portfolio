import "./style.css";

export interface ISkill {
  techIcon: JSX.Element;
  techName: string;
}

export const TechnologiesBox = ({ techIcon, techName }: ISkill) => {
  return (
    <article className="tech-box">
      <span>{techIcon}</span>
      <span>{techName}</span>
    </article>
  );
};
