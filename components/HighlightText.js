import React from "react";
import { Box, Typography } from "@mui/material";

const HighlightText = ({ children, width = "-5%", variant,...rest })=>{
  return (
    <Box
      component={"span"}
      sx={{
        fontWeight: 800,
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
        ...rest
      }}
    >
      {children}
    </Box>
  );
}

export default HighlightText;
