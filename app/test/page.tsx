"use client";

import { useTheme } from "next-themes";

const Toggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <p className="text-lg text-black">Current theme is {theme}</p>
      <button onClick={() => setTheme('light')} className="m-8 rounded-lg py-4 px-8 bg-black text-white flex items-center justify-center">Toggle</button>
    </>
  )
}

export default Toggler
