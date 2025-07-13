import Banner from "./Banner"
import MusicPlayer from "./Player"
import Songs from "./Songs"
import WeeklyTopSongs from "./WeeklyTopSongs"

const Main = () => {
  return (
    <section className='min-h-screen pt-2 md:py-4'>
        <Banner/>
        <WeeklyTopSongs/>
        <WeeklyTopSongs/>
        <Songs/>
        <MusicPlayer/>
    </section>
  )
}

export default Main