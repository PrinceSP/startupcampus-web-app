import React from 'react'
import { Box, Grid, Stack, Typography, Container, Link, Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import MyButton from "../MyButton";
import HighlightText from "../HighlightText";
import Zacky from '../../public/images/zacky.png'
import Linkedn from '../../public/images/linkedn.svg'

const SectionFounder2 = (props) => {

  return (
    <>
      <Box sx={{ width: '100%',position:"relative", backgroundColor:"#f3f7fd"}} pt={30}>
        <Grid pt={{ xs: 2, md: 20 }} container
          direction={{ xs: "column-reverse", sm: "column-reverse", md: "row" }}
          height={{ xs: "unset", md: "130vh" }} alignItems={{ md: "flex-start" }}
          justifyContent="space-around"
          >
          <Grid item xs={2} style={{
            width:247,
            boxShadow: "0px 16px 40px rgba(112, 144, 176, 0.2)",
            borderRadius: 10,
            backgroundColor:"#fff"
            }}>
          </Grid>
          <Grid item p={{xs:2,md:0}} xs={8} style={{position:'relative'}} >
            <Grid xs={12} container gap={4} direction={{xs:"column",md:"row"}}>
              <Grid item xs={12}>
                <Typography color="#0056D2">Subject Matter Expert dan Mentor</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4" fontWeight={700}>
                  Belajar Langsung dari{" "}
                  <HighlightText backgroundColor="#D9E6F8" paddingTop={1} paddingBottom={1} paddingLeft={2} paddingRight={2}width="-2%">Ahlinya</HighlightText>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2">
                  Terhubung dengan Subject Matter Expert (SME) dan mentor yang berpengalaman dari berbagai perusahaan digital terkemuka.
                </Typography>
              </Grid>
              <Grid item xs={4} height={{xs:"unset",md:304}} width={{xs:"unset",md:"100%"}} sx={{
                // minWidth:450,
                // maxWidth:900,
                backgroundColor:'#fff',
                backgroundImage:`url(${Zacky.src})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                borderRadius:4
              }}/>
            <Grid item xs={8}>
                <Typography mt={2} variant="body1" fontWeight={700} color="#0056D2">
                  Achmad Zaky
                </Typography>
                <Typography mt={1} variant="body2" fontWeight={400} color="#69686B">
                  Founder & ex-CEO of BukaLapak & Founding Partner of init6
                </Typography>
                <Typography mt={6} variant="body2" fontWeight={400}>
                  Memiliki pengalaman 10+ tahun menjadi seorang founder dan
                  CEO di BukaLapak sebelum menjadi founding partner di init6.
                  Zaky juga memiliki gelar Master of Science (MS) di bidang Business
                  Administration and Management, General dari HEC Paris.
                </Typography>
                <Grid mt={7} container direction={{ xs: "column-reverse", sm: "column-reverse", md: "row" }} alignItems={{ md: "center" }}>
                  <img src={Linkedn.src} alt='next' />
                  <Typography ml={2} variant="body1" fontWeight={500} color="#0056D2">
                    Lebih Dekat Dengan Achmad Zaky
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Box sx={{position:'absolute',height:2,width:"100%",bottom:-50,left:0,right:0,background:"#BDBDBD"}}/>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default SectionFounder2
