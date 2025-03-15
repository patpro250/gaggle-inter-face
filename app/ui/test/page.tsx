import { Box } from "@radix-ui/themes";
import React from "react";

const Test = () => {
  return (
    <div>
      <Box asChild m="5">
        <p className="my-paragraph">My custom paragraph</p>
      </Box>
      ;
    </div>
  );
};

export default Test;
