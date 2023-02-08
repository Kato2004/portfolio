import { ISkill, TechnologiesBox } from "../../small/technologies-box";
import "./style.css";
import { Title } from "../../small/title";

interface ISkills {
  skills: ISkill[];
}

export const Skills = ({ skills }: ISkills) => {
  return (
    <section className="skills content">
      <Title>Skills</Title>
      <div>
        {skills.map(({ techIcon, techName }) => {
          return (
            <TechnologiesBox
              techIcon={techIcon}
              techName={techName}
              key={techName}
            />
          );
        })}
      </div>
    </section>
  );
};
