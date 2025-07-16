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
  const [currentSongDuration, setCurrentSongDuration] = useState(0);
  const [currentSongTotalDuration, setCurrentSongTotalDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentSongRef = useRef(0);

  const handlePlay = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      audioRef?.current?.play();
    } else {
      setIsPlaying(false);
      audioRef?.current?.pause();
    }
  };

  const handleSeekTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) audioRef.current.currentTime = Number(e.target.value);
  };

  const handleCurrentSongVolume = () => {
    if (audioRef.current) {
      setVolume(audioRef.current.volume);
    }
  };

const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const newVolume = Number(e.target.value);
  if (audioRef.current) {
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
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

  const handleSongTotalDuration = () => {
    if (audioRef.current) {
      setCurrentSongTotalDuration(Math.floor(audioRef.current.duration));
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setCurrentSongDuration(audio.currentTime);
    };

    audio.addEventListener("timeupdate", updateTime);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const handleSongEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", handleSongEnded);
    return () => audio.removeEventListener("ended", handleSongEnded);
  }, []);

  return (
    <>
      {/* audio tag */}
      <audio
        className="hidden"
        ref={audioRef}
        src={songs[currentSong].src}
        controls
        controlsList="nodownload"
        loop={isRepeat}
        muted={isMute}
        autoPlay={autoPlay}
        onLoadedMetadata={() => {
          handleCurrentSongVolume();
          handleSongTotalDuration();
        }}
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
            <button className=" hover:text-[#62d962] cursor-pointer border-none outline-none">
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
              className="hover:text-[#62d962] cursor-pointer border-none outline-none"
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
            <span>
              {new Date(currentSongDuration * 1000)
                .toISOString()
                .substring(14, 19)}
            </span>
            <input
              type="range"
              min="0"
              max={currentSongTotalDuration}
              value={currentSongDuration}
              onChange={(e) => handleSeekTime(e)}
              className="w-5xl h-1 accent-[#62d962] cursor-pointer"
            />
            <span>
              {new Date(currentSongTotalDuration * 1000)
                .toISOString()
                .substring(14, 19)}
            </span>
          </div>
        </div>

        {/* Volume */}
        <div className="hidden sm:flex items-center gap-2 w-1/3 justify-end">
          <button
            className="border-none outline-none cursor-pointer"
            onClick={() => setIsMute(!isMute)}
          >
            {(isMute===true || volume===0)? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => handleVolumeChange(e)}
            className="w-24 h-1 accent-[#62d962] cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;
