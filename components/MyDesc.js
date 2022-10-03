import { Typography } from "@mui/material";
import React from "react";

export default function MyDesc({ children, ...args }) {
  return (
    <Typography variant="body2" color={"sc_gray.dark"} {...args}>
      {children}
    </Typography>
  );
}
