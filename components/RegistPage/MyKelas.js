import React from "react";
import {
  Chip,
  FormControl,
  FormGroup,
  FormHelperText,
  Grid,
  Input,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useMyForm } from "../../context/FormContext";

const MyKelas = ({ paket, name })=>{
  const { register, handleSubmit, watch, errors } = useMyForm();
  return (
    <FormControl error={errors[name] ? true : false}>
      {/* PAKET KELAS INPUT */}
      <FormGroup width="100%">
        <Typography fontWeight={700} gutterBottom>
          Kelas Terdekat *
        </Typography>
        <Grid container spacing={1}>
          {paket
            ?.slice(0)
            .reverse()
            .map((val, i) => (
              <Grid key={i} item xs={12} md={6}>
                <Stack
                  component="label"
                  width="100%"
                  p={3}
                  xs={12}
                  md={5}
                  position="relative"
                  borderRadius={"10px"}
                  border={`2px solid ${
                    watch("paket") == val.fields.namaPaket ? "blue" : "#bdbd"
                  }`}
                  sx={{ cursor: "pointer !important" }}
                  // onClick={(e)=> alert(e.currentTarget.)}
                >
                  <input
                    {...register("paket", {
                      required: "Pilih kelas dahulu ya",
                    })}
                    type="radio"
                    value={val.fields.namaPaket}
                    style={{ position: "absolute", opacity: 0 }}
                  />
                  <Stack
                    direction="row"
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    mb={1}
                  >
                    <Typography fontWeight={700}>
                      {val.fields.namaPaket}
                    </Typography>
                    <Chip color="sc_blue" label={val.fields.isOnline} />
                  </Stack>

                  <Stack spacing={1} alignItems="start">
                    <Typography variant="body2" color={"sc_gray.dark"}>
                      {val.fields.bahasa}
                    </Typography>
                    <Typography variant="body2" color={"sc_gray.dark"}>
                      {val.fields.tanggal}
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      <Typography
                        variant="body2"
                        color={"sc_gray.dark"}
                        sx={{
                          textDecoration: "line-through",
                        }}
                      >
                        {val.fields.hargaNormal}
                      </Typography>
                      <Typography variant="body2" color={"sc_gray.dark"}>
                        {val.fields.hargaDiskon}
                      </Typography>
                    </Stack>
                    <Typography variant="body2" color={"sc_blue.main"}>
                      {val.fields.waktu}
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            ))}
        </Grid>
      </FormGroup>
      <FormHelperText>{errors[name]?.message ?? ""}</FormHelperText>
    </FormControl>
  );
}

export default Mykelas
