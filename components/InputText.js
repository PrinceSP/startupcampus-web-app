import { Input } from "@mui/material";
import React from "react";

function InputText({ type, placeholder, name, ...args }) {
  return (
    <Input
      type={type ?? "text"}
      placeholder={placeholder ?? "alifnabila@gmail.com"}
      name={name ?? "email"}
      {...args}
      sx={{
        flexGrow: 2,
        width: "100%",
        border: "2px solid #BDBDBD",
        backgroundColor: "white",
        py: 1,
        px: 2,
        borderRadius: "5px",
        "&::before": {
          border: "unset !important",
        },
        "&::after": {
          border: "unset !important",
        },
      }}
    />
  );
}

export default InputText;
