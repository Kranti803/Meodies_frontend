import Banner from "./Banner"
import Songs from "./Songs"
import TopPlayedSongs from "./WeeklyTopSongs"

const Main = () => {
  return (
    <section className='min-h-screen pt-2 md:py-4'>
        <Banner/>
        <TopPlayedSongs/>
        <Songs/>
    </section>
  )
}

export default Main