import React, {useState} from 'react'
import { Box, Grid, Stack, Typography, Container, Link, Paper, Accordion, AccordionSummary, AccordionDetails, Divider } from "@mui/material";
import { styled } from '@mui/material/styles';
import MyButton from "../MyButton";
import HighlightText from "../HighlightText";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Aksel from '../../public/images/Aksel.png'
import Magalodon from '../../public/images/Magalodon.png'
import DigiHunter from '../../public/images/DigiHunter.png'

const SectionFounder10 = (props) => {

  return (
    <>
      <Box mb={{xs:50,md:90}} sx={{ width: '100%',position:"relative" }} >
        <Grid pt={{ xs: 2, md: 6 }} container
          direction={{ xs: "column-reverse", sm: "column-reverse", md: "row" }}
          height={{ xs: "unset", md: "100vh" }} alignItems={{ md: "flex-start" }}
          justifyContent="space-around"
          style={{backgroundColor:"#faf7ff"}}
          >
          <Grid item xs={2} style={{
            width:247,
            boxShadow: "0px 16px 40px rgba(112, 144, 176, 0.2)",
            borderRadius: 10,
            backgroundColor:"#fff"
            }}>
          </Grid>
          <Grid item xs={8} p={{xs:4,md:0}}>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={4}>
              <Box gridColumn="span 12">
                <Typography color="#0056D2">Portofolio Alumni</Typography>
              </Box>
              <Box gridColumn="span 12">
                <Typography variant="h4" fontWeight={700}>
                  Karya-Karya{" "}
                  <HighlightText backgroundColor="#D9E6F8" paddingTop={1} paddingBottom={1} paddingLeft={2} paddingRight={2}width="-2%">Alumni</HighlightText>
                  {" "}Program Founder
                </Typography>
              </Box>
              <Box gridColumn="span 12" sx={{display:'flex',flexDirection:'row'}} >
                <Box gridColumn="span 4" mr={2} sx={{filter:"drop-shadow(0px 16px 40px rgba(112, 144, 176, 0.2))"}}>
                  <img src={Aksel.src} style={{height:226,width:260,borderRadius:4}}/>
                  <Box sx={{height:109,width:"94%",backgroundColor:"#fff",display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'center',padding:4}}>
                    <Typography variant="body1">Aksel</Typography>
                    <Typography variant="caption" color="#69686B">Gabrille Shanne L. & Arel Eugene R.</Typography>
                  </Box>
                </Box>
                <Box gridColumn="span 4" mr={2} sx={{filter:"drop-shadow(0px 16px 40px rgba(112, 144, 176, 0.2))"}}>
                  <img src={DigiHunter.src} style={{height:226,width:260,borderRadius:4}}/>
                  <Box sx={{height:109,width:"94%",backgroundColor:"#fff",display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'center',padding:4}}>
                    <Typography variant="body1">Digital Hunter</Typography>
                    <Typography variant="caption" color="#69686B">Jhosepin V., Roland C. , & Ananda A.</Typography>
                  </Box>
                </Box>
                <Box gridColumn="span 4" sx={{filter:"drop-shadow(0px 16px 40px rgba(112, 144, 176, 0.2))"}}>
                  <img src={Magalodon.src} style={{height:226,width:260,borderRadius:4}}/>
                  <Box sx={{height:109,width:"94%",backgroundColor:"#fff",display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'center',padding:4}}>
                    <Typography variant="body1">Magalodon</Typography>
                    <Typography variant="caption" color="#69686B">Frans R., Lisya J., Nadia E., & Agus H.</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default SectionFounder10
