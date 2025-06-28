import ThemeToggle from "./themetoggle";

export default function DashboardHeader() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <ThemeToggle />
    </div>
  );
}
