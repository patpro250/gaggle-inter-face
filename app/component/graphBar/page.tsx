import { ApexOptions } from "apexcharts"; // ✅ Import the type
import Chart from "react-apexcharts";

const Graph = () => {
  const options: ApexOptions = {
    chart: {
      type: "bar", // ✅ Must match the allowed values
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        // ❌ `borderRadiusApplication` is not part of the ApexCharts types.
        // Either remove it or cast the option as `any`, OR use native styles.
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
      ],
    },
  };

  const series = [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ];

  return (
    <div className="">
      <div className="bg-green-0 min-w-md rounded-md px-10 border-1 border-gray-200 p-3">
        <div>
          <h1 className="font-medium uppercase font-sans text-gray-700 text-medium bg-amber-0 py-2 flex flex-col gap-4">
            Book Type
          </h1>
        </div>
        <div className="border-1 border-gray-200 p-4 rounded-md">
          <Chart options={options} series={series} type="bar" />
        </div>
      </div>
    </div>
  );
};

export default Graph;
