import { Button } from "@mui/material";
import React from "react";

function MyButton({
  children,
  variant = "contained",
  color = "sc_blue",
  padding,
  shadow,
  isDropdown,
  ...args
}) {
  return (
    <Button
      variant={variant}
      color={color}
      sx={{
        padding: padding ?? "13px 28px",
        borderRadius: "5px",
        textTransform: "capitalize",
        boxShadow: shadow ?? "0px 16px 40px rgba(112, 144, 176, 0.2)",
        "&:hover": {
          backgroundColor: isDropdown ? "unset" : null,
        },
      }}
      {...args}
    >
      {children}
    </Button>
  );
}

export default MyButton;
