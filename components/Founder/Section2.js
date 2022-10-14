import React from 'react'
import { Box, Grid, Stack, Typography, Container, Link, Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import MyButton from "../MyButton";
import HighlightText from "../HighlightText";
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import HandshakeIcon from '@mui/icons-material/Handshake';
import CollectionsIcon from '@mui/icons-material/Collections';
import Meeting2 from '../../public/images/meeting2.png'

const SectionFounder2 = (props) => {

  return (
    <>
      <Box sx={{ width: '100%',position:"relative" }} >
        <Grid pt={{ xs: 2, md: 20 }} container
          direction={{ xs: "column-reverse", sm: "column-reverse", md: "row" }}
          height={{ xs: "unset", md: "160vh" }} alignItems={{ md: "flex-start" }}
          justifyContent="space-around"
          style={{backgroundColor:"#fff"}}
          >
          <Grid item xs={2} mb={{xs:20}} style={{
            boxShadow: "0px 16px 40px rgba(112, 144, 176, 0.2)",
            borderRadius: 10,
            backgroundColor:"#fff"
            }}
            width={{ xs: "unset", md: 247 }}>
            <Stack spacing={4} style={{padding:23}}
              alignItems={{ xs: "center",md:'flex-start' }}>
             <Typography variant="h6" style={{width:"100%",height:50,borderBottom:"2px solid #BDBDBD"}}>Detail Program</Typography>
             <Typography variant="caption">Tentang Program</Typography>
             <Typography variant="caption">List SME dan Mentor</Typography>
             <Typography variant="caption">Kurikulum</Typography>
             <Typography variant="caption">Bimbingan Karier</Typography>
             <Typography variant="caption">Biaya Pendidikan</Typography>
             <Typography variant="caption">Testimoni Alumni</Typography>
             <Typography variant="caption">FAQs</Typography>
             <MyButton>Daftar Sekarang</MyButton>
            </Stack>
          </Grid>
          <Grid item xs={8} p={{xs:2,sm:3,md:0}}>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={4}>
              <Box gridColumn="span 12">
                <Typography color="#0056D2">Tentang Program</Typography>
              </Box>
              <Box gridColumn="span 12">
                <Typography variant="h4" fontWeight={700}>
                  Menjadi Seorang Founder yang{" "}
                  <HighlightText backgroundColor="#D9E6F8" paddingTop={1} paddingBottom={1} paddingLeft={2} paddingRight={2}width="-2%">Berbeda</HighlightText>
                </Typography>
              </Box>
              <Box gridColumn="span 12">
                <Typography variant="body2">
                  Program Founder Startup Campus merupakan sebuah pelatihan digital bersertifikat untuk mempelajari bagaimana cara membangun startup, memvalidasi ide bisnis, riset pasar, hingga pitching di depan investor.
                </Typography>
              </Box>
              <Box gridColumn="span 6">
                <HistoryEduIcon fontSize="large" color="sc_blue"/>
                <Typography mt={2} variant="body2" fontWeight={700}>
                  Instruktur yang Berpengalaman
                </Typography>
                <Typography mt={2} variant="body2" fontWeight={400}>
                  Kamu akan dibimbing langsung secara intensif oleh praktisi startup yang tersertifikasi.
                </Typography>
              </Box>
              <Box gridColumn="span 6">
                <MenuBookOutlinedIcon fontSize="large" color="sc_blue"/>
                <Typography mt={2} variant="body2" fontWeight={700}>
                  Kurikulum yang Dirancang oleh Experts
                </Typography>
                <Typography mt={2} variant="body2" fontWeight={400}>
                  Materi dirancang oleh ahli yang terjun di startup sehingga dapat dipelajari siapa pun.
                </Typography>
              </Box>
              <Box gridColumn="span 6">
                <WorkspacePremiumIcon fontSize="large" color="sc_blue"/>
                <Typography mt={2} variant="body2" fontWeight={700}>
                  Bootcamp dengan Sertifikasi Kemendikbud
                </Typography>
                <Typography mt={2} variant="body2" fontWeight={400}>
                  Sertifikat resmi dari Kemendikbud setelah lulus dari Startup Campus.
                </Typography>
              </Box>
              <Box gridColumn="span 6">
                <StarBorderIcon fontSize="large" color="sc_blue"/>
                <Typography mt={2} variant="body2" fontWeight={700}>
                  Dukungan Karier untuk Masa Depan
                </Typography>
                <Typography mt={2} variant="body2" fontWeight={400}>
                  Sesi prospect karier bersama praktisi dan cara membangun portofolio.
                </Typography>
              </Box>
              <Box gridColumn="span 6">
                <HandshakeIcon fontSize="large" color="sc_blue"/>
                <Typography mt={2} variant="body2" fontWeight={700}>
                  Jejaring dengan investor dan founder lainnya
                </Typography>
                <Typography mt={2} variant="body2" fontWeight={400}>
                  Kesempatan mendapatkan modal dari investor dan koneksi dengan startup ternama.
                </Typography>
              </Box>
              <Box gridColumn="span 6">
                <CollectionsIcon fontSize="large" color="sc_blue"/>
                <Typography mt={2} variant="body2" fontWeight={700}>
                  Referensi yang Lengkap dan Menunjang
                </Typography>
                <Typography mt={2} variant="body2" fontWeight={400}>
                  Akses materi berupa buku, video, dan referensi belajar terbaik lainnya untuk founders.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{
          height:334,
          width:"68%",
          // minWidth:450,
          // maxWidth:900,
          // backgroundColor:'red',
          marginTop:135,
          // marginBottom:100,
          backgroundImage:`url(${Meeting2.src})`,
          backgroundSize:'cover',
          backgroundPosition:'center',
          position:'absolute',
          bottom:-200,
          right:30,
          borderRadius:3,
          zIndex:1,
          "&::after": {
            zIndex: "1",
            content: "''",
            position: "absolute",
            height:887,
            width:2,
            top: -50,
            right:445,
            transform:"rotate(90deg)",
            backgroundColor: "#BDBDBD",
          },
        }}/>
      </Box>
    </>
  )
}

export default SectionFounder2
