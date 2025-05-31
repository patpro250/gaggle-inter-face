"use server";
import { getApiClient } from "@/app/g/schools/axios";

export const fetchStartsData = async () => {
  console.log("Fetching stars data...");
  const api = await getApiClient();
  const response = await api.get(`analytics/institution/account`);
  return response.data;
};

export const fetchStatsUpData = async () => {
  console.log("Fetching stars data...");
  const api = await getApiClient();
  const response = await api.get(`analytics/institution/dashboard`);
  return response.data;
};
export const GetMonthlyBooksLineChart = async () => {
  console.log("Fetching stars data...");
  const api = await getApiClient();
  const response = await api.get(`analytics/performance/institution`);
  return response.data;
};

export const GetGenreCopiesChartCard = async () => {
  console.log("Fetching stars data...");
  const api = await getApiClient();
  const response = await api.get(`analytics/genres`);
  return response.data;
};
