import { Typography } from "@mui/material";
import Head from "next/head";
import { Fragment } from "react";
import Section1 from "../components/section/Section1";
import Section2 from "../components/section/Section2";
import Section3 from "../components/section/Section3";
import Section4 from "../components/section/Section4";
import Section5 from "../components/section/Section5";
import Section6 from "../components/section/Section6";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>StartupCampus</title>
        <meta name="description" content="Official Website of StartupCampus" />
      </Head>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </Fragment>
  );
}
