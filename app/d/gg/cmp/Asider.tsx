import React from "react";
import LinkAsider from "./linkAsider";
import { DollarSign, DollarSignIcon, House } from "lucide-react";

const Asider = () => {
  return (
    <div>
      <aside className="bg-gray-50 dark:bg-gray-800 w-64 min-h-screen px-4 py-6 shadow">
        <h2 className="text-xl font-bold mb-8">Gaggle Admin</h2>
        <nav className="space-y-4">
          <LinkAsider
            title={"Home"}
            href={"./../../../d/gg/"}
            Icon={House}
            Path={""}
          />

          <LinkAsider
            title={"Payment"}
            href={"./../../../d/gg/payment"}
            Icon={DollarSign}
            Path={""}
          />
        </nav>
      </aside>
    </div>
  );
};

export default Asider;
