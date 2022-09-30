import { Box, Container, Typography } from "@mui/material";
import Head from "next/head";
import { Fragment, useContext, useEffect, useState } from "react";
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
import { TaglineContext } from "./_app";

export default function Home({ logo, testimoni, course, tagline, title7 }) {
  const { setTagline } = useContext(TaglineContext);
  setTagline(tagline);
  return (
    <Fragment>
      <Head>
        <title>StartupCampus</title>
        <meta name="description" content="Official Website of StartupCampus" />
      </Head>
      <Container>
        <Section1 tagline={tagline} />
        <Section2 logo={logo} />
        <Section3 course={course} />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 testimoni={testimoni} title={title7} />
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

  const { items: logo } = await client.getEntries({
    content_type: "logoCompany",
  });
  const { items: testimoni } = await client.getEntries({
    content_type: "testimoni",
  });

  const { items: course } = await client.getEntries({
    content_type: "course",
  });

  const { items: tagline } = await client.getEntries({
    content_type: "section1",
  });

  const { items: title7 } = await client.getEntries({
    content_type: "section7",
  });

  return {
    props: {
      logo,
      testimoni,
      course,
      tagline,
      title7,
    },
    revalidate: 1,
  };
}
