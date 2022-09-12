import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import HighlightText from "../HighlightText";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Card from "../Card";
import { kelas } from "../../content/kelas";

function Section3() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Founder",
        "UI/UX Designer",
        "Data Scientist",
        "AI Specialist",
        "Backend Engineer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <Grid container my={6} spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" fontWeight={700}>
          <HighlightText width="-2%">Kamu Bisa</HighlightText> Menjadi{" "}
          <span ref={el} />
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" color={"sc_gray.dark"}>
          Pilih program yang sesuai dengan minatmu. Mulai tingkatkan skill-mu
          sebagai langkah awal <br /> berkarir di dunia digital.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Splide
          options={{
            perPage: 3,
            rewind: true,
            gap: 2,
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
          {kelas.map((item) => (
            <SplideSlide key={item.title}>
              <Card
                img={item.img}
                title={item.title}
                desc={item.desc}
                bulan={item.bulan}
                level={item.level}
                tanggal={item.Tanggal}
                online={item.online}
              />
            </SplideSlide>
          ))}
        </Splide>
      </Grid>
    </Grid>
  );
}

export default Section3;
