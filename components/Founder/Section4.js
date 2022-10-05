import React,{useState} from 'react'
import { Box, Grid, Stack, Typography, Container, Link, Paper,Tabs,Tab } from "@mui/material";
import { styled } from '@mui/material/styles';
import MyButton from "../MyButton";
import HighlightText from "../HighlightText";
import PropTypes from 'prop-types';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const SectionFounder4 = (props) => {
  const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <>
      <Box sx={{ width: '100%',position:"relative", backgroundColor:"#f3f7fd"}}>
        <Grid pt={{ xs: 2, md: 10 }} container
          direction={{ xs: "column-reverse", sm: "column-reverse", md: "row" }}
          height={{ xs: "unset", md: "160vh" }} alignItems={{ md: "flex-start" }}
          justifyContent="space-around"
          >
          <Grid item xs={2} style={{
            width:247,
            boxShadow: "0px 16px 40px rgba(112, 144, 176, 0.2)",
            borderRadius: 10,
            backgroundColor:"#fff"
            }}>
          </Grid>
          <Grid item xs={8}>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={4}>
              <Box gridColumn="span 12">
                <Typography color="#0056D2">Kurikulum</Typography>
              </Box>
              <Box gridColumn="span 12">
                <Typography variant="h4" fontWeight={700}>
                  4 Langkah Untuk Menjadi{" "}
                  <HighlightText backgroundColor="#D9E6F8" paddingTop={1} paddingBottom={1} paddingLeft={2} paddingRight={2}width="-2%">Founder</HighlightText>
                </Typography>
              </Box>
              <Box gridColumn="span 12">
                <Typography variant="body2" color="#2B2C27">
                  Program Founder dirancang untuk membuatmu belajar secara bertahap dan cocok dipelajari oleh semua level.
                </Typography>
              </Box>
              <Box gridColumn="span 12">
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Foundational Thinking Frameworks" {...a11yProps(0)} />
                    <Tab label="Startup Development" {...a11yProps(1)} />
                    <Tab label="Finance & Fundraising" {...a11yProps(2)} />
                    <Tab label="Demo Day" {...a11yProps(3)} />
                  </Tabs>
                </Box>
                <Box mt={4} style={{boxShadow: "0px 16px 40px rgba(112, 144, 176, 0.2)",backgroundColor:"#fff"}}>
                  <TabPanel value={value} index={0} style={{height:282,}}>
                    <Typography variant="body1" color="#69686B">Modul 1</Typography>
                    <Typography color="#0056D2" mt={3} fontWeight={700}>Foundational Thinking Framework</Typography>
                    <Typography fontWeight={400} mt={3}>Pada modul ini, peserta akan mengasah keterampilan dalam memecahkan masalah dari tingkat yang paling dasar (problem solving 101) melalui berbagai macam tahapan, yaitu: memahami situatsi, identifikasi akar permasalahan, mengembangkan solusi yang efektif, dan mengeksekusi solusi.</Typography>
                    <Box mt={4}>
                      <Link component="button" variant="body1">Unduh Kurikulum</Link>
                    </Box>
                  </TabPanel>
                  <TabPanel value={value} index={1} style={{height:282,}}>
                    <Typography variant="body1" color="#69686B">Modul 1</Typography>
                    <Typography color="#0056D2" mt={3} fontWeight={700}>Foundational Thinking Framework</Typography>
                    <Typography fontWeight={400} mt={3}>Pada modul ini, peserta akan mengasah keterampilan dalam memecahkan masalah dari tingkat yang paling dasar (problem solving 101) melalui berbagai macam tahapan, yaitu: memahami situatsi, identifikasi akar permasalahan, mengembangkan solusi yang efektif, dan mengeksekusi solusi.</Typography>
                    <Box mt={4}>
                      <Link component="button" variant="body1">Unduh Kurikulum</Link>
                    </Box>
                  </TabPanel>
                  <TabPanel value={value} index={2} style={{height:282,}}>
                    <Typography variant="body1" color="#69686B">Modul 1</Typography>
                    <Typography color="#0056D2" mt={3} fontWeight={700}>Foundational Thinking Framework</Typography>
                    <Typography fontWeight={400} mt={3}>Pada modul ini, peserta akan mengasah keterampilan dalam memecahkan masalah dari tingkat yang paling dasar (problem solving 101) melalui berbagai macam tahapan, yaitu: memahami situatsi, identifikasi akar permasalahan, mengembangkan solusi yang efektif, dan mengeksekusi solusi.</Typography>
                    <Box mt={4}>
                      <Link component="button" variant="body1">Unduh Kurikulum</Link>
                    </Box>
                  </TabPanel>
                  <TabPanel value={value} index={3} style={{height:282,}}>
                    <Typography variant="body1" color="#69686B">Modul 1</Typography>
                    <Typography color="#0056D2" mt={3} fontWeight={700}>Foundational Thinking Framework</Typography>
                    <Typography fontWeight={400} mt={3}>Pada modul ini, peserta akan mengasah keterampilan dalam memecahkan masalah dari tingkat yang paling dasar (problem solving 101) melalui berbagai macam tahapan, yaitu: memahami situatsi, identifikasi akar permasalahan, mengembangkan solusi yang efektif, dan mengeksekusi solusi.</Typography>
                    <Box mt={4}>
                      <Link component="button" variant="body1">Unduh Kurikulum</Link>
                    </Box>
                  </TabPanel>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default SectionFounder4
