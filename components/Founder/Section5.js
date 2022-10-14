import React from 'react'
import { Box, Grid, Stack, Typography, Container, Link, Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import MyButton from "../MyButton";
import HighlightText from "../HighlightText";
import VerifiedOutlined from '@mui/icons-material/VerifiedOutlined';
import ChatOutlined from '@mui/icons-material/ChatOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import HandshakeIcon from '@mui/icons-material/Handshake';
import CollectionsIcon from '@mui/icons-material/Collections';
import TwoPeople from '../../public/images/twopeopple.png'

const SectionFounder5 = (props) => {

  return (
    <>
      <Box mb={40} sx={{ width: '100%',position:"relative" }} >
        <Grid pt={{ xs: 2, md: 20 }} container
          direction={{ xs: "column-reverse", sm: "column-reverse", md: "row" }}
          height={{ xs: "unset", md: "130vh" }} alignItems={{ md: "flex-start" }}
          justifyContent="space-around"
          style={{backgroundColor:"#fff"}}
          >
          <Grid item xs={2} style={{
            width:247,
            boxShadow: "0px 16px 40px rgba(112, 144, 176, 0.2)",
            borderRadius: 10,
            backgroundColor:"#fff"
            }}>
          </Grid>
          <Grid item xs={8} p={{xs:4,md:0}} mb={{xs:20,md:0}}>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={4}>
              <Box gridColumn="span 12">
                <Typography color="#0056D2">Bimbingan Karier</Typography>
              </Box>
              <Box gridColumn="span 12">
                <Typography variant="h4" fontWeight={700}>
                  Dengan Dukungan Startup Campus{" "}
                  <HighlightText backgroundColor="#D9E6F8" paddingTop={1} paddingBottom={1} paddingLeft={2} paddingRight={2}width="-2%">Network</HighlightText>
                </Typography>
              </Box>
              <Box gridColumn="span 12">
                <Typography variant="body2">
                  Kamu akan memiliki semua yang dibutuhkan untuk berkarier menjadi seorang Founder yang berkualitas.
                </Typography>
              </Box>
              <Box gridColumn="span 4">
                <VerifiedOutlined fontSize="large" color="sc_blue"/>
                <Typography mt={2} variant="body2" fontWeight={700}>
                  CV dan Portofolio yang Menunjang
                </Typography>
                <Typography mt={2} variant="body2" fontWeight={400}>
                  Tim kami akan membantu kamu membuat resume yang menarik dan profesional.
                </Typography>
              </Box>
              <Box gridColumn="span 4">
                <ChatOutlined fontSize="large" color="sc_blue"/>
                <Typography mt={2} variant="body2" fontWeight={700}>
                  Bantuan Personal Career Coaching
                </Typography>
                <Typography mt={2} variant="body2" fontWeight={400}>
                  Kamu bebas berkonsultasi terkait rencana dan tujuan karirmu dengan praktisi ahli kami secara 1-on-1.
                </Typography>
              </Box>
              <Box gridColumn="span 4">
                <BadgeOutlinedIcon fontSize="large" color="sc_blue"/>
                <Typography mt={2} variant="body2" fontWeight={700}>
                  Peluang Berkarier di Perusahaan Bergengsi
                </Typography>
                <Typography mt={2} variant="body2" fontWeight={400}>
                  Terhubung secara berkelanjutan dengan 21+ perusahaan yang bekerja sama dengan Startup Campus.
                </Typography>
              </Box>
              <Box mt={5} gridColumn="span 12" direction="row">
                <Typography variant="body2" color="#2B2C27">Setelah kamu menjadi Alumni Program Founder Startup Campus, kamu dapat berjejaring dengan alumni dari program
                  Startup Campus lain yang tersebar di seluruh Indonesia bahkan dunia.
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
          backgroundImage:`url(${TwoPeople.src})`,
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
            top: -60,
            right:445,
            transform:"rotate(90deg)",
            backgroundColor: "#BDBDBD",
          },
        }}/>
      </Box>
    </>
  )
}

export default SectionFounder5
