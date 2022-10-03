import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";
import { useMyForm } from "../../context/FormContext";

export default function MySelect({ label, name, data, ...args }) {
  const { register, handleSubmit, watch, errors } = useMyForm();
  return (
    <Fragment>
      <FormControl error={errors[name] ? true : false}>
        <Typography gutterBottom fontWeight={700}>
          {label}
        </Typography>
        <RadioGroup defaultValue={watch(name)} name={name}>
          {data?.map((val, i) => (
            <FormControlLabel
              key={i}
              value={val}
              control={<Radio />}
              label={val}
              {...register(name, { required: "Pilih salah satu" })}
              {...args}
            />
          ))}
        </RadioGroup>
        <FormHelperText>{errors[name]?.message ?? ""}</FormHelperText>
      </FormControl>
    </Fragment>
  );
}
