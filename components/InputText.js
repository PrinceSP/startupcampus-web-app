import { Input } from "@mui/material";
import React from "react";

function InputText({ type, placeholder, name, ...props }) {
  return (
    <>
      <Input
        type={type ?? "email"}
        placeholder={placeholder ?? "alifnabila@gmail.com"}
        name={name ?? "email"}
        {...props}
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
    </>
  );
}

export default InputText;
