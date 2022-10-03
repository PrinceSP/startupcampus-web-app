import { Stack } from "@mui/material";
import React from "react";
import MyInput from "./MyInput";
import MySelect from "./MySelect";

const media = [
  "Instagram",
  "Google Search",
  "Teman/Kerabat/Saudara",
  "LinkedIn",
  "Twitter",
];

export default function IndentityForm() {
  return (
    <Stack spacing={1}>
      <MyInput
        label="Nama Lengkap *"
        name={"name"}
        placeholder={"alifnabilaaa@gmail.com"}
      />
      <MyInput label="Umur *" name={"age"} />
      <MyInput label="No. Handphone *" name={"num_phone"} />
      <MySelect
        label={"Darimana Kamu Mengetahui Startup Campus?*"}
        data={media}
        name="source_info"
      />
      <MyInput label="Profil LinkedIn *" name={"linked_url"} />
      <MyInput
        label="Motivasi Kamu Mengikuti Startup Campus *"
        name={"motivasi"}
        rows={4}
        multiline
        type={"text-area"}
      />
    </Stack>
  );
}
