import { useContext, useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import Head from "next/head";
import {Section1,Section2,Section3,Section4,Section5,Section6,Section7,Section8,Section9,Section10} from "../components";
import BubbleChat from "../components/BubbleChat";
import { createClient } from "contentful";
import { TaglineContext } from "./_app";

const Home = ({ logo, testimoni, course, tagline, title7 })=>{
  const { setTagline } = useContext(TaglineContext);
  setTagline(tagline);
  return (
    <>
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
    </>
  );
}

export const getStaticProps=async()=>{
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

export default Home
