import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import React, { Fragment } from "react";
import { useMyForm } from "../../context/FormContext";

export default function MyCheckBox({ name }) {
  const { register, handleSubmit, watch, errors } = useMyForm();
  return (
    <Fragment>
      <FormControl
        component={"fieldset"}
        required
        {...register(name, { required: "Kamu harus setuju untuk lanjut" })}
        error={errors[name] ? true : false}
      >
        <FormGroup>
          <FormControlLabel
            sx={{ alignItems: "start !important" }}
            control={
              <Checkbox name={name} checked={watch(name)} sx={{ pt: 0 }} />
            }
            label="Dengan mengisi formulir ini, Saya menyetujui kebijakan privasi dan ketentuan pengguna"
          />
        </FormGroup>
        <FormHelperText>{errors[name]?.message ?? ""}</FormHelperText>
      </FormControl>
    </Fragment>
  );
}
