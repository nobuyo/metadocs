import type { NextPage } from "next";

import Nav from "./nav";

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default Layout;
