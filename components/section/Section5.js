import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { benefit } from "../../content/benefit";
import HighlightText from "../HighlightText";

function Section5() {
  return (
    <Grid container my={6} spacing={3} alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h3" fontWeight={700}>
          Kenapa <HighlightText>Harus</HighlightText> Startup Campus ?
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">
          Selama bootcamp ±5bulan intensif di Startup Campus, pelajari
          keterampilan yang paling dibutuhkan saat ini untuk bekerja di dunia
          digital dengan dukungan expert yang bepengalaman dan kurikulum yang up
          to date
        </Typography>
      </Grid>
      <Grid item container md={7} spacing={4}>
        {benefit.map((item) => (
          <Grid item md={6} key={item.title}>
            <Stack spacing={3} justifyContent="center">
              <Avatar />
              <Typography variant="h5" fontWeight={700} color="sc_blue.main">
                {item.title}
              </Typography>
              <Typography variant="body1">{item.desc}</Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Grid item md={5}>
        <Box borderRadius={"20px"} overflow="hidden">
          <Image src={"/images/pexels.png"} width={598} height={898} />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Section5;
