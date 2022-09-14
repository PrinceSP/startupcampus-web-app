import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

function BubbleChat() {
  return (
    <Box
      sx={{
        position: "fixed",
        zIndex: 99,
        bottom: 0,
        right: 0,
        m: 7,
        backgroundColor: "#4ECB5C",
        borderRadius: "50%",
        p: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "5px solid white",
        boxShadow: "0px 8px 20px rgba(112, 144, 176, 0.2)",
        cursor: "pointer",
      }}
    >
      <Box>
        <Image src={"/images/wa_logo.png"} width={30} height={30} />
      </Box>
    </Box>
  );
}

export default BubbleChat;
