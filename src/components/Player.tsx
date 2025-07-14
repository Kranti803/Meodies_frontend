import {
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Repeat,
  Shuffle,
  Play,
  VolumeX,
} from "lucide-react";
import song1 from "../assets/song1.png";
import dhinkachika from "../assets/Amrita Kak - Dhinka Chika (From  Ready ).mp3";
import savanAayaHai from "../assets/Arijit Singh - Sawan Aaya Hai (From  Creature 3D ).mp3";
import mainAgarKahoon from "../assets/Main Agar Kahoon Om Shanti Om Shahrukh Khan,Deepika Padukone Sonu Nigam,Shreya Ghosal.mp3";
import jaadoKiJhappi from "../assets/Mika Singh - Jadoo Ki Jhappi.mp3";
import ratanLambiyan from "../assets/Raataan Lambiyan - Shershaah Sidharth – Kiara Tanishk B. Jubin Asees.mp3";
import saathiyaa from "../assets/Shreya Ghoshal - Saathiyaa (From  Singham ).mp3";

import { useEffect, useRef, useState } from "react";

//songs array
const songs = [
  {
    name: "Dhinka Chika",
    src: dhinkachika,
  },
  {
    name: "Savan Aaya Hai",
    src: savanAayaHai,
  },
  {
    name: "Main Agar Kahoon",
    src: mainAgarKahoon,
  },
  {
    name: "Jaado Ki Jhappi",
    src: jaadoKiJhappi,
  },
  {
    name: "Ratan Lambiyan",
    src: ratanLambiyan,
  },
  {
    name: "Saathiyaa",
    src: saathiyaa,
  },
];

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isMute, setIsMute] = useState(false);
  const [autoPlay, setAutoplay] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentSongDuration, setCurrentSongDuration] = useState("0:00");
  console.log(currentSongDuration)

  const handleSongDuration=()=>{
    if(audioRef.current?.duration){
      setCurrentSongDuration((audioRef.current.duration).toString())
    }
  }

  const currentSongRef = useRef(0);
  console.log(audioRef);

  const handlePlay = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      audioRef?.current?.play();
    } else {
      setIsPlaying(false);
      audioRef?.current?.pause();
    }
  };

  const handleNext = () => {
    if (currentSongRef.current < songs.length - 1) {
      currentSongRef.current += 1;
      setIsPlaying(true);
      setCurrentSong(currentSongRef.current);
      setAutoplay(true);
    }
  };

  const handlePrev = () => {
    if (currentSongRef.current === 0) {
      // Restart song if already at the first one
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        setIsPlaying(true);
        setAutoplay(true);
      }
      return;
    }

    currentSongRef.current -= 1;
    setCurrentSong(currentSongRef.current);
    setIsPlaying(true);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const handleSongEnded = () => setIsPlaying(false);
    audioRef.current?.addEventListener("ended", handleSongEnded);
    return () =>
      audioRef.current?.removeEventListener("ended", handleSongEnded);
  }, []);

  return (
    <>
      {/* audio tag */}
      <audio
        className="hidden"
        ref={audioRef}
        src={songs[currentSong].src} // change this to your audio URL or file
        controls
        controlsList="nodownload"
        loop={isRepeat}
        muted={isMute}
        autoPlay={autoPlay}
      />
      <div className="h-28 fixed bottom-0 left-0 right-0 bg-[#1f1f1f] text-white shadow-lg px-4 py-3 flex items-center justify-center sm:justify-between z-50">
        {/* Song Info */}
        <div className="hidden sm:flex items-center gap-3 w-1/3 ">
          <img
            src={song1}
            alt="Cover"
            className="w-12 h-12 object-cover rounded-md md:block hidden"
          />
          <div>
            <h4 className="text-sm font-semibold truncate">
              {songs[currentSong].name}
            </h4>
            <p className="text-xs text-gray-400">The Neighbourhood</p>
          </div>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center gap-1 w-1/3">
          <div className="flex items-center gap-8 sm:gap-4">
            {/* Shuffle */}
            <button
              className="
             text-[#62d962]hover:text-[#62d962] cursor-pointer border-none outline-none"
            >
              <Shuffle size={18} />
            </button>

            <button
              onClick={handlePrev}
              className="hover:text-[#62d962] cursor-pointer border-none outline-none"
            >
              <SkipBack size={20} />
            </button>

            <button
              onClick={handlePlay}
              className="bg-[#62d962] text-white p-2 rounded-full hover:scale-105 transition cursor-pointer border-none outline-none"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>

            <button
              onClick={handleNext}
              className="hover:text-[#62d962] cursor-pointer border-none outline-none"
            >
              <SkipForward size={20} />
            </button>

            {/* Repeat */}
            <button
              onClick={() => setIsRepeat(!isRepeat)}
              className="text-[#62d962]hover:text-[#62d962] cursor-pointer border-none outline-none"
            >
              {isRepeat ? (
                <Repeat size={18} className="text-[#62d962]" />
              ) : (
                <Repeat size={18} />
              )}
            </button>
          </div>

          {/* Progress bar */}
          <div className="flex items-center justify-center gap-2 w-full text-xs text-gray-400 mt-2">
            <span>0:00</span>
            <input
              type="range"
              min="0"
              max="100"
              className="w-5xl h-1 accent-[#62d962] cursor-pointer"
            />
            <span>
              {currentSongDuration}
            </span>
          </div>
        </div>

        {/* Volume */}
        <div className="hidden sm:flex items-center gap-2 w-1/3 justify-end">
          <button
            className="border-none outline-none cursor-pointer"
            onClick={() => setIsMute(!isMute)}
          >
            {isMute ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          <input
            type="range"
            min="0"
            max="100"
            className="w-24 h-1 accent-[#62d962] cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;
