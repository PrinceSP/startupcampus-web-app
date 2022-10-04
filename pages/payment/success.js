import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MyButton from "../../components/MyButton";
import MyDesc from "../../components/MyDesc";
import WordBreak from "../../components/WordBreak";

export default function Success() {
  return (
    <Container>
      <Grid container mt={15}>
        <Grid item xs={12}>
          <Typography variant="h4" fontWeight={700} textAlign="center">
            Selamat kamu telah berhasil mendaftar
            <WordBreak /> di Startup Campus!{" "}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent={"center"}
          position="relative"
          minHeight={{ md: "50vh", sm: "50vh", xs: "50vh" }}
        >
          <Box
            position={"absolute"}
            top={{ md: "-50%", sm: "-50%", xs: "-30%" }}
          >
            <Image
              src={"/images/rocket.svg"}
              width={863 - 200}
              height={936 - 200}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={1} alignItems="center">
            <MyDesc textAlign="center">
              Kamu bisa bergabung dengan komunitas kami untuk mengetahui
              informasi lebih lengkap
              <WordBreak /> dengan klik tombol di bawah ini!
            </MyDesc>
            <Link href={"https://t.me/grupstartupcampus"}>
              <MyButton>Gabung dengan Komunitas</MyButton>
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
