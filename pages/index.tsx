import Head from 'next/head'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import requests from '@/utils/requests'
import { Movie } from '@/typings'
import Row from '@/components/Row'
interface Props {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[],
  actionMovies: Movie[],
  comedyMovies: Movie[],
  horrorMovies: Movie[],
  romanceMovies: Movie[],
  documentaries: Movie[],
}

const Home = ({
  trendingNow,
  netflixOriginals,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries, }: Props) => {
  // console.log(netflixOriginals)
  return (
    <div className='relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]'>
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <Header />

      <main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16'>
        <Banner horrorMovies={horrorMovies} />
        <section>
        <Row title="Trending Now" movies={trendingNow}/>
        <Row title="Top Rated" movies={topRated}/>
        <Row title="Action Thrillers" movies={actionMovies}/>
        <Row title="Comedies" movies={comedyMovies}/>
        <Row title="Scary Movies" movies={horrorMovies}/>
        <Row title="Romance Movies" movies={romanceMovies}/>
        <Row title="Documentaries" movies={documentaries}/>
        </section>

      </main>
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const [
    trendingNow,
    netflixOriginals,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchTopActionMovies).then((res) => res.json()),
    fetch(requests.fetchTopComedyMovies).then((res) => res.json()),
    fetch(requests.fetchTopHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchTopRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json())
  ]);
  return {
    props: {
      trendingNow: trendingNow.results,
      netflixOriginals: netflixOriginals.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    }
  }
}