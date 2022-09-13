import * as React from "react";
import Button from "@mui/material/Button";
import { ExpandLessRounded, ExpandMoreRounded } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

const NavItem = ({ children }) => (
  <Typography
    variant="body2"
    fontWeight={500}
    onMouseEnter={(e) => (e.currentTarget.style.color = "#0056D2")}
    onMouseLeave={(e) => (e.currentTarget.style.color = "unset")}
    sx={{ cursor: "pointer" }}
  >
    {children}
  </Typography>
);

export default function Dropdown({ children }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      position="relative"
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      <Button
        id="basic-button"
        disableRipple
        sx={{
          textTransform: "capitalize",
          position: "relative",
          "&::before": {
            zIndex: 2,
            transition: ".3s",
            content: "''",
            position: "absolute",
            width: open ? "100%" : "0%",
            height: "5px",
            borderRadius: "100px",
            bottom: "-20%",
            backgroundColor: "sc_blue.main",
          },

          "&:hover": {
            backgroundColor: "unset",
          },
        }}
        endIcon={
          open ? (
            <ExpandLessRounded color="sc_black" />
          ) : (
            <ExpandMoreRounded color="sc_black" />
          )
        }
      >
        {children}
      </Button>
      <Stack
        spacing={2}
        sx={{
          position: "relative",
          width: "268px",
          mt: 1,
          p: 3,
          display: open ? "block" : "none",
          position: "absolute",
          backgroundColor: "white",
          borderRadius: "15px",
          boxShadow: "0px 8px 20px rgba(43, 44, 39, 0.1)",
          "&::before": {
            position: "absolute",
            content: "''",
            background: "transparent",
            width: "100%",
            height: "20px",
            transform: "translateY(-100%)",
            top: 0,
            left: 0,
          },
        }}
      >
        <Typography variant="body1" color="#BDBDBD" fontWeight={700}>
          Program Intensif
        </Typography>
        <NavItem>Founder</NavItem>
        <NavItem>UI/UX Design</NavItem>
        <NavItem>Data Scientist</NavItem>
        <NavItem>Backend Engineer</NavItem>
        <NavItem>AI Specialist</NavItem>
      </Stack>
    </Box>
  );
}
