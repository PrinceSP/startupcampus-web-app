import React from 'react'
import {SectionFounder1,SectionFounder2,SectionFounder3} from '../components'
import Head from "next/head";

const Founder = () => {
  return (
    <>
      <Head>
        <title>Founder | Startup Campus</title>
      </Head>
      <SectionFounder1/>
      <SectionFounder2/>
      <SectionFounder3/>
    </>
  )
}

export default Founder
