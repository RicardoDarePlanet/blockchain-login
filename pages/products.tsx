import Head from 'next/head'
import { Inter } from 'next/font/google'
import HomeB from '@/components/HomeB'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Products() {
  return (
    <>
      <Head>
        <title>Blockchain</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <HomeB></HomeB>
    </>
  )
}
