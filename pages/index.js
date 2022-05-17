import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

// custom components
import Layout from '../components/Layout'
import Container from '../components/Container'
import Showcase from '../components/Showcase'
import NewReleases from '../components/NewReleases'
import Col from '../components/Col'
import Button from '../components/Button'
import Heading from '../components/Heading'
import TracksByGenre from '../components/TracksByGenre'
import Paragraph from '../components/Paragraph'
import Row from '../components/Row'

import { getAlbums } from '../lib/api'

export async function getStaticProps() {
  const albums = await getAlbums()
  return {
    props: {
      albums
    }
  }
}

export default function Home( {albums} ) {
  return (
    <Layout>
      <Head>
        <title>Spotify IST 363</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="this is a summary of my website" />
      </Head>
      <Container>
          <Showcase />
          <NewReleases items={albums}/>
      </Container>
      
      {/*<TracksByGenre items={tracks}/>*/}

    </Layout>
  )
}
