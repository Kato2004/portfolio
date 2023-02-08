import {
  TbFileDownload as FileDownloadIcon,
  TbUser as ProfileIcon,
} from "react-icons/tb";
import "./style.css";
import { Title } from "../../small/title";

interface ICurriculum {
  curriculumURL: string;
  imgGithubURL: string;
}

export const Curriculum = ({ curriculumURL, imgGithubURL }: ICurriculum) => {
  return (
    <section className="curriculum content">
      <Title>Currículo</Title>
      <div className="curriculum-info">
        <a href={curriculumURL}>
          <FileDownloadIcon />
          Download Currículo
        </a>
        <a href="">
          <ProfileIcon />
          Teste Comportamental
        </a>
      </div>
      <br />
      <div>
        <img src={imgGithubURL} />
      </div>
    </section>
  );
};
