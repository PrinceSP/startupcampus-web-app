import React from "react";
import { Typography } from "@mui/material";

const MyTitle = ({ variant, children, ...args })=>{
  return (
    <Typography variant={variant ?? "h4"} fontWeight={700} {...args}>
      {children}
    </Typography>
  );
}

export default MyTitle
