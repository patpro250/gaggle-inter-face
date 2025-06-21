import {
  BadgeDollarSign,
  ChartNetwork,
  FolderKanban,
  House,
  Kanban,
  Landmark,
} from "lucide-react";
import LinkAsider from "./linkAsider";

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
            title={"Overview"}
            href={"./../../../d/gg/overview"}
            Icon={Kanban}
            Path={""}
          />

          <LinkAsider
            title={"Payment"}
            href={"./../../../d/gg/payment"}
            Icon={BadgeDollarSign}
            Path={""}
          />

          <LinkAsider
            title={"Plan Manager"}
            href={"./../../../d/gg/plans"}
            Icon={FolderKanban}
            Path={""}
          />
          <LinkAsider
            title={"institution Manager"}
            href={"./../../../d/gg/institutionManagement"}
            Icon={Landmark}
            Path={""}
          />
          <LinkAsider
            title={"Analytics"}
            href={"./../../../d/gg/analytics"}
            Icon={ChartNetwork}
            Path={""}
          />
        </nav>
      </aside>
    </div>
  );
};

export default Asider;
