import React from "react";
import {
  Smile,
  ArrowDownWideNarrow,
  ChevronsDown,
  Captions,
} from "lucide-react";
import ListComponent from "./listcompnent/page";
import ListGroup from "./ListGroup/page";

const AsiderPageAdmin = () => {
  return (
    <aside className="w-28 h-[100vh] overflow-y-scroll md:w-64 shadow-xl md:shadow-0 pb-30 pt-2 border-r  border-gray-200 scrollbar-custom ">
      <div className="py-5 px-3  scrollbar-custom">
        <ListGroup />
        {/* <ListGroup /> */}
      </div>
    </aside>
  );
};

export default AsiderPageAdmin;
