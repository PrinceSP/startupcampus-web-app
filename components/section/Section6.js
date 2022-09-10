import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { testimoni } from "../../content/testimoni";
import HighlightText from "../HighlightText";
import Image from "next/image";
import MyButton from "../MyButton";

export default function Section6() {
  return (
    <Grid container my={4} spacing={4} justifyContent="center">
      <Grid item>
        <Typography variant="h3" fontWeight={700}>
          Cerita <HighlightText width="-2%">Sukses</HighlightText> Alumni
          Startup Campus
        </Typography>
      </Grid>
      <Grid item container xs={12} spacing={3}>
        {testimoni.map((item) => (
          <Grid item md={4}>
            <Box width="100%" borderRadius={"20px"} overflow="hidden">
              <Box
                width="100%"
                height={209}
                borderRadius={"20px"}
                overflow="hidden"
                position={"relative"}
                sx={{
                  transform: "scale(1)",
                  "&:before": {
                    content: "''",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                  },
                }}
              ></Box>
              <Stack py={3} spacing={1}>
                <Typography variant="h6" fontWeight={600}>
                  {item.name}
                </Typography>
                <Typography variant="subtitle1" color="sc_gray.main">
                  {item.role}
                </Typography>
                <Typography variant="body1">{item.story}</Typography>
              </Stack>
            </Box>
          </Grid>
        ))}
        <Grid item sx={{ display: "flex", justifyContent: "center" }} xs={12}>
          <MyButton>
            <Typography fontWeight={700}>Baca Cerita Lainnya</Typography>
          </MyButton>
        </Grid>
      </Grid>
    </Grid>
  );
}
