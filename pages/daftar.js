import { Label } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Input,
  InputLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import Head from "next/head";
import React from "react";
import MultiStep from "../components/MultiStep";
import MyButton from "../components/MyButton";
import WordBreak from "../components/WordBreak";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const helper = [
  "Hanya memerlukan 5 menit untuk mengisi formulir",
  "Akan dihubungi oleh tim",
  "Pembayaran dapat dilakukan H+2 setelah mengisi formulir pendaftaran",
];

function Daftar() {
  return (
    <>
      <Head>
        <title>Daftar</title>
      </Head>
      <Box
        sx={{
          background:
            "linear-gradient(180deg, rgba(173, 232, 244, 0.1) 0%, rgba(173, 232, 244, 0) 100%)",
        }}
      >
        <Container>
          <Grid
            // minHeight={"100vh"}
            mt={15}
            py={10}
            justifyContent="center"
            container
          >
            <Grid item xs={8} mb={6}>
              <MultiStep />
            </Grid>
            <Grid
              item
              container
              xs={12}
              sx={{
                background: "#FFFFFF",
                border: "2px solid #BDBDBD",
                boxShadow: "0px 16px 40px rgba(112, 144, 176, 0.2)",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <Grid item md={8} py={8} px={4}>
                <Stack spacing={3} component="form" alignItems={"start"}>
                  <Typography variant="h5" fontWeight={700}>
                    Daftarkan dirimu sekarang, mulailah dengan <WordBreak />
                    beberapa langkah mudah.
                  </Typography>
                  <Typography variant="body2" color={"sc_gray.dark"}>
                    Setelah mendaftar, tim kami akan segera menghubungi kamu
                    untuk menjadwalkan wawancara ±30 menit terkait dengan
                    pendaftaranmu.
                  </Typography>
                  <FormControl>
                    <Typography fontWeight={700} gutterBottom>
                      Email *
                    </Typography>
                    <Input
                      type="email"
                      aria-describedby="my-helper-email"
                      placeholder="alifnabila@gmail.com"
                      name="email"
                      sx={{
                        flexGrow: 2,
                        border: "2px solid #BDBDBD",
                        backgroundColor: "white",
                        py: 1,
                        px: 2,
                        borderRadius: "5px",
                        "&::before": {
                          border: "unset !important",
                        },
                        "&::after": {
                          border: "unset !important",
                        },
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <Typography fontWeight={700} gutterBottom>
                      Apa yang ingin kamu pelajari? *
                    </Typography>
                    <FormControl>
                      {/* <FormLabel id="demo-radio-buttons-group-label">
                        Gender
                      </FormLabel> */}
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="the founder"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="the founder"
                          control={<Radio />}
                          label="The Founder"
                        />
                        <FormControlLabel
                          value="ui/ux design"
                          control={<Radio />}
                          label="UI/UX Design"
                        />
                        <FormControlLabel
                          value="data science"
                          control={<Radio />}
                          label="Data Science"
                        />
                        <FormControlLabel
                          value="artificial intelligence"
                          control={<Radio />}
                          label="Artificial Intelligence"
                        />
                        <FormControlLabel
                          value="backend engineer"
                          control={<Radio />}
                          label="Backend Engineer"
                        />
                      </RadioGroup>
                    </FormControl>
                  </FormControl>

                  <FormControl>
                    <Typography fontWeight={700} gutterBottom>
                      Kelas Terdekat *
                    </Typography>
                    <Grid container gap={3}>
                      {Array(3)
                        .fill(null)
                        .map((i) => (
                          <Grid
                            item
                            key={i}
                            p={3}
                            xs={12}
                            md={5}
                            borderRadius={"10px"}
                            border={"2px solid #bdbd"}
                          >
                            <Stack
                              direction="row"
                              alignItems={"center"}
                              justifyContent={"space-between"}
                            >
                              <Typography fontWeight={700}>
                                Studi Independen
                              </Typography>
                              <Typography
                                fontWeight={700}
                                color="white"
                                p={1}
                                borderRadius={"10px"}
                                backgroundColor={"#0056D2"}
                              >
                                Online
                              </Typography>
                            </Stack>
                            <Stack spacing={1} alignItems="start">
                              <Typography
                                variant="body2"
                                color={"sc_gray.dark"}
                              >
                                Bahasa Indonesia
                              </Typography>
                              <Typography
                                variant="body2"
                                color={"sc_gray.dark"}
                              >
                                Tanggal
                              </Typography>
                              <Stack direction="row" spacing={1}>
                                <Typography
                                  variant="body2"
                                  color={"sc_gray.dark"}
                                  sx={{
                                    textDecoration: "line-through",
                                  }}
                                >
                                  Rp7.998.050
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color={"sc_gray.dark"}
                                >
                                  Rp0
                                </Typography>
                              </Stack>
                              <Typography
                                variant="body2"
                                color={"sc_blue.main"}
                              >
                                (GMT+07:00) Jakarta
                              </Typography>
                            </Stack>
                          </Grid>
                        ))}
                    </Grid>
                  </FormControl>

                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label={
                        <Typography variant="body2" color="sc_gray.dark">
                          Dengan mengisi formulir ini, saya menyetujui Kebijakan
                          Privasi dan ketentuan pengguna
                        </Typography>
                      }
                    />
                  </FormGroup>

                  <MyButton>Mulai Pendaftaran</MyButton>
                </Stack>
              </Grid>
              <Grid item md={4} sx={{ background: "#0056D2" }} p={4}>
                <Stack spacing={2}>
                  {helper.map((value, i) => (
                    <Stack direction="row" key={i} spacing={1}>
                      <Box
                        sx={{
                          backgroundColor: "white",
                          height: "20px",
                          width: "20px",
                          borderRadius: "100%",
                          alignSelf: "start",
                          position: "relative",
                        }}
                      >
                        <CheckCircleIcon
                          sx={{
                            color: "#003B8F",
                            position: "relative",
                            top: 0,
                            left: 0,
                          }}
                        />
                      </Box>
                      <Typography color={"white"}>{value}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Daftar;
