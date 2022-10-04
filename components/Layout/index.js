import { Box } from "@mui/material";
import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Box component="div" minHeight="100vh">
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
