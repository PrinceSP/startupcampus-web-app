import { Box, Container, Typography } from "@mui/material";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import Section1 from "../components/homeSection/Section1";
import Section2 from "../components/homeSection/Section2";
import Section3 from "../components/homeSection/Section3";
import Section4 from "../components/homeSection/Section4";
import Section5 from "../components/homeSection/Section5";
import Section6 from "../components/homeSection/Section6";
import Section7 from "../components/homeSection/Section7";
import Section8 from "../components/homeSection/Section8";
import Section9 from "../components/homeSection/Section9";
import Section10 from "../components/homeSection/Section10";
import BubbleChat from "../components/BubbleChat";
import { createClient } from "contentful";

export default function Home({ logo }) {
  return (
    <Fragment>
      <Head>
        <title>StartupCampus</title>
        <meta name="description" content="Official Website of StartupCampus" />
      </Head>
      <BubbleChat />
      <Container>
        <Section1 />
        <Section2 logo={logo} />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
      </Container>
      <Section10 />
    </Fragment>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "logoCompany" });

  return {
    props: {
      logo: res.items,
    },
  };
}
