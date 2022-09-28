import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import WordBreak from "../WordBreak";
import { useEffect } from "react";

function Section2({ logo }) {
  return (
    <Grid container my={6} py={6} spacing={6}>
      <Grid item xs={12} md={12}>
        <Typography
          variant="h5"
          fontWeight={700}
          textAlign="center"
          data-aos="fade-up"
        >
          Alumni Startup Campus telah bekerja di:
        </Typography>
      </Grid>
      <Grid item container xs={12} md={12} justifyContent="center">
        {logo
          ?.slice(0)
          .reverse()
          .map((value, idx) => (
            <Grid
              key={idx}
              item
              xs={6}
              md={3}
              display="flex"
              justifyContent="center"
              data-aos="fade-up"
            >
              <Box sx={{ widht: "100px", height: "100px" }}>
                <Image
                  src={`https:${value.fields.logo.fields.file.url}`}
                  // value.fields.logo.fields.file.details.image.width
                  width={value.fields.logo.fields.file.details.image.width ?? 2}
                  height={
                    value.fields.logo.fields.file.details.image.height ?? 2
                  }
                  placeholder="blur"
                  blurDataURL={`https:${value.fields.logo.fields.file.url}`}
                />
              </Box>
            </Grid>
          ))}
        <Grid item xs={12} md={3} data-aos="fade-up">
          <Typography variant="body2" color={"sc_gray.dark"} textAlign="center">
            dan banyak lagi
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Section2;
