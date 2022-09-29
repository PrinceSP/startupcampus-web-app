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
  TextField,
  Typography,
} from "@mui/material";
import Head from "next/head";
import React, { Fragment } from "react";
import MultiStep from "../components/MultiStep";
import MyButton from "../components/MyButton";
import WordBreak from "../components/WordBreak";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InputText from "../components/InputText";
import { createClient } from "contentful";
import { useForm } from "react-hook-form";
import { kelas } from "../content/kelas";

const helper = [
  "Hanya memerlukan 5 menit untuk mengisi formulir",
  "Akan dihubungi oleh tim",
  "Pembayaran dapat dilakukan H+2 setelah mengisi formulir pendaftaran",
];

const styleInput = {
  flexGrow: 2,
  width: "100%",
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
};

function Daftar({ paket }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(JSON.stringify(data));
  // console.log(errors);
  return (
    <Fragment>
      <Head>
        <title>Daftar | Startup Campus</title>
      </Head>
      <Box
        sx={{
          background:
            "linear-gradient(180deg, rgba(173, 232, 244, 0.1) 0%, rgba(173, 232, 244, 0) 100%)",
        }}
      >
        <Container>
          <Grid mt={15} py={10} justifyContent="center" container>
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
                <Stack
                  spacing={3}
                  component="form"
                  alignItems={"start"}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <Typography variant="h5" fontWeight={700}>
                    Daftarkan dirimu sekarang, mulailah dengan <WordBreak />
                    beberapa langkah mudah.
                  </Typography>
                  <Typography variant="body2" color={"sc_gray.dark"}>
                    Setelah mendaftar, tim kami akan segera menghubungi kamu
                    untuk menjadwalkan wawancara ±30 menit terkait dengan
                    pendaftaranmu.
                  </Typography>

                  {/* EMAIL INPUT */}
                  <Stack
                    component="label"
                    spacing={1}
                    direction="column"
                    sx={{ width: "100%" }}
                  >
                    <Typography fontWeight={700}>Email *</Typography>
                    <Input
                      {...register("email", {
                        required: "Isi email kamu ya",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Email tidak valid",
                        },
                      })}
                      placeholder={"alifnabila@gmail.com"}
                      sx={styleInput}
                    />
                    {errors.email && (
                      <Typography variant="subtitle2" color={"red"}>
                        {errors.email?.message}
                      </Typography>
                    )}
                  </Stack>

                  {/* TRACK INPUT */}
                  <FormControl>
                    <Typography fontWeight={700}>
                      Apa yang ingin kamu pelajari? *
                    </Typography>
                    <RadioGroup defaultValue="The Founder" name="track">
                      {kelas.map((val, idx) => (
                        <FormControlLabel
                          key={idx}
                          value={val.title}
                          control={<Radio />}
                          label={val.title}
                          {...register("track", {
                            required: "Pilih program apa yang ingin kamu ikuti",
                          })}
                        />
                      ))}
                    </RadioGroup>
                    {errors.track && (
                      <Typography variant="subtitle2" color={"red"}>
                        {errors.track?.message}
                      </Typography>
                    )}
                  </FormControl>

                  {/* PAKET KELAS INPUT */}
                  <FormGroup width="100%">
                    <Typography fontWeight={700} gutterBottom>
                      Kelas Terdekat *
                    </Typography>
                    <Grid container spacing={1}>
                      {paket
                        ?.slice(0)
                        .reverse()
                        .map((val, i) => (
                          <Grid
                            key={i}
                            item
                            xs={12}
                            md={6}
                            sx={{ cursor: "pointer" }}
                          >
                            <Stack
                              component="label"
                              width="100%"
                              p={3}
                              xs={12}
                              md={5}
                              position="relative"
                              borderRadius={"10px"}
                              border={"2px solid #bdbd"}
                            >
                              <Input
                                {...register("paket", {
                                  required: "Pilih kelas mana ya",
                                })}
                                type="radio"
                                value={val.fields.namaPaket}
                                sx={{ position: "absolute", opacity: 0 }}
                              />
                              <Stack
                                direction="row"
                                alignItems={"center"}
                                justifyContent={"space-between"}
                              >
                                <Typography fontWeight={700}>
                                  {val.fields.namaPaket}
                                </Typography>
                                <Typography
                                  fontWeight={700}
                                  color="white"
                                  p={1}
                                  borderRadius={"10px"}
                                  backgroundColor={"#0056D2"}
                                >
                                  {val.fields.isOnline}
                                </Typography>
                              </Stack>

                              <Stack spacing={1} alignItems="start">
                                <Typography
                                  variant="body2"
                                  color={"sc_gray.dark"}
                                >
                                  {val.fields.bahasa}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color={"sc_gray.dark"}
                                >
                                  {val.fields.tanggal}
                                </Typography>
                                <Stack direction="row" spacing={1}>
                                  <Typography
                                    variant="body2"
                                    color={"sc_gray.dark"}
                                    sx={{
                                      textDecoration: "line-through",
                                    }}
                                  >
                                    {val.fields.hargaNormal}
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    color={"sc_gray.dark"}
                                  >
                                    {val.fields.hargaDiskon}
                                  </Typography>
                                </Stack>
                                <Typography
                                  variant="body2"
                                  color={"sc_blue.main"}
                                >
                                  {val.fields.waktu}
                                </Typography>
                              </Stack>
                            </Stack>
                          </Grid>
                        ))}
                    </Grid>
                    {errors.paket && (
                      <Typography variant="subtitle2" color={"red"}>
                        {errors.paket?.message}
                      </Typography>
                    )}
                  </FormGroup>

                  {/* TOR */}
                  <FormGroup>
                    <FormControlLabel
                      {...register("tor", {
                        required: "Kamu harus setuju dahulu ya",
                      })}
                      control={<Checkbox />}
                      value={true}
                      label={
                        <Typography variant="body2" color="sc_gray.dark">
                          Dengan mengisi formulir ini, saya menyetujui Kebijakan
                          Privasi dan ketentuan pengguna
                        </Typography>
                      }
                    />
                    {errors.tor && (
                      <Typography variant="subtitle2" color={"red"}>
                        {errors.tor?.message}
                      </Typography>
                    )}
                  </FormGroup>

                  <MyButton type="submit">Mulai Pendaftaran</MyButton>
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
    </Fragment>
  );
}

export default Daftar;

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const { items: paket } = await client.getEntries({
    content_type: "paketKelas",
  });

  return {
    props: {
      paket,
    },
    revalidate: 1,
  };
}
