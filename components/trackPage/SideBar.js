import { Divider, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { listMenu } from "../../content/sideMenu";
import MyButton from "../MyButton";

export default function SideBar() {
  return (
    <Stack
      p={4}
      spacing={3}
      sx={{
        background: "#FFFFFF",
        boxShadow: "0px 16px 40px rgba(112, 144, 176, 0.2)",
        borderRadius: "10px",
        position: "-webkit-sticky",
        position: "sticky !important",
        top: 0,
        alignSelf: "flex-start",
      }}
    >
      <Typography fontWeight={700}>Detail Program</Typography>
      <Divider />
      {listMenu.map((item, idx) => (
        <Link href={item.link} underline="none">
          <Typography fontWeight={400} variant="body2" color={"sc_gray.dark"}>
            {item.name}
          </Typography>
        </Link>
      ))}
      <MyButton onClick={() => router.push("/daftar")}>
        <Typography fontWeight={700}>Daftar Sekarang</Typography>
      </MyButton>
    </Stack>
  );
}
