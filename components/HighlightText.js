import { Typography } from "@mui/material";
import React from "react";

function HighlightText({ children, width = "-5%"}) {
  return (
    <Typography
      display="inline"
      fontWeight={800}
      sx={{
        position: "relative",
        color: "sc_blue.main",
        "&::before": {
          zIndex: "-1",
          content: "''",
          position: "absolute",
          top: 0,
          bottom: 0,
          right: width,
          left: width,
          backgroundColor: "rgba(0, 86, 210, 0.15)",
        },
      }}
      variant="h3"
    >
      {children}
    </Typography>
  );
}

export default HighlightText;
