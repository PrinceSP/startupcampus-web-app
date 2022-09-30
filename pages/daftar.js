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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Radio,
  RadioGroup,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import Head from "next/head";
import React, { Fragment, useEffect, useState } from "react";
import MultiStep from "../components/MultiStep";
import MyButton from "../components/MyButton";
import WordBreak from "../components/WordBreak";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { createClient } from "contentful";
import { useForm } from "react-hook-form";
import { kelas } from "../content/kelas";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import ImportContactsRoundedIcon from "@mui/icons-material/ImportContactsRounded";
import Image from "next/image";

const helper = [
  "Hanya memerlukan 5 menit untuk mengisi formulir",
  "Akan dihubungi oleh tim",
  "Pembayaran dapat dilakukan H+2 setelah mengisi formulir pendaftaran",
];

const media = [
  "Instagram",
  "Google Search",
  "Teman/Kerabat/Saudara",
  "LinkedIn",
  "Twitter",
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
    watch,
    formState: { errors },
  } = useForm();

  const [state, setState] = useState(0);
  useEffect(() => {}, [state, errors, watch]);

  const onSubmit = (data) => {
    setState((prev) => prev + 1);
    if (state > 0) {
      alert(JSON.stringify(data));
    }
  };

  const IdentitasDiri = () => (
    <Fragment>
      {/* NAMA INPUT */}
      <Stack
        component="label"
        spacing={1}
        direction="column"
        sx={{ width: "100%" }}
      >
        <Typography fontWeight={700}>Nama Lengkap *</Typography>
        <Input
          {...register("name", {
            required: "Isi nama kamu ya",
          })}
          placeholder={"alifnabila mursalin"}
          sx={styleInput}
        />
        {errors.name && (
          <Typography variant="subtitle2" color={"red"}>
            {errors.name?.message}
          </Typography>
        )}
      </Stack>

      {/* UMUR INPUT */}
      <Stack
        component="label"
        spacing={1}
        direction="column"
        sx={{ width: "100%" }}
      >
        <Typography fontWeight={700}>Umur *</Typography>
        <Input
          {...register("umur", {
            required: "Isi umur kamu ya",
          })}
          placeholder={"24"}
          sx={styleInput}
        />
        {errors.umur && (
          <Typography variant="subtitle2" color={"red"}>
            {errors.umur?.message}
          </Typography>
        )}
      </Stack>

      {/* NO HP INPUT */}
      <Stack
        component="label"
        spacing={1}
        direction="column"
        sx={{ width: "100%" }}
      >
        <Typography fontWeight={700}>No. Handphone *</Typography>
        <Input
          {...register("num_phone", {
            required: "Isi nomor hp kamu ya",
          })}
          placeholder={"+62 812 3456 7890"}
          sx={styleInput}
        />
        {errors.num_phone && (
          <Typography variant="subtitle2" color={"red"}>
            {errors.num_phone?.message}
          </Typography>
        )}
      </Stack>

      {/* SUMBER INFO INPUT */}
      <Stack
        component="label"
        spacing={1}
        direction="column"
        sx={{ width: "100%" }}
      >
        <FormControl>
          <Typography fontWeight={700}>
            Darimana Kamu mengetahui Startup Campus? *
          </Typography>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={watch("sumber_info")}
          >
            {media.map((val, idx) => (
              <FormControlLabel
                key={idx}
                value={val}
                control={<Radio />}
                label={val}
                {...register("sumber_info", {
                  required: "Pilih salah satu",
                })}
              />
            ))}
          </RadioGroup>
        </FormControl>
        {errors.sumber_info && (
          <Typography variant="subtitle2" color={"red"}>
            {errors.sumber_info?.message}
          </Typography>
        )}
      </Stack>

      {/* PROFIL LINKEDIN INPUT */}
      <Stack
        component="label"
        spacing={1}
        direction="column"
        sx={{ width: "100%" }}
      >
        <Typography fontWeight={700}>Profil LinkedIn *</Typography>
        <Input
          {...register("linkedin", {
            required: "Isi dahulu ya",
          })}
          placeholder={"https://www.linkedin.com/in/alifnabilana/"}
          sx={styleInput}
        />
        {errors.linkedin && (
          <Typography variant="subtitle2" color={"red"}>
            {errors.linkedin?.message}
          </Typography>
        )}
      </Stack>

      {/* Motivasi INPUT */}
      <Stack
        component="label"
        spacing={1}
        direction="column"
        sx={{ width: "100%" }}
      >
        <Typography fontWeight={700}>
          Motivasi kamu mengikut Startup Campus *
        </Typography>
        <Input
          {...register("motivasi", {
            required: "Isi dahulu ya",
            maxLength: {
              value: 150,
              message: "Maksimal hanya 150 karakter",
            },
          })}
          multiline
          rows={4}
          placeholder={
            "Ceritakan kenapa kamu tertarik mengikuti bootcamp di Startup Campus"
          }
          sx={styleInput}
        />
        {errors.motivasi && (
          <Typography variant="subtitle2" color={"red"}>
            {errors.motivasi?.message}
          </Typography>
        )}
      </Stack>

      {/* AGREEMENT INPUT */}
      <FormGroup>
        <FormControlLabel
          {...register("tor", {
            required: "Kamu harus setuju dahulu ya",
          })}
          control={<Checkbox />}
          label={
            <Typography variant="body2" color="sc_gray.dark">
              Dengan mengisi formulir ini, saya menyetujui Kebijakan Privasi dan
              ketentuan pengguna
            </Typography>
          }
        />
        {errors.tor && (
          <Typography variant="subtitle2" color={"red"}>
            {errors.tor?.message}
          </Typography>
        )}
      </FormGroup>
    </Fragment>
  );

  const PilihProgram = () => (
    <Fragment>
      {/* EMAIL INPUT */}
      <Stack spacing={1} direction="column" sx={{ width: "100%" }}>
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
        <RadioGroup defaultValue={"The Founder"} value={watch("track")}>
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
              <Grid key={i} item xs={12} md={6}>
                <Stack
                  component="label"
                  width="100%"
                  p={3}
                  xs={12}
                  md={5}
                  position="relative"
                  borderRadius={"10px"}
                  border={`2px solid ${
                    watch("paket") == val.fields.namaPaket ? "blue" : "#bdbd"
                  }`}
                  sx={{ cursor: "pointer !important" }}
                  // onClick={(e)=> alert(e.currentTarget.)}
                >
                  <Input
                    {...register("paket", {
                      required: "Pilih kelas dahulu ya",
                    })}
                    type="radio"
                    value={val.fields.namaPaket}
                    sx={{ position: "absolute", opacity: 0 }}
                  />
                  <Stack
                    direction="row"
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    mb={1}
                  >
                    <Typography fontWeight={700}>
                      {val.fields.namaPaket}
                    </Typography>
                    <Typography
                      fontWeight={700}
                      color="white"
                      px={1}
                      borderRadius={"10px"}
                      backgroundColor={"#0056D2"}
                    >
                      {val.fields.isOnline}
                    </Typography>
                  </Stack>

                  <Stack spacing={1} alignItems="start">
                    <Typography variant="body2" color={"sc_gray.dark"}>
                      {val.fields.bahasa}
                    </Typography>
                    <Typography variant="body2" color={"sc_gray.dark"}>
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
                      <Typography variant="body2" color={"sc_gray.dark"}>
                        {val.fields.hargaDiskon}
                      </Typography>
                    </Stack>
                    <Typography variant="body2" color={"sc_blue.main"}>
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
    </Fragment>
  );
  const step = [<PilihProgram />, <IdentitasDiri />];

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
              <MultiStep step={state} />
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

                  {state >= 0 && state < 2 && step[state]}

                  {/* SUBMIT BUTTON */}
                  <Stack
                    direction={"row"}
                    justifyContent={state == 0 ? "flex-end" : "space-between"}
                    width={"100%"}
                  >
                    {state > 0 && state <= step.length && (
                      <MyButton
                        variant="outlined"
                        onClick={() => setState((prev) => prev - 1)}
                      >
                        Kembali
                      </MyButton>
                    )}

                    <MyButton type="submit">
                      {state == 0 ? "Mulai Pendaftaran" : "Lanjut"}
                    </MyButton>
                  </Stack>
                </Stack>
              </Grid>

              <Grid item md={4} sx={{ background: "#0056D2" }} p={4}>
                {state > 0 && (
                  <Stack mb={9} spacing={2}>
                    <Typography color="sc_white.main" fontWeight={700}>
                      Kelas yang kamu ikuti
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      <ImportContactsRoundedIcon color="sc_white" />
                      <Typography color="sc_white.main">
                        {watch("track")}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                      <EventAvailableRoundedIcon color="sc_white" />
                      <Typography color="sc_white.main">
                        {watch("paket")}
                      </Typography>
                    </Stack>
                  </Stack>
                )}
                <List>
                  {helper.map((text, index) => (
                    <ListItem
                      key={index}
                      disablePadding
                      alignItems="flex-start"
                    >
                      <ListItemIcon sx={{ minWidth: "30px !important" }}>
                        <Image src={"/check.svg"} width={20} height={20} />
                      </ListItemIcon>
                      <ListItemText primary={text} sx={{ color: "white" }} />
                    </ListItem>
                  ))}
                </List>
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
