import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import MyButton from "../MyButton";
import WordBreak from "../WordBreak";

export default function Main() {
  return (
    <Stack
      height={"100vh"}
      justifyContent={"center"}
      spacing={3}
      zIndex={2}
      position="relative"
    >
      <Typography color="white">#SiapMahirDigital, Siap Jadi</Typography>
      <Typography color="white" fontWeight={700} variant="h3">
        The Founder
      </Typography>
      <Typography color="white">
        Ciptakan startup yang unik, bernilai, dan profesional melalui{" "}
        <WordBreak />
        program Founder. Pelajari cara membangun startup dari awal <WordBreak />
        hingga menjadi MVP (Minimum Viable Product)
      </Typography>
      <Stack direction="row" spacing={2}>
        <Link href="/daftar" underline="none">
          <MyButton>Daftar Sekarang</MyButton>
        </Link>
        <MyButton variant="outlined" color="sc_white">
          Lihat Detail
        </MyButton>
      </Stack>
    </Stack>
  );
}
