"use client";

import { useTheme } from "next-themes";
import NitSkeleton from "../_components/Skeleton";

const Toggler = () => {
  return (
    <>
      <NitSkeleton count={5} />
    </>
  )
}

export default Toggler
