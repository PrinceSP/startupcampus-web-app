import React, { Fragment } from "react";
import { Stack, TextField, Typography } from "@mui/material";
import { useMyForm } from "../../context/FormContext";

const MyInput = ({ label, name, type, placeholder, ...args }) => {
  const { register, handleSubmit, watch, errors } = useMyForm();
  const textArea =
    type == "text-area"
      ? {
          maxLength: {
            value: 150,
            message: "Maksimal hanya 150 karakter",
          },
        }
      : null;

  return (
    <Stack>
      <Typography gutterBottom fontWeight={700}>
        {label}
      </Typography>
      <TextField
        {...register(name, {
          required: `Mohon di isi ya`,
          pattern: {
            value:
              type == "email"
                ? /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                : type == "number"
                ? /[0-9]/
                : null,
            message:
              type == "email"
                ? "Email tidak valid"
                : type == "number"
                ? "Input berupa angka"
                : "",
          },
          ...textArea,
        })}
        placeholder={placeholder ?? ""}
        error={errors[name] ? true : false}
        helperText={errors[name]?.message ?? null}
        {...args}
      />
    </Stack>
  );
};

export default MyInput;
