import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function Section2() {
  return (
    <Grid container my={6} py={6} spacing={6}>
      <Grid item xs={12} md={12}>
        <Typography variant="h5" fontWeight={700} textAlign="center">
          Alumni Startup Campus telah bekerja di:
        </Typography>
      </Grid>
      <Grid item xs={12} md={12}>
        <Stack
          display={{ xs: "none", sm: "flex" }}
          spacing={6}
          alignItems={"center"}
          direction={"row"}
          justifyContent="center"
        >
          <Box>
            <Image
              width={156}
              height={50}
              src={"/images/Shopee-logo-Gray.png"}
            />
          </Box>

          <Box>
            <Image
              width={63}
              height={55}
              src={"/images/Zero One Group-logo-Gray.png"}
            />
          </Box>
          <Box>
            <Image
              width={139}
              height={50}
              src={"/images/Kimia Farma-logo-Gray.png"}
            />
          </Box>
          <Box>
            <Image
              width={279}
              height={60}
              src={"/images/Philip Morris International_logo-Gray.png"}
            />
          </Box>
          <Box>
            <Typography
              fontSize={14}
              sx={{ color: "#69686B", mt: 0 }}
              fontWeight={400}
              textAlign="start"
            >
              + dan masih <br /> banyak lagi
            </Typography>
          </Box>
        </Stack>

        {/* In mobile version*/}
        <Stack
          display={{ xs: "flex", sm: "none" }}
          spacing={6}
          alignItems={"center"}
          justifyContent="center"
        >
          <Stack direction={"row"} spacing={4}>
            <Box>
              <Image
                width={156}
                height={50}
                src={"/images/Shopee-logo-Gray.png"}
              />
            </Box>

            <Box>
              <Image
                width={63}
                height={55}
                src={"/images/Zero One Group-logo-Gray.png"}
              />
            </Box>
          </Stack>
          <Stack direction={"row"} spacing={4}>
            <Box>
              <Image
                width={139}
                height={50}
                src={"/images/Kimia Farma-logo-Gray.png"}
              />
            </Box>
            <Box>
              <Image
                width={279}
                height={60}
                src={"/images/Philip Morris International_logo-Gray.png"}
              />
            </Box>
          </Stack>

          <Box>
            <Typography
              fontSize={14}
              sx={{ color: "#69686B", mt: 0 }}
              fontWeight={400}
              textAlign="start"
            >
              + dan masih <br /> banyak lagi
            </Typography>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Section2;
