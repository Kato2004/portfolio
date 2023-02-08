import {
  AiOutlineGithub as GithubIcon,
  AiOutlineLinkedin as LinkedinIcon,
  AiOutlineMail as EmailIcon,
} from "react-icons/ai";
import "./style.css";

export const ContactLinks = () => {
  return (
    <div className="profile-links">
      <a href="https://github.com/Kato2004" target="_blank">
        <GithubIcon />
      </a>
      <a href="https://www.linkedin.com/in/kaua-alves/" target="_blank">
        <LinkedinIcon />
      </a>
      <a href="mailto:kauaalvesnascimento22@gmail.com" target="_blank">
        <EmailIcon />
      </a>
    </div>
  );
};
