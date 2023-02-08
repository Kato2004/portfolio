import { ContactLinks } from "../small/contact-links/index";
import { AiFillHeart } from "react-icons/ai";
import "./style.css";

export const Footer = () => {
  return (
    <footer>
      <span>
        Desenvolvido com{" "}
        <b>
          <AiFillHeart />
        </b>{" "}
        por <b className="footer-name">Kauã Alves</b>
      </span>
      <ContactLinks />
    </footer>
  );
};
