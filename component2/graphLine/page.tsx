import { ApexOptions } from "apexcharts"; // Import the type for options
import Chart from "react-apexcharts";

const LineChartComponent = () => {
  // Configure the chart options
  const options: ApexOptions = {
    series: [
      {
        name: "Sales",
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
      },
    ],
    chart: {
      height: 350,
      type: "line", // Line chart type
    },
    forecastDataPoints: {
      count: 7,
    },
    stroke: {
      width: 5,
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "1/11/2000",
        "2/11/2000",
        "3/11/2000",
        "4/11/2000",
        "5/11/2000",
        "6/11/2000",
        "7/11/2000",
        "8/11/2000",
        "9/11/2000",
        "10/11/2000",
        "11/11/2000",
        "12/11/2000",
        "1/11/2001",
        "2/11/2001",
        "3/11/2001",
        "4/11/2001",
        "5/11/2001",
        "6/11/2001",
      ],
      tickAmount: 10,
      labels: {
        formatter: function (value, timestamp, opts) {
          return opts.dateFormatter(new Date(timestamp), "dd MMM"); // Formatting date
        },
      },
    },
    title: {
      align: "left",
      style: {
        fontSize: "16px",
        color: "#666",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: ["#FDD835"],
        shadeIntensity: 1,
        type: "horizontal",
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100],
      },
    },
  };
  return (
    <div className=" bg-green-0">
      <div className="bg-green-0 min-w-md  overflow-hidden rounded-md px-10 border-1 border-gray-200 p-3 ">
        <div>
          <h1 className="font-medium uppercase font-sans text-gray-700 text-medium bg-amber-0 py-2 flex flex-col gap-4">
            Trending Book
          </h1>
        </div>
        <div className="border-1 border-gray-200 p-4 rounded-md">
          <Chart options={options} series={options.series} type="line" />
        </div>
      </div>
    </div>
  );
};

export default LineChartComponent;
