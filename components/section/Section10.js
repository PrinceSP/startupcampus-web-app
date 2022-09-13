import { Box, FormControl, Grid, Input, Typography } from "@mui/material";
import React, { useEffect } from "react";
import WordBreak from "../WordBreak";
import AOS from "aos";
import "aos/dist/aos.css";

function Section10() {
  useEffect(() => {
    AOS.init();
  }, []);
  const handleSubscribe = (e) => {
    e.preventDefault();
  };
  return (
    <Grid container sx={{ backgroundColor: "sc_blue.main" }} mt={6}>
      <Grid
        item
        xs={12}
        mt={4}
        py={9}
        display="flex"
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Typography
          textAlign={"center"}
          variant="h4"
          fontWeight={700}
          color={"sc_white.main"}
          gutterBottom
        >
          Bergabung dengan Newsletter Kami
        </Typography>
        <Typography
          textAlign={"center"}
          variant="body1"
          color={"sc_white.main"}
        >
          Tetap terhubung dengan Startup Campus untuk mendapatkan penawaran dan{" "}
          <WordBreak />
          informasi terkini seputar dunia digital
        </Typography>
        <Box
          mt={4}
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubscribe}
          sx={{
            display: "flex",
            width: "60vw",
          }}
        >
          <Input
            type="email"
            placeholder="Masukkan email kamu disini"
            name="email"
            sx={{
              flexGrow: 2,
              backgroundColor: "white",
              py: 1,
              px: 2,
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
              "&::before": {
                border: "unset !important",
              },
              "&::after": {
                border: "unset !important",
              },
            }}
          />
          <Input
            type="submit"
            value="Kirim"
            sx={{
              flexGrow: 1,
              cursor: "pointer",
              backgroundColor: "sc_yellow.main",
              py: 1,
              px: 2,
              fontWeight: 700,
              color: "white",
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px",
              "&::before": {
                border: "unset !important",
              },
              "&::after": {
                border: "unset !important",
              },
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Section10;
