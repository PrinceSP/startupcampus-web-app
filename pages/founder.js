import React from 'react'
import { Box, Grid, Stack, Typography, Container } from "@mui/material";
import Head from "next/head";
import FOBackground from '../public/images/FO.png'
import MyButton from "../components/MyButton";

const Founder = () => {
  return (
    <>
      <Head>
        <title>Founder | Startup Campus</title>
      </Head>
      <Grid
        pt={{ xs: 2, md: 0 }}
        container
        component="section"
        direction={{ xs: "column-reverse", sm: "column-reverse", md: "row" }}
        height={{ xs: "unset", md: "150vh" }}
        alignItems={{ md: "center" }}
        style={{
          // height:"100vh",
          // width:"100%",
          // backgroundColor:'red',
          marginTop:135,
          backgroundImage:`url(${FOBackground.src})`,
          backgroundSize:'cover'
        }}>
        <Box style={{
            height:"100%",
            width:"100%",
            background:'linear-gradient(90deg, rgba(43, 44, 39, 0.75) 0%, rgba(43, 44, 39, 0.0375) 100%), linear-gradient(111.55deg, rgba(43, 44, 39, 0.75) 0%, rgba(43, 44, 39, 0.0375) 100%), linear-gradient(68.45deg, rgba(43, 44, 39, 0.75) 0%, rgba(43, 44, 39, 0.0375) 100%)'
          }}>
          <Grid item xs={12} md={6} pt={4} data-aos="fade-left" style={{marginLeft:"10%",marginTop:"20%"}}>
            <Stack spacing={2} alignItems="start" className="hero-text">
              <Typography variant="body2" fontWeight={400} color="#fff">
                #SiapMahirDigital, Siap Jadi
              </Typography>
              <Typography variant="h3" fontWeight={800} color="#fff">
                The Founder
              </Typography>
              <Typography variant="h6" lineHeight={2} fontWeight={200}color="#fff">
                Ciptakan startup yang unik, bernilai dan profesional melalui
                program Founder. Pelajari cara membangun startup dari awal
                hingga menjadi MVP(Minimum Viable Product)
              </Typography>
            </Stack>
            <Grid container mt={4}>
              <Grid item xs={4}>
                <MyButton href={"#program"}>Daftar Sekarang</MyButton>
              </Grid>
              <Grid item xs={4}>
                <MyButton variant="outlined" color="sc_white" href={"#program"}>Lihat Detail</MyButton>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  )
}

export default Founder
