import React, {useState} from 'react'
import { Box, Grid, Stack, Typography, Container, Link, Paper, Accordion, AccordionSummary, AccordionDetails, Divider } from "@mui/material";
import { styled } from '@mui/material/styles';
import MyButton from "../MyButton";
import HighlightText from "../HighlightText";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Virginia from '../../public/images/Virginia.png'

const SectionFounder8 = (props) => {

  return (
    <>
      <Box sx={{ width: '100%',position:"relative" }} >
        <Grid pt={{ xs: 2, md: 3 }} container
          direction={{ xs: "column-reverse", sm: "column-reverse", md: "row" }}
          height={{ xs: "unset", md: "100vh" }} alignItems={{ md: "flex-start" }}
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
                <Typography color="#0056D2">Testimoni</Typography>
              </Box>
              <Box gridColumn="span 12">
                <Typography variant="h4" fontWeight={700}>
                  <HighlightText backgroundColor="#D9E6F8" paddingLeft={2} paddingRight={2} width="-2%" >Kata Mereka</HighlightText>
                  Tentang Founder Startup Campus{" "}
                </Typography>
              </Box>
              <Box gridColumn="span 4" sx={{
                height:304,
                // width:"100%",
                // minWidth:450,
                // maxWidth:900,
                backgroundColor:'#fff',
                backgroundImage:`url(${Virginia.src})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                borderRadius:4
              }}/>
               <Box gridColumn="span 8">
                 <FormatQuoteIcon fontSize="large" color="sc_blue"/>
                  <Typography variant="body2" fontWeight={400} color="#2B2C27">
                    Bersyukur bisa belajar hard and soft skill sehingga aku makin mengenal diri sendiri. Pikiranku menjadi lebih terbuka bahwa dunia itu luas dan tidak ada
                    kata “habis” untuk belajar.
                  </Typography>
                  <Grid mt={7} container direction="column">
                    <Typography ml={2} variant="body1" fontWeight={500} color="#2B2C27">
                      Virginia Theresya Sembiring
                    </Typography>
                    <Typography ml={2} variant="body2" fontWeight={400} color="#69686B">
                      Universitas Esa Unggul
                    </Typography>
                  </Grid>
                </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default SectionFounder8
