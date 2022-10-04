import React, {useContext, useEffect, useState } from "react";
import Head from "next/head";
import { Label } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import FormProvider, { RegistContext, useMyForm } from "../context/FormContext";
import MultiStep from "../components/MultiStep";
import MyButton from "../components/MyButton";
import WordBreak from "../components/WordBreak";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import ImportContactsRoundedIcon from "@mui/icons-material/ImportContactsRounded";
import { createClient } from "contentful";
import { useForm } from "react-hook-form";
import { kelas } from "../content/kelas";
import Image from "next/image";
import { TaglineContext } from "./_app";
import MyTitle from "../components/MyTitle";
import MyDesc from "../components/MyDesc";
import ChooseProgramForm from "../components/RegistPage/ChooseProgramForm";
import IndentityForm from "../components/RegistPage/IndentityForm";
import PaymentForm from "../components/RegistPage/PaymentForm";
import Xendit from "xendit-node";
import { nanoid } from "nanoid";

const helper = [
  "Hanya memerlukan 5 menit untuk mengisi formulir",
  "Akan dihubungi oleh tim",
  "Pembayaran dapat dilakukan H+2 setelah mengisi formulir pendaftaran",
];

const Daftar = ({ paket, tagline })=>{
  const { register, handleSubmit, watch, errors } = useMyForm();
  const [loading, setLoading] = useState(false);

  const { tagline: x, setTagline } = useContext(TaglineContext);
  const [state, setState] = useState(0);

  const setInvoice = async () => {
    const x = new Xendit({
      secretKey: process.env.XENDIT_API_KEY,
    });
    const { Invoice } = x;
    const invoiceSpecificOptions = {};
    const i = new Invoice(invoiceSpecificOptions);

    const resp = await i
      .createInvoice({
        externalID: "your-external-id",
        payerEmail: "stanley@xendit.co",
        description: "Invoice for Shoes Purchase",
        amount: 100000,
      })
      .then(({ id }) => {
        console.log(`Invoice created with ID: ${id}`);
      });

    console.log(resp);
  };

  useEffect(() => {
    setTagline(tagline);
  }, []);
  const onSubmit = (data) => {
    setState((prev) => prev + 1);
    if (state > 1) {
      setLoading(true);
      setInvoice();
      setLoading(false);
    }
  };
  const step = [
    <ChooseProgramForm key={0} paket={paket} />,
    <IndentityForm key={1} />,
    <PaymentForm key={2} loading={loading} />,
  ];
  return (
    <>
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
            <Grid item xs={12} md={8} mb={6}>
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
                <MyTitle gutterBottom variant="h5">
                  Daftarkan dirimu sekarang, mulailah dengan beberapa langkah
                  mudah.
                </MyTitle>
                <MyDesc>
                  Setelah mendaftar, tim kami akan segera menghubungi kamu untuk
                  informasi lebih lanjut.
                </MyDesc>

                <Stack
                  component={"form"}
                  mt={4}
                  spacing={2}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  {step[state]}
                  <Box
                    display={"flex"}
                    justifyContent={state > 0 ? "space-between" : "flex-end"}
                  >
                    {state > 0 && (
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
                  </Box>
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
    </>
  );
}

export default Daftar;

export const getStaticProps = async()=>{
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const { items: paket } = await client.getEntries({
    content_type: "paketKelas",
  });

  const { items: tagline } = await client.getEntries({
    content_type: "section1",
  });

  return {
    props: {
      paket,
      tagline,
    },
    revalidate: 1,
  };
}
