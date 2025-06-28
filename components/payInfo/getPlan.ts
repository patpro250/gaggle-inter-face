"use server";

export interface Plan {
  id: string;
  name: string;
  price: string;
  duration: number;
  features: string;
  status: "ACTIVE" | "INACTIVE";
  limitations: {
    maxLibraries: number;
    maxLibrarians: number;
  };
  discount: string;
  freeTrialDays: number;
  createdAt: string;
  updatedAt: string;
}

import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function GetPlan(id: string): Promise<Plan[]> {
  try {
    const res = await axios.get<Plan[]>(`${API_URL}/plans/${id}`);

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data);
    } else {
      console.error("Unexpected error:", error);
    }
    return [];
  }
}
