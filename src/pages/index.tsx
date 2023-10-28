import Head from 'next/head'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import SidebarWithHeader from '@/components/Bar/sidebar'


export default function Home() {
  return (
    <>
      <Head>
        <title>Alain Terrieur & co.</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SidebarWithHeader/>
      </main>
    </>
  )
}
