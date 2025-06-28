"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { useMemo } from "react";
import {
  Users,
  Banknote,
  Activity,
  ShieldCheck,
  ArrowUp,
  ArrowDown,
  Star,
} from "lucide-react";

// Skeleton Loader
const Skeleton = ({ className }: { className?: string }) => (
  <div
    className={`animate-pulse rounded-md bg-gray-200 dark:bg-gray-700 ${className}`}
  />
);

// Card Wrapper
const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`rounded-xl border p-6 bg-white shadow dark:bg-gray-900 dark:border-gray-800 ${className}`}
  >
    {children}
  </div>
);

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function AnalyticsDashboard() {
  const isLoading = false;

  // Memoize the data object
  const data = useMemo(
    () => ({
      newSignups: 150,
      activeInstitutions: 85,
      totalRevenue: 24500,
      churnRate: 4.3,
      conversionRate: 32.5,
      signupTrend: [
        { month: "Jan", signups: 20, revenue: 3200 },
        { month: "Feb", signups: 30, revenue: 4800 },
        { month: "Mar", signups: 50, revenue: 7500 },
        { month: "Apr", signups: 25, revenue: 4000 },
        { month: "May", signups: 60, revenue: 9000 },
      ],
      planUsage: [
        { plan: "Free", count: 40 },
        { plan: "Standard", count: 30 },
        { plan: "Premium", count: 15 },
      ],
      topPerformers: [
        { name: "ABC University", revenue: 4200, growth: 12 },
        { name: "XYZ College", revenue: 3800, growth: 8 },
        { name: "Global Institute", revenue: 3500, growth: 5 },
      ],
      paymentTrends: [
        { week: "Week 1", amount: 5200 },
        { week: "Week 2", amount: 4800 },
        { week: "Week 3", amount: 6100 },
        { week: "Week 4", amount: 7300 },
      ],
    }),
    []
  );

  const stats = useMemo(
    () => [
      {
        title: "New Signups",
        value: data?.newSignups ?? 0,
        icon: <Users className="w-5 h-5 text-blue-600" />,
        trend: 12,
      },
      {
        title: "Active Institutions",
        value: data?.activeInstitutions ?? 0,
        icon: <ShieldCheck className="w-5 h-5 text-green-600" />,
        trend: 5,
      },
      {
        title: "Total Revenue",
        value: `$${(data?.totalRevenue ?? 0).toLocaleString()}`,
        icon: <Banknote className="w-5 h-5 text-purple-600" />,
        trend: 18,
      },
      {
        title: "Conversion Rate",
        value: `${data?.conversionRate ?? 0}%`,
        icon: <Activity className="w-5 h-5 text-yellow-600" />,
        trend: 2,
      },
    ],
    [data]
  );

  return (
    <div className="max-h-[500px] overflow-scroll">
      <div className="  overflow-auto bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300">
        <div className="p-6 space-y-6 max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">
              Institution Analytics Dashboard
            </h1>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Last updated: Today
            </div>
          </div>

          <p>Today&apos;s Stats</p>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {isLoading
              ? [...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="h-28 rounded-xl" />
                ))
              : stats.map((stat, i) => (
                  <Card key={i} className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                        {stat.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {stat.title}
                        </p>
                        <p className="text-2xl font-semibold mt-1">
                          {stat.value}
                        </p>
                        <div className="flex items-center mt-1 text-sm">
                          {stat.trend > 0 ? (
                            <ArrowUp className="w-4 h-4 text-green-500" />
                          ) : (
                            <ArrowDown className="w-4 h-4 text-red-500" />
                          )}
                          <span
                            className={`ml-1 ${stat.trend > 0 ? "text-green-500" : "text-red-500"}`}
                          >
                            {Math.abs(stat.trend)}%
                          </span>
                          <span className="text-gray-500 dark:text-gray-400 ml-1">
                            vs last month
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Growth Trend */}
            <Card>
              <h2 className="text-lg font-semibold mb-4">
                Institution Growth & Revenue
              </h2>
              {isLoading ? (
                <Skeleton className="h-64 w-full" />
              ) : (
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data.signupTrend}>
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="signups"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      name="Signups"
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="revenue"
                      stroke="#10b981"
                      strokeWidth={2}
                      name="Revenue ($)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </Card>

            {/* Plan Distribution */}
            <Card>
              <h2 className="text-lg font-semibold mb-4">
                Plan Usage Distribution
              </h2>
              {isLoading ? (
                <Skeleton className="h-64 w-full" />
              ) : (
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={data.planUsage}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="count"
                      nameKey="plan"
                      label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                      }
                    >
                      {data.planUsage.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              )}
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Payment Trends */}
            <Card>
              <h2 className="text-lg font-semibold mb-4">
                Weekly Payment Trends
              </h2>
              {isLoading ? (
                <Skeleton className="h-64 w-full" />
              ) : (
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={data.paymentTrends}>
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${value}`, "Amount"]} />
                    <Bar dataKey="amount" fill="#8884d8" name="Revenue ($)" />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </Card>

            {/* Top Performers */}
            <Card>
              <h2 className="text-lg font-semibold mb-4">
                Top Performing Institutions
              </h2>
              {isLoading ? (
                <Skeleton className="h-64 w-full" />
              ) : (
                <div className="space-y-4">
                  {data.topPerformers.map((institution, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 border-b dark:border-gray-800"
                    >
                      <div className="flex items-center">
                        <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-full mr-3">
                          <Star className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">{institution.name}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Revenue: ${institution.revenue.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`flex items-center ${institution.growth > 0 ? "text-green-500" : "text-red-500"}`}
                      >
                        {institution.growth > 0 ? (
                          <ArrowUp className="w-4 h-4" />
                        ) : (
                          <ArrowDown className="w-4 h-4" />
                        )}
                        <span className="ml-1">{institution.growth}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          </div>

          {/* Churn Rate */}
          {/* <Card>
            <h2 className="text-lg font-semibold mb-4">Churn Rate Analysis</h2>
            {isLoading ? (
              <Skeleton className="h-64 w-full" />
            ) : (
              <div className="flex items-center justify-between">
                <div className="text-4xl font-bold text-red-500">
                  {data.churnRate}%
                </div>
                <div className="w-3/4">
                  <ResponsiveContainer width="100%" height={100}>
                    <BarChart
                      data={[{ value: data.churnRate }]}
                      layout="vertical"
                    >
                      <XAxis type="number" domain={[0, 10]} hide />
                      <YAxis hide />
                      <Bar
                        dataKey="value"
                        fill="#ef4444"
                        radius={[0, 4, 4, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Current monthly churn rate compared to industry average of
                    6.2%
                  </p>
                </div>
              </div>
            )}
          </Card> */}

          {/* Churn Rate */}
          <Card>
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Churn Rate Analysis
            </h2>
            {isLoading ? (
              <Skeleton className="h-40 w-full" />
            ) : (
              <div className="space-y-4">
                <div className="flex items-end gap-6">
                  <div className="flex flex-col">
                    <span className="text-4xl font-bold text-red-600">
                      {data.churnRate}%
                    </span>
                    <span className="text-sm text-gray-500">Current Month</span>
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between text-sm text-gray-500 mb-1">
                      <span>0%</span>
                      <span>Industry Avg: 6.2%</span>
                      <span>10%</span>
                    </div>
                    <div className="relative h-4 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="absolute h-full bg-red-500 rounded-full"
                        style={{ width: `${data.churnRate * 10}%` }}
                      />
                      <div
                        className="absolute h-full border-r-2 border-gray-400"
                        style={{ left: "62%" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-500">Last Month</p>
                    <p className="text-lg font-semibold">3.8%</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-500">Quarterly Avg</p>
                    <p className="text-lg font-semibold">4.1%</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-500">YoY Change</p>
                    <p className="text-lg font-semibold flex items-center justify-center">
                      <ArrowUp className="w-4 h-4 text-red-500 mr-1" />
                      +0.5%
                    </p>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
