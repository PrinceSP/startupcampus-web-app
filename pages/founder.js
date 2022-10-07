import React from 'react'
import {SectionFounder1,SectionFounder2,SectionFounder3,SectionFounder4,Section2,SectionFounder5,SectionFounder6,SectionFounder7,SectionFounder8,SectionFounder9,SectionFounder10} from '../components'
import Head from "next/head";
import { createClient } from "contentful";

const Founder = ({logo,faq}) => {
  return (
    <>
      <Head>
        <title>Founder | Startup Campus</title>
      </Head>
      <SectionFounder1/>
      <SectionFounder2/>
      <SectionFounder3/>
      <SectionFounder4/>
      <Section2 logo={logo}/>
      <SectionFounder5/>
      <SectionFounder6/>
      <SectionFounder7/>
      <SectionFounder8/>
      <SectionFounder10/>
      <SectionFounder9 faq={faq} showBtn={false}/>
    </>
  )
}

export const getStaticProps=async()=>{
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const { items: logo } = await client.getEntries({
    content_type: "logoCompany",
  });

  const { items: faq } = await client.getEntries({
    content_type: "faq",
    order: "sys.createdAt",
  });

  return {
    props: {
      logo,
      faq,
    },
    revalidate: 1,
  };
}

export default Founder
