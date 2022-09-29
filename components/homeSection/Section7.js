import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import React, { useEffect } from "react";
import { kelas } from "../../content/kelas";
import { testi2 } from "../../content/testi2";
import Card from "../Card";
import HighlightText from "../HighlightText";
import WordBreak from "../WordBreak";

function Section7({ testimoni }) {
  return (
    <Grid container my={9} pt={4}>
      <Grid item xs={12} data-aos="fade-right">
        <Typography variant="h4" fontWeight={700}>
          Dan Inilah Tanggapan Mereka yang <WordBreak />{" "}
          <HighlightText>Puas</HighlightText> dengan Startup Campus
        </Typography>
      </Grid>
      <Grid item xs={12} py={2} data-aos="fade-left">
        <Splide
          options={{
            perPage: 2,
            rewind: true,
            gap: 4,
            breakpoints: {
              1000: {
                perPage: 2,
              },
              640: {
                perPage: 1,
                gap: 2,
              },
            },
          }}
          aria-label="Starup-Class"
        >
          {testimoni?.map((item, id) => (
            <SplideSlide key={id}>
              <Stack
                my={4}
                mx={1}
                spacing={3}
                p={4}
                sx={{
                  background: "#FFFFFF",
                  boxShadow: "0px 8px 20px rgba(43, 44, 39, 0.1)",
                  borderRadius: "20px",
                }}
              >
                <Typography variant="h6" color="sc_blue.main" fontWeight={700}>
                  {item.fields.title}
                </Typography>
                <Typography variant="body1" color="sc_gray.dark">
                  {item.fields.description}
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar
                    alt={item.fields.namaTestimoni}
                    src={`https:${item.fields.logo?.fields.file.url}`}
                  />
                  <Stack>
                    <Typography
                      variant="h6"
                      color="sc_blue.main"
                      fontWeight={700}
                    >
                      {item.fields.namaTestimoni}
                    </Typography>
                    <Typography variant="body2" color="sc_gray.dark">
                      {item.fields.pekerjaan}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </SplideSlide>
          ))}
        </Splide>
      </Grid>
    </Grid>
  );
}

export default Section7;
