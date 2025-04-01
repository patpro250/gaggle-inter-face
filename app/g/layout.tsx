import { ThemeProvider } from "../_components/ThemesProvider";

export default function GLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
}
