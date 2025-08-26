import Banner from "./Banner"
import TrendingSongs from "./TrendingSongs"
import TopPlayedSongs from "./TopPlayedSongs"

const Main = () => {
  return (
    <section className='min-h-screen md:py-4'>
        <Banner/>
        <TopPlayedSongs/>
        <TrendingSongs/>
    </section>
  )
}

export default Main