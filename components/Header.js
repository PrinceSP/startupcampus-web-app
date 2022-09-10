import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Container,
  Divider,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import Image from "next/image";
import { ExpandMoreRounded, ShoppingCartOutlined } from "@mui/icons-material";
import MyButton from "./MyButton";
import Dropdown from "./Dropdown";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export default function Header() {
  function NavItem({ children }) {
    return (
      <Typography
        fontSize={14}
        fontWeight={700}
        color="sc_black.main"
        sx={{
          position: "relative",
          "&::before": {
            transition: ".3s",
            content: "''",
            position: "absolute",
            width: "0%",
            height: "5px",
            borderRadius: "100px",
            bottom: "-50%",
            backgroundColor: "sc_blue.main",
          },
          "&:hover::before": {
            width: "100%",
          },
        }}
      >
        {children}
      </Typography>
    );
  }

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color="transparent" elevation={0} position="absolute">
          <Container>
            <Toolbar
              sx={{
                justifyContent: { sm: "space-between", xs: "space-between" },
                alignItems: "center",
                my: { xs: 2, sm: 4 },
                px: "0 !important",
              }}
            >
              <Box component="div">
                <Link href="/">
                  <Image
                    src={"/images/SC-Logo-Full.png"}
                    width={101}
                    height={33}
                  />
                </Link>
              </Box>

              <Stack
                direction="row"
                spacing={4}
                sx={{
                  flexGrow: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  display: { md: "flex", sm: "none", xs: "none" },
                }}
                component={"nav"}
              >
                {/* LIST LINKS */}

                <Dropdown>
                  <NavItem>Program</NavItem>
                </Dropdown>
                <Dropdown>
                  <NavItem>Tentang Kami</NavItem>
                </Dropdown>
                <Link href={"/testimoni"} underline="none">
                  <NavItem>Testimoni</NavItem>
                </Link>
                <Link href={"/blog"} underline="none">
                  <NavItem>Blog</NavItem>
                </Link>
              </Stack>

              <Stack
                direction="row"
                alignItems={"center"}
                justifyContent="center"
                sx={{
                  flexGrow: 0,
                  display: { md: "flex", sm: "none", xs: "none" },
                }}
              >
                <MyButton>Daftar sekarang</MyButton>
              </Stack>

              {/* Only MOoile  */}
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ display: { xs: "block", sm: "block", md: "none" } }}
                onClick={toggleDrawer("left", true)}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <Drawer
        sx={{ display: { xs: "block", sm: "block", md: "none" } }}
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </>
  );
}
