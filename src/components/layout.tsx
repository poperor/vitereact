import React from "react";
import reactLogo from "../assets/react.svg";
import { Link } from "react-router-dom";

type Props = {
  children?: React.ReactNode;
};
export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <h1>Vitereact testapp</h1>
      <div>
        <Link to="/">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </Link>
        <Link to="/">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Link>
      </div>
      <main>{children}</main>
    </>
  );
};

export default Layout;
