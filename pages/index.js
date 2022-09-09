import { Typography } from "@mui/material";
import Head from "next/head";
import Section1 from "../components/section/Section1";
import Section2 from "../components/section/Section2";

export default function Home() {
  return (
    <div>
      <Head>
        <title>StartupCampus</title>
        <meta name="description" content="Official Website of StartupCampus" />
      </Head>
      <Section1 />
      <Section2 />
    </div>
  );
}
