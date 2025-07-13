import Banner from "./Banner"
import WeeklyTopSongs from "./WeeklyTopSongs"

const Main = () => {
  return (
    <section className='min-h-screen pt-2 md:py-4'>
        <Banner/>
        <WeeklyTopSongs/>
    </section>
  )
}

export default Main