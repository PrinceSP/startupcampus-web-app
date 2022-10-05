import React from "react";
import { Stack } from "@mui/material";
import MyInput from "./MyInput";
import MySelect from "./MySelect";

const media = [
  "Instagram",
  "Google Search",
  "Teman/Kerabat/Saudara",
  "LinkedIn",
  "Twitter",
];

const IndentityForm = () => {
  return (
    <Stack spacing={1}>
      <MyInput
        label="Nama Lengkap *"
        name={"name"}
        placeholder={"alif nabila"}
      />
      <MyInput label="Umur *" name={"age"} placeholder={"18"} />
      <MyInput
        label="No. Handphone *"
        name={"num_phone"}
        placeholder={"628XXXX"}
      />
      <MySelect
        label={"Darimana Kamu Mengetahui Startup Campus?*"}
        data={media}
        name="source_info"
      />
      <MyInput
        label="Profil LinkedIn *"
        name={"linked_url"}
        placeholder={"https://www.linkedin.com/in/alifnabilana/"}
      />
      <MyInput
        label="Motivasi Kamu Mengikuti Startup Campus *"
        name={"motivasi"}
        rows={4}
        multiline
        type={"text-area"}
        placeholder={
          "Ceritakan kenapa kamu tertarik mengikuti bootcamp di Startup Campus"
        }
      />
    </Stack>
  );
};

export default IndentityForm;
