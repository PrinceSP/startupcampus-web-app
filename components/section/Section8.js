import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import HighlightText from "../HighlightText";
import MyButton from "../MyButton";
import WordBreak from "../WordBreak";

function Section8() {
  return (
    <Grid container my={6}>
      <Grid item xs={12} data-aos="fade-up">
        <Stack spacing={4} alignItems="center">
          <Box>
            <Typography
              variant="h4"
              gutterBottom
              textAlign="center"
              fontWeight={700}
            >
              <HighlightText>Ambil</HighlightText> Langkah Perubahanmu!
            </Typography>
            <Typography
              variant="body1"
              textAlign="center"
              color={"sc_gray.dark"}
            >
              Ambil langkah pertama dalam perjalananmu dengan mengikuti bootcamp{" "}
              <WordBreak />
              intensif yang kami tawarkan!
            </Typography>
          </Box>
          <MyButton>Daftar Sekarang</MyButton>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Section8;
