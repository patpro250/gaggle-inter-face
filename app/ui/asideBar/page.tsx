import React from "react";
import Header from "./header/page";
import Menu from "./menu/page";

const AsiderBar = () => {
  return (
    <div className="  drop-shadow-md grow-2 max-w-[15rem] min-h-screen  bg-sky-50">
      <Header />
      <Menu />
    </div>
  );
};

export default AsiderBar;
