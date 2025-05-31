"use client";
import { useQuery } from "@tanstack/react-query";
import BarChart01 from "./barChart";
import LineChart from "./lineChart";
import MyPieChart from "./peirChart";
import DashboardStats from "./veiw";
import VeiwCard from "./veiw";
import { fetchStatsUpData } from "../../Account/getStartsData";
import GenreCopiesChartCard from "./lineChart";

const Analytics = () => {
  return (
    <div className=" pb-52 ">
      <DashboardStats />

      {/* <div className="border-0 border-gray-200 mt-10 mb-10 p-4 grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <div className=" border-1 border-gray-200  flex justify-center items-center rounded-2xl p-4 ">
          <MyPieChart />
        </div>
        <div className=" border-1 flex justify-center items-center border-gray-200 rounded-2xl p-4 ">
          <LineChart />
        </div>
      </div> */}

      <div className="border-0 border-gray-200 mt-10 mb-10 px-2  ">
        <div className="  ">
          <GenreCopiesChartCard />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
