import { ReactNode } from "react";
import "./style.css";

interface IContainer {
  classProps?: string;
  children: ReactNode;
}

export const Container = ({ children, classProps }: IContainer) => {
  return <section className={`${classProps}`}>{children}</section>;
};
