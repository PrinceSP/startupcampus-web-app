import React, {useState} from 'react'
import { Box, Grid, Stack, Typography, Container, Link, Paper, Accordion, AccordionSummary, AccordionDetails, Divider } from "@mui/material";
import { styled } from '@mui/material/styles';
import MyButton from "../MyButton";
import HighlightText from "../HighlightText";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReactMarkdown from "react-markdown";
import AddIcon from '@mui/icons-material/Add';
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';

const SectionFounder7 = (props) => {

  return (
    <>
      <Box sx={{ width: '100%',position:"relative" }} >
        <Grid pt={{ xs: 2, md: 3 }} container
          direction={{ xs: "column-reverse", sm: "column-reverse", md: "row" }}
          height={{ xs: "unset", md: "200vh" }} alignItems={{ md: "flex-start" }}
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
          <Grid item xs={8} p={{xs:3,md:0}}>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={4}>
              <Box gridColumn="span 12">
                <Typography color="#0056D2">Kelas Terdekat</Typography>
              </Box>
              <Box gridColumn="span 12">
                <Typography variant="h4" fontWeight={700}>
                  Kelas yang Dapat Kamu{" "}
                  <HighlightText backgroundColor="#D9E6F8" paddingTop={1} paddingBottom={1} paddingLeft={2} paddingRight={2}width="-2%">Ikuti</HighlightText>
                </Typography>
              </Box>
              <Box gridColumn="span 12" sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',background:"#fff",boxShadow:"0px 16px 40px rgba(112, 144, 176, 0.2)",padding:3}}>
                <Box gridColumn="span 4">
                  <Typography mb={1} variant="body1" color="#2B2C27" fontWeight={700}>Skills Level Up!</Typography>
                  <Typography mb={1} variant="body2" color="#2B2C27" fontWeight={400}>Januari 2023</Typography>
                </Box>
                <Box gridColumn="span 4">
                  <Typography mb={1} variant="body1" color="#2B2C27" fontWeight={700} sx={{display:'flex',alignItems:'center'}}>
                    <CheckCircleIcon color="sc_blue" fontSize="small"/>
                    Total Durasi
                  </Typography>
                  <Typography mb={1} variant="body2" color="#2B2C27" fontWeight={400}>±5 Bulan</Typography>
                  <Typography mb={1} variant="body2" color="#2B2C27" fontWeight={400}>900 jam</Typography>
                </Box>
                <Box gridColumn="span 4">
                  <Typography mb={1} variant="body2" color="#2B2C27" fontWeight={400} sx={{display:'flex',alignItems:'center'}}>
                    <CheckCircleIcon color="sc_blue" fontSize="small"/>
                    Mentoring Intensif
                  </Typography>
                  <Typography mb={1} variant="body2" color="#2B2C27" fontWeight={400} sx={{display:'flex',alignItems:'center'}}>
                    <CheckCircleIcon color="sc_blue" fontSize="small"/>
                    Mini Project
                  </Typography>
                  <Typography mb={1} variant="body2" color="#2B2C27" fontWeight={400} sx={{display:'flex',alignItems:'center'}}>
                    <CheckCircleIcon color="sc_blue" fontSize="small"/>
                    Career Preparation
                  </Typography>
                  <Typography mb={1} variant="body2" color="#2B2C27" fontWeight={400} sx={{display:'flex',alignItems:'center'}}>
                    <CheckCircleIcon color="sc_blue" fontSize="small"/>
                    Fun Day
                  </Typography>
                </Box>
              </Box>
              <Box gridColumn="span 12" sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',background:"linear-gradient(0deg, rgba(189, 189, 189, 0.1), rgba(189, 189, 189, 0.1)), #FFFFFF",padding:3}}>
                <Typography variant="body1" color="#2B2C27" fontWeight={400}>
                  Pendaftaran ditutup pada tanggal 20 Desember 2022
                </Typography>
                <MyButton>Daftar Sekarang</MyButton>
              </Box>
              <Box gridColumn="span 12" sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',background:"#fff",boxShadow:"0px 16px 40px rgba(112, 144, 176, 0.2)",borderRadius:2,padding:3}}>
                <Box gridColumn="span 4">
                  <Typography mb={1} variant="body1" color="#2B2C27" fontWeight={700}>Studi Independen Batch 4</Typography>
                  <Typography mb={1} variant="body2" color="#2B2C27" fontWeight={400}>Januari 2023</Typography>
                </Box>
                <Box gridColumn="span 4">
                  <Typography mb={1} variant="body1" color="#2B2C27" fontWeight={700} sx={{display:'flex',alignItems:'center'}}>
                    <CheckCircleIcon color="sc_blue" fontSize="small"/>
                    Total Durasi
                  </Typography>
                  <Typography mb={1} variant="body2" color="#2B2C27" fontWeight={400}>±5 Bulan</Typography>
                  <Typography mb={1} variant="body2" color="#2B2C27" fontWeight={400}>900 jam</Typography>
                </Box>
                <Box gridColumn="span 4">
                  <Typography mb={1} variant="body2" color="#2B2C27" fontWeight={400} sx={{display:'flex',alignItems:'center'}}>
                    <CheckCircleIcon color="sc_blue" fontSize="small"/>
                    Mentoring Intensif
                  </Typography>
                  <Typography mb={1} variant="body2" color="#2B2C27" fontWeight={400} sx={{display:'flex',alignItems:'center'}}>
                    <CheckCircleIcon color="sc_blue" fontSize="small"/>
                    Mini Project
                  </Typography>
                  <Typography mb={1} variant="body2" color="#2B2C27" fontWeight={400} sx={{display:'flex',alignItems:'center'}}>
                    <CheckCircleIcon color="sc_blue" fontSize="small"/>
                    Career Preparation
                  </Typography>
                  <Typography mb={1} variant="body2" color="#2B2C27" fontWeight={400} sx={{display:'flex',alignItems:'center'}}>
                    <CheckCircleIcon color="sc_blue" fontSize="small"/>
                    Fun Day
                  </Typography>
                </Box>
              </Box>
              <Box gridColumn="span 12" sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',background:"linear-gradient(0deg, rgba(189, 189, 189, 0.1), rgba(189, 189, 189, 0.1)), #FFFFFF",padding:3}}>
                <Typography variant="body1" color="#2B2C27" fontWeight={400}>
                  Pendaftaran ditutup pada tanggal 20 Desember 2022
                </Typography>
                <MyButton>Daftar Sekarang</MyButton>
              </Box>
            </Box>
            <Box gridColumn="span 12" mt={7} mb={7}>
              <Typography variant="body2">
                Bagi kamu calon peserta Program Founder studi independen atau MBKM (Merdeka Belajar Kampus Merdeka), ada beberapa persyaratan yang perlu dipersiapkan, yaitu:
              </Typography>
            </Box>
            <Accordion
              sx={{
                boxShadow: "0px 8px 20px rgba(43, 44, 39, 0.1)",
                padding: "1em", marginBottom:10
              }}
            >
              <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6" fontWeight={600} sx={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <PermMediaOutlinedIcon color="sc_blue"/>
                  Persyaratan Peserta Studi Independen Batch 4
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Divider />
                <Typography mt={4} variant="body2" color="sc_gray.dark">
                  <ReactMarkdown>Bagi kamu calon peserta Program Founder studi independen atau MBKM (Merdeka Belajar Kampus Merdeka),
                    ada beberapa persyaratan yang perlu dipersiapkan, yaitu:
                  </ReactMarkdown>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Box gridColumn="span 12" sx={{minHeight:50,height:60,display:'flex',alignItems:'center',justifyContent:'center',background:"linear-gradient(0deg, rgba(0, 86, 210, 0.1), rgba(0, 86, 210, 0.1)), #FFFFFF"}}>
              <Typography variant="body1" color="#2B2C27" fontWeight={400}>
                Punya pertanyaan seputar biaya pendidikan?{" "}
                <Link>Hubungi sekarang!</Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default SectionFounder7
