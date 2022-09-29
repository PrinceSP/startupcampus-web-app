import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "../components/Layout";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
    sc_sky: {
      main: "#80AAE8",
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
    AOS.init();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      {pageLoaded ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : null}
    </ThemeProvider>
  );
}

export default MyApp;
