import { Typography } from "@mui/material";
import React from "react";

export default function MyTitle({ variant, children, ...args }) {
  return (
    <Typography variant={variant ?? "h4"} fontWeight={700} {...args}>
      {children}
    </Typography>
  );
}
