import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { createClient } from "contentful";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { TaglineContext } from "../pages/_app";

const Footer = ()=>{
  const { tagline } = useContext(TaglineContext);
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
        <Grid item my={2} container xs={12} spacing={6}>
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
                {tagline[0]?.fields?.hashtag}
              </Typography>
              <Typography variant="body2" color="white">
                {tagline[0]?.fields?.desc}
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
                  FAQ&apos;s
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
                <Typography variant="body2" color="white" wrap>
                  {"startupcampus@ zakyfoundation.org ".toLocaleLowerCase()}
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
          <Typography textAlign={"center"} variant="subtitle2" color="white">
            ©Startup Campus. All right reserverd, 2022.
          </Typography>
        </Grid>
      </Container>
    </Grid>
  );
}

export default Footer;
