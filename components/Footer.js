import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <Grid
      container
      py={4}
      sx={{
        backgroundColor: "sc_blue.main",
      }}
    >
      <Container>
        <Divider color="white" />
        <Grid item my={6} container xs={12} spacing={6}>
          <Grid item xs={6} md={3}>
            <Stack spacing={4} my={4}>
              <Box>
                <Image
                  src={"/images/Startup Campus White Logo.png"}
                  width={110}
                  height={36}
                />
              </Box>
              <Typography variant="body2" color="white">
                #EducationToTheNextLevel
              </Typography>
              <Typography variant="body2" color="white">
                Digital Skill dari Zero to Hero hanya dalam waktu 5 Bulan
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <Stack spacing={4} my={4}>
              <Typography
                variant="h6"
                fontWeight={700}
                color="white"
                sx={{ opacity: 0.5 }}
              >
                Site Map
              </Typography>
              <Stack spacing={1}>
                <Typography variant="body2" color="white">
                  Program
                </Typography>
                <Typography variant="body2" color="white">
                  Blog
                </Typography>
                <Typography variant="body2" color="white">
                  Tentang Kami
                </Typography>
                <Typography variant="body2" color="white">
                  FAQ's
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <Stack spacing={4} my={4}>
              <Typography
                variant="h6"
                fontWeight={700}
                color="white"
                sx={{ opacity: 0.5 }}
              >
                Kontak
              </Typography>
              <Stack spacing={1}>
                <Typography variant="body2" color="white">
                  +62-856-4327-8256
                </Typography>
                <Typography variant="body2" color="white">
                  startupcampus@zakyfoundation.org
                </Typography>
                <Typography variant="body2" color="white">
                  Pejaten Barat, Jakarta Selatan, DKI Jakarta
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <Stack spacing={4} my={4}>
              <Typography
                variant="h6"
                fontWeight={700}
                color="white"
                sx={{ opacity: 0.5 }}
              >
                Ikuti Kami
              </Typography>
              <Stack spacing={1}>
                <Typography variant="body2" color="white">
                  Instagram
                </Typography>
                <Typography variant="body2" color="white">
                  LinkedIn
                </Typography>
                <Typography variant="body2" color="white">
                  Facebook
                </Typography>
                <Typography variant="body2" color="white">
                  Tiktok
                </Typography>
                <Typography variant="body2" color="white">
                  Youtube
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        <Divider color="white" />
        <Grid item xs={12} pt={4}>
          <Typography textAlign={"center"} variant="body1" color="white">
            ©Startup Campus. All right reserverd, 2022.
          </Typography>
        </Grid>
      </Container>
    </Grid>
  );
}

export default Footer;
