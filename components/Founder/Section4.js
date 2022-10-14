import React,{useState} from 'react'
import { Box, Grid, Stack, Typography, Container, Link, Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import MyButton from "../MyButton";
import HighlightText from "../HighlightText";
import PropTypes from 'prop-types';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: #69686B;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  height:53px;
  padding: 10px 12px;
  border: none;
  border-radius: 3px;
  display: flex;
  align-items:center;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
    color:#eee;
    margin:0;
    align-items:center;
    border-radius:0;
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${blue[200]};
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #0056D2;
    color: #fff;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)(
  ({ theme }) => `
  width: 100%;
  font-family: Sora;
  font-size: 0.875rem;
  padding: 20px 30px;
  background:#fff;
  color:#69686B;
  box-shadow: 0px 16px 40px rgba(112, 144, 176, 0.2);
  position:relative;

  &::after{
    height:2px;
    width:100%;
    position:absolute;
    bottom:-50px;
    left:0;
    right:0;
    content:"";
    background:#BDBDBD;
  }
  `,
);

const TabsList = styled(TabsListUnstyled)(
  ({ theme }) => `
  min-width: 400px;
  height:100%;
  background: linear-gradient(0deg, rgba(0, 86, 210, 0.1), rgba(0, 86, 210, 0.1)), #FFFFFF;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  `,
);

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;
//
//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           {children}
//         </Box>
//       )}
//     </div>
//   );
// }
//
// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };
//
// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

const SectionFounder4 = (props) => {
  // const [value, setValue] = useState(0);
  //
  //   const handleChange = (event, newValue) => {
  //     setValue(newValue);
  //   };
  return (
    <>
      <Box sx={{ width: '100%',position:"relative", backgroundColor:"#f3f7fd"}}>
        <Container>
          <Grid pt={{ xs: 2, md: 10 }} container data-aos="fade-right"
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
                <Box gridColumn="span 12" data-aos="zoom-in-right">
                  <Typography variant="h4" fontWeight={700} >
                    4 Langkah Untuk Menjadi{" "}
                    <HighlightText mt={{xs:5,md:0}} backgroundColor="#D9E6F8" paddingTop={1} paddingBottom={1} paddingLeft={2} paddingRight={2}width="-2%">Founder</HighlightText>
                  </Typography>
                </Box>
                <Box gridColumn="span 12">
                  <Typography variant="body2" color="#2B2C27">
                    Program Founder dirancang untuk membuatmu belajar secara bertahap dan cocok dipelajari oleh semua level.
                  </Typography>
                </Box>
                <Box gridColumn="span 12">
                  {/**
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
                    **/}
                  <TabsUnstyled defaultValue={0}>
                    <TabsList>
                      <Tab>Foundational Thinking Frameworks</Tab>
                      <Tab>Startup Development</Tab>
                      <Tab>Finance & Fundraising</Tab>
                      <Tab>Demo Day</Tab>
                    </TabsList>
                    <TabPanel value={0}>
                      <Typography variant="body1" color="#69686B">Modul 1</Typography>
                      <Typography color="#0056D2" mt={3} fontWeight={700}>Foundational Thinking Framework</Typography>
                      <Typography fontWeight={400} mt={3}>Pada modul ini, peserta akan mengasah keterampilan dalam memecahkan masalah dari tingkat yang paling dasar (problem solving 101) melalui berbagai macam tahapan, yaitu: memahami situatsi, identifikasi akar permasalahan, mengembangkan solusi yang efektif, dan mengeksekusi solusi.</Typography>
                      <Box mt={4}>
                        <Link component="button" variant="body1">Unduh Kurikulum</Link>
                      </Box>
                    </TabPanel>
                    <TabPanel value={1}>
                      <Typography variant="body1" color="#69686B">Modul 1</Typography>
                      <Typography color="#0056D2" mt={3} fontWeight={700}>Startup Development</Typography>
                      <Typography fontWeight={400} mt={3}>Pada modul ini, peserta akan mengasah keterampilan dalam memecahkan masalah dari tingkat yang paling dasar (problem solving 101) melalui berbagai macam tahapan, yaitu: memahami situatsi, identifikasi akar permasalahan, mengembangkan solusi yang efektif, dan mengeksekusi solusi.</Typography>
                      <Box mt={4}>
                        <Link component="button" variant="body1">Unduh Kurikulum</Link>
                      </Box>
                    </TabPanel>
                    <TabPanel value={2}>
                      <Typography variant="body1" color="#69686B">Modul 1</Typography>
                      <Typography color="#0056D2" mt={3} fontWeight={700}>Finance & Fundraising</Typography>
                      <Typography fontWeight={400} mt={3}>Pada modul ini, peserta akan mengasah keterampilan dalam memecahkan masalah dari tingkat yang paling dasar (problem solving 101) melalui berbagai macam tahapan, yaitu: memahami situatsi, identifikasi akar permasalahan, mengembangkan solusi yang efektif, dan mengeksekusi solusi.</Typography>
                      <Box mt={4}>
                        <Link component="button" variant="body1">Unduh Kurikulum</Link>
                      </Box>
                    </TabPanel>
                    <TabPanel value={3}>
                      <Typography variant="body1" color="#69686B">Modul 1</Typography>
                      <Typography color="#0056D2" mt={3} fontWeight={700}>Demo Day</Typography>
                      <Typography fontWeight={400} mt={3}>Pada modul ini, peserta akan mengasah keterampilan dalam memecahkan masalah dari tingkat yang paling dasar (problem solving 101) melalui berbagai macam tahapan, yaitu: memahami situatsi, identifikasi akar permasalahan, mengembangkan solusi yang efektif, dan mengeksekusi solusi.</Typography>
                      <Box mt={4}>
                        <Link component="button" variant="body1">Unduh Kurikulum</Link>
                      </Box>
                    </TabPanel>
                  </TabsUnstyled>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>

      </Box>
    </>
  )
}

export default SectionFounder4
