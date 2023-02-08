import { useEffect, useState } from "react";
import "./style.css";
import { ContactLinks } from "../../small/contact-links/index";
import { fetchAPi } from "../../../core/config/api/github";

interface IData {
  avatar_url: string;
}

export const Profile = () => {
  const [apiImg, setApiImg] = useState<IData>();

  useEffect(() => {
    const getImg = async () => {
      const dataResponse: IData = await fetchAPi({
        url: "https://api.github.com/users/Kato2004",
      });
      setApiImg({ avatar_url: dataResponse.avatar_url });
    };
    getImg();
  }, []);

  return (
    <section className="profile">
      <div className="first-part">
        <img src={`${apiImg?.avatar_url}`} alt="" />
        <div>
          <span>Por onde me encontrar:</span>
          <ContactLinks />
        </div>
      </div>
      <div className="last-part">
        <header>
          <span>Olá sou</span>
          <h3>Kauã Alves</h3>
        </header>
        <div>
          <p>
            Futuro software-enginner, dependente e apaixonado por tecnologia no
            geral, porém, meu foco de carreira é o front-end com tecnologias
            como javascript, typescript, reac e css. Além disso sempre busco
            aprender cada vez mais.
          </p>
        </div>
      </div>
    </section>
  );
};
