import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { count } from "../../content/count";
import HighlightText from "../HighlightText";
import WordBreak from "../WordBreak";

function Section4() {
  return (
    <Grid container my={6} py={4} spacing={3}>
      <Grid item xs={12} data-aos="fade-right">
        <Typography variant="h4" fontWeight={700}>
          <HighlightText width="-2%">Kamu Bisa</HighlightText> Menjadi Ahli Dari
          Mana Saja
        </Typography>
      </Grid>
      <Grid item xs={12} data-aos="fade-right">
        <Typography variant="body2" color={"sc_gray.dark"}>
          Startup Campus, sebuah bootcamp online dengan kurikulum terkini dan
          terlengkap berbasis industri
        </Typography>
      </Grid>
      <Grid item mt={5} container xs={12} spacing={6}>
        <Grid item xs={12} md={8} data-aos="fade-up">
          <Box overflow={"hidden"} borderRadius={"20px"}>
            <Image src={"/images/meeting.png"} width={854} height={524} />
          </Box>
        </Grid>
        <Grid item container xs={12} md={4} spacing={6}>
          {count.map((e) => (
            <Grid item xs={6} md={12} key={e.desc} data-aos="fade-left">
              <Stack spacing={1} alignItems="center">
                <Typography
                  textAlign={"center"}
                  variant="h4"
                  fontWeight={700}
                  color="sc_blue.main"
                >
                  {e.sum}
                </Typography>
                <Typography
                  textAlign={"center"}
                  variant="body2"
                  color={"sc_gray.dark"}
                >
                  {e.desc}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Section4;
