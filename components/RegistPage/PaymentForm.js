import React from "react";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";

const PaymentForm = ({ loading })=>{
  return (
    <Stack>
      <Typography>Membuat Invoice</Typography>
      {loading && <CircularProgress />}
    </Stack>
  );
}

export default PaymentForm
