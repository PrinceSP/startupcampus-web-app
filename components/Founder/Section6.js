import React, {useState} from 'react'
import { Box, Grid, Stack, Typography, Container, Link, Paper, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
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
import AddIcon from '@mui/icons-material/Add';

const SectionFounder6 = (props) => {

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <>
      <Box mb={15} sx={{ width: '100%',position:"relative" }}>
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
          <Grid item xs={8} p={{xs:4,md:0}}>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={4}>
              <Box gridColumn="span 12">
                <Typography color="#0056D2">Biaya Pendidikan</Typography>
              </Box>
              <Box gridColumn="span 12">
                <Typography variant="h4" fontWeight={700}>
                  Rincian Biaya{" "}
                  <HighlightText backgroundColor="#D9E6F8" paddingTop={1} paddingBottom={1} paddingLeft={2} paddingRight={2}width="-2%">Pendidikan</HighlightText>
                </Typography>
              </Box>
              <Box gridColumn="span 12">
                <Typography variant="body2">
                  Startup Campus berkomitmen untuk membuat pendidikan digital menjadi lebih mudah untuk diakses oleh siapa saja, komitmen pertama kami, yaitu mengurangi biaya pendaftaran menjadi Rp4.015.050* ( yang semula Rp12.015.050) untuk waktu yang terbatas. Mulailah perjalananmu sebelum biaya pendaftaran kembali normal!
                </Typography>
              </Box>
            </Box>
            <div>
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{marginBottom:5,marginTop:10,border:"none",boxShadow: "0px 8px 20px rgba(43, 44, 39, 0.1)"}}>
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Pembayaran Dimuka</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>Pembayaran dimuka dilakukan melalui partner payment gateway kami, Xendit.</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                    Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{marginBottom:5,border:"none",boxShadow: "0px 8px 20px rgba(43, 44, 39, 0.1)"}}>
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Cicilan Hingga 12x</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>
                    Ada banyak opsi cicilan agar kamu bisa pelajari dan pertimbangkan.
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                    varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                    laoreet.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{marginBottom:5,border:"none",boxShadow: "0px 8px 20px rgba(43, 44, 39, 0.1)"}}>
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Beasiswa Startup Campus</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>Mohon maaf, untuk saat ini beasiswa belum tersedia.</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
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

export default SectionFounder6
