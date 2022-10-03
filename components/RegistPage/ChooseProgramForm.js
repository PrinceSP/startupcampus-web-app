import { Stack } from "@mui/material";
import React, { Fragment } from "react";
import { kelas } from "../../content/kelas";
import { useMyForm } from "../../context/FormContext";
import MyCheckBox from "./MyCheckBox";
import MyInput from "./MyInput";
import MyKelas from "./MyKelas";
import MySelect from "./MySelect";

export default function ChooseProgramForm({ paket }) {
  const mkelas = kelas.map((items) => items.title);
  const { register, handleSubmit, watch, errors } = useMyForm();
  return (
    <Stack spacing={4}>
      <MyInput
        label="Email *"
        name="email"
        type={"email"}
        placeholder={"alifnabilaaa@gmail.com"}
      />
      <MySelect
        label="Apa yang Ingin Kamu Pelajari? *"
        name="track"
        data={mkelas}
        {...register("track", { required: "Pilih salah satu" })}
      />
      <MyKelas paket={paket} name="paket" />
      <MyCheckBox name="agree" />
    </Stack>
  );
}
