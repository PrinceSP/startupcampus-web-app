import { Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import React from "react";

function Board() {
  return (
    <Stack
      p={4}
      direction={{ xs: "column", md: "row" }}
      spacing={4}
      alignItems={{ xs: "start", md: "center" }}
      sx={{
        backgroundColor: "white",
        boxShadow: "0px 16px 40px rgba(43, 44, 39, 0.2)",
        borderRadius: "16px",
        position: "relative",
        top: "-50%",
      }}
    >
      <Stack direction="row" spacing={1} justifyContent={"center"}>
        <CalendarMonthIcon color={"sc_blue"} />
        <Typography fontWeight={700}>Kelas Terdekat</Typography>
      </Stack>

      <Divider orientation={{ xs: "horizontal", md: "vertical" }} flexItem />

      <Stack justifyContent={"flex-start"}>
        <Stack direction="row" spacing={1}>
          <VideoLibraryIcon color={"sc_blue"} fontSize="small" />
          <Typography variant="body2" color={"sc_gray.dark"}>
            Skills Level Up!
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Typography fontWeight={700}>23 Sep - 25 Feb 2023</Typography>
          <Link href="#">
            <Typography>Lihat Detail</Typography>
          </Link>
        </Stack>
      </Stack>

      <Divider orientation={{ xs: "horizontal", md: "vertical" }} flexItem />

      <Stack justifyContent={"flex-start"}>
        <Stack direction="row" spacing={1}>
          <VideoLibraryIcon color={"sc_blue"} fontSize="small" />
          <Typography variant="body2" color={"sc_gray.dark"}>
            Studi Independen (Kampus Merdeka)
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Typography fontWeight={700}>25 Okt - 27 Mar 2023</Typography>
          <Link href="#">
            <Typography>Lihat Detail</Typography>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Board;
