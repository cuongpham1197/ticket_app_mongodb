import React from "react";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen max-h-screen">
      <Nav />
      <div className="flex-grow overflow-y-auto bg-page text-default-text">
        {children}
      </div>
    </div>
  );
};

export default Layout;
