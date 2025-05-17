"use client";
import { useTheme } from "next-themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const NitSkeleton = (props) => {
  const { theme, resolvedTheme } = useTheme();
  const isDarkMode = (theme === "dark" || resolvedTheme === "dark");

  const baseColor = isDarkMode ? "#2D3748" : "#4B5563";
  const highlightColor = isDarkMode ? "#6B7280" : "#F7FAFC";

  return <Skeleton {...props} baseColor={baseColor} highlightColor={highlightColor} />;
};

export default NitSkeleton;
