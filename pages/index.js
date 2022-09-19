import { Box, Container, Typography } from "@mui/material";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import Section1 from "../components/section/Section1";
import Section2 from "../components/section/Section2";
import Section3 from "../components/section/Section3";
import Section4 from "../components/section/Section4";
import Section5 from "../components/section/Section5";
import Section6 from "../components/section/Section6";
import Section7 from "../components/section/Section7";
import Section8 from "../components/section/Section8";
import Section9 from "../components/section/Section9";
import Section10 from "../components/section/Section10";
import BubbleChat from "../components/BubbleChat";
import { createClient } from "contentful";

export default function Home() {
  // const [content, setcontent] = useState(null);
  // const client = createClient({
  //   space: "s44tcu9ptufv",
  //   accessToken: "-6ovkKHLKM0-lwOpnZuQmyt4wZNmQAnsOy7TX_BgPJw",
  // });

  // useEffect(() => {
  //   const fetch = async () => {
  //     const res = await client.getEntries({ content_type: "faq" });
  //     console.log(res.items[0].fields);
  //     setcontent(res.items);
  //   };

  //   fetch();
  // }, []);
  return (
    <Fragment>
      <Head>
        <title>StartupCampus</title>
        <meta name="description" content="Official Website of StartupCampus" />
      </Head>
      <BubbleChat />
      <Container>
        {/* {content?.map((item, id) => (
          <Box key={id}>
            <Typography>{item.fields.question ?? "Loading..."}</Typography>
            <Typography>{item.fields.answer ?? "Loading..."}</Typography>
          </Box>
        ))} */}
        <Section1 />
        <Section2 />
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
