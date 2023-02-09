import { ChangeTheme } from "../pages/home/index";

interface IChangeThemeProps {
  theme: ChangeTheme;
  setTheme: React.Dispatch<React.SetStateAction<ChangeTheme>>;
}

export const lightTheme = () => {
  document.body.style.setProperty("--primary-color", "#000");
  document.body.style.setProperty("--secondary-color", "#fff");
  document.body.style.setProperty("--tertiary-color", "#318ce7");
  document.body.style.setProperty("--quaternary-color", "#bceeff");
  document.body.style.setProperty("--brightness-hover", "brightness(70%)");
};

export const darkTheme = () => {
  document.body.style.setProperty("--primary-color", "#dedcdc");
  document.body.style.setProperty("--secondary-color", "#222");
  document.body.style.setProperty("--tertiary-color", "#318ce7");
  document.body.style.setProperty("--quaternary-color", "#003785");
  document.body.style.setProperty("--brightness-hover", "brightness(70%)");
};

export const changeThemes = ({ theme, setTheme }: IChangeThemeProps) => {
  if (theme) {
    lightTheme();
    setTheme(false);
    localStorage.setItem("theme", theme ? "light" : "dark");
  }
  if (!theme) {
    darkTheme();
    setTheme(true);
    localStorage.setItem("theme", theme ? "light" : "dark");
  }
};
