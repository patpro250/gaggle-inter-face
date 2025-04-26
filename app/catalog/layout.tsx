import type { Metadata } from "next";
import { APP_NAME } from "../constants";

export const metadata: Metadata = {
  title: `${APP_NAME} Catalog`,
  description: "Find your favourite book from our vast catalog.",
  openGraph: {
    title: "Catalog",
    description: "Find your favourite book from our vast catalog.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
