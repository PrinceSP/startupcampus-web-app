import React from 'react'
import PropTypes from 'prop-types'
import { Box, Grid, Stack, Typography, Container, Link } from "@mui/material";
import FOBackground from '../../public/images/FO.png'
import MyButton from "../MyButton";
import DateRangeIcon from '@mui/icons-material/DateRange';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

const SectionFounder1 = (props) => {
  return (
    <>
      <Grid
        pt={{ xs: 2, md: 0 }}
        container
        component="section"
        direction={{ xs: "column-reverse", sm: "column-reverse", md: "row" }}
        height={{ xs: "unset", md: "140vh" }}
        alignItems={{ md: "center" }}
        style={{
          // height:"100vh",
          // width:"100%",
          // backgroundColor:'red',
          marginTop:135,
          // marginBottom:100,
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
              <Typography variant="h2" fontWeight={800} color="#fff">
                The Founder
              </Typography>
              <Typography variant="h6" lineHeight={2} fontWeight={200}color="#fff">
                Ciptakan startup yang unik, bernilai dan profesional melalui
                program Founder. Pelajari cara membangun startup dari awal
                hingga menjadi MVP(Minimum Viable Product)
              </Typography>
            </Stack>
            <Grid container mt={4}
              component="section"
              direction={{ xs: "column-reverse", sm: "column-reverse", md: "row" }}
              mb={{ xs: 2,sm:4, md: 0 }}
              >
              <Grid item xs={4} mb={{ xs: 1.5,sm:2, md: 0 }}>
                <MyButton href={"#program"}>Daftar Sekarang</MyButton>
              </Grid>
              <Grid item xs={4} mb={{ xs: 1.5,sm:2, md: 0 }}>
                <MyButton variant="outlined" color="sc_white" href={"#program"}>Lihat Detail</MyButton>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Grid
          style={{backgroundColor:"#fff",margin:"auto",borderRadius:10,position:"relative",bottom:50,boxShadow: "0px 16px 40px rgba(43, 44, 39, 0.2)",zIndex:1}}
          height={{ xs: "unset", md:95 }}
          width={{ xs: "unset", md:891 }}
          p={{xs: 2, md: 0}}
          container
          direction={{ xs: "column", sm: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={8}>
          <Grid container mb={{xs: 2, md: 0}} xs direction="row" alignItems="center" justifyContent="center">
            <DateRangeIcon fontSize="small"/>
            <Typography variant="body1">Kelas Terdekat</Typography>
          </Grid>
          <Grid container mb={{xs: 2, md: 0}} xs={4} direction={{ xs: "row", sm: "row", md: "column" }} justifyContent="center">
            <Grid container direction="row">
              <VideoLibraryIcon fontSize="small"/>
              <Typography variant="body2">Skills Level Up</Typography>
            </Grid>
            <Grid container direction={{ xs: "row", sm: "row", md: "row" }}>
              <Typography variant="body2">23 Sep - 25 Feb 2023</Typography>
              <Link>
                <Typography variant="body2">Lihat disini</Typography>
              </Link>
            </Grid>
          </Grid>
          <Grid container mb={{xs: 2, md: 0}} xs={5} direction={{ xs: "row", sm: "row", md: "row" }} justifyContent="center">
            <Grid container direction="row">
              <VideoLibraryIcon fontSize="small"/>
              <Typography variant="body2">Study Independen (Kampus Merdeka)</Typography>
            </Grid>
            <Grid container xs direction={{ xs: "row", sm: "row", md: "row" }}>
              <Typography variant="body2">23 Sep - 25 Feb 2023</Typography>
              <Link>
                <Typography variant="body2">Lihat disini</Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default SectionFounder1
