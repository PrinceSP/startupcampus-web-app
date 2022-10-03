import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import React from "react";

export default function PaymentForm({ loading }) {
  return (
    <Stack>
      <Typography>Membuat Invoice</Typography>
      {loading && <CircularProgress />}
    </Stack>
  );
}
