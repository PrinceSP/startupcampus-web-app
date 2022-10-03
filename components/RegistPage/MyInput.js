import { Stack, TextField, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { useMyForm } from "../../context/FormContext";

export default function MyInput({ label, name, type, placeholder, ...args }) {
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
          required: `Isi ${name} kamu ya`,
          pattern: {
            value:
              type == "email"
                ? /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                : null,
            message: "Email tidak valid",
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
}
