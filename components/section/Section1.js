import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import HighlightText from "../HighlightText";
import MyButton from "../MyButton";

function Section1() {
  return (
    <Grid
      pt={{ xs: 6, md: 0 }}
      container
      component="section"
      direction={{ xs: "column-reverse", sm: "column-reverse", md: "row" }}
      height={{ xs: "unset", md: "100vh" }}
      alignItems={{ md: "center" }}
    >
      <Grid item xs={12} md={6} pt={4} data-aos="fade-right">
        <Stack spacing={2} alignItems="start" className="hero-text">
          <Typography variant="h3" fontWeight={800}>
            Ambil{" "}
            <Box component="span" sx={{ color: "sc_blue.main" }}>
              Langkah Perubahan!
            </Box>
          </Typography>
          <Typography variant="body1" lineHeight={2}>
            Raih karier impianmu dengan belajar bersama Startup Campus. Siapapun
            kamu, semua bisa{" "}
            <Box
              component="span"
              sx={{ color: "sc_blue.main", fontWeight: 700 }}
            >
              #JadiMahirDigital
            </Box>
          </Typography>
          <MyButton>Pilih Programmu</MyButton>
        </Stack>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          position: "relative",
          transform: { xs: "scale(1)", md: "scale(1.2)" },
        }}
        data-aos="zoom-in-up"
      >
        <Box
          sx={{
            position: "relative",
            "&::before": {
              content: "''",
              top: "-10%",
              position: "absolute",
              backgroundImage: "url('/images/Circle.png')",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "100%",
              height: "100%",
            },
            "&::after": {
              zIndex: -2,
              content: "''",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "100%",
              position: "absolute",
              background:
                "linear-gradient(134.87deg, #98B2F5 0%, #2257E0 85.4%, #003F9A 85.4%)",
              opacity: 0.2,
              filter: "blur(100px)",
              width: "600px",
              height: "600px",
            },
          }}
          mt={6}
        >
          <Image
            src={"/images/people.png"}
            width={791}
            height={527}
            placeholder="blur"
            blurDataURL="/images/people.png"
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Section1;
