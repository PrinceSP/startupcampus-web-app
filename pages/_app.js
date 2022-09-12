import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";

let theme = createTheme({
  typography: {
    fontFamily: ["Sora", "Sans serif"].join(","),
  },
  palette: {
    sc_blue: {
      main: "#0056D2",
      dark: "#003B8F",
      contrastText: "#FFFF",
    },
    sc_yellow: {
      main: "#FDB72B",
      dark: "#DFA00E",
    },
    sc_black: {
      main: "#2B2C27",
    },
    sc_gray: {
      main: "#F3F5F5",
      dark: "#69686B",
    },
    sc_white: {
      main: "#FFFFFF",
    },
  },
});

theme = responsiveFontSizes(theme);

function MyApp({ Component, pageProps }) {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {pageLoaded ? <Component {...pageProps} /> : null}
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
