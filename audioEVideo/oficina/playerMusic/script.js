const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const playingSong = document.getElementById("player-song-title");
const songArtist = document.getElementById("player-song-artist");

const allSongs = [
  {
    id: 0,
    title: "Hello World",
    artist: "Rafael",
    duration: "0:23",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/hello-world.mp3",
  },
  {
    id: 1,
    title: "In the Zone",
    artist: "Rafael",
    duration: "0:11",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/in-the-zone.mp3",
  },
  {
    id: 2,
    title: "Camper Cat",
    artist: "Rafael",
    duration: "0:21",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/camper-cat.mp3",
  },
  {
    id: 3,
    title: "Electronic",
    artist: "Rafael",
    duration: "0:15",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/electronic.mp3",
  },
  {
    id: 4,
    title: "Sailing Away",
    artist: "Rafael",
    duration: "0:22",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/sailing-away.mp3",
  },
];
const audio = new Audio();

const userData = {
  songs: allSongs,
  currentSong: null,
  songCurrentTime: 0,
};

const playSong = (id, start = true) =>{

  const song = userData.songs.find(song => song.id === id);
  audio.src = song.src;
  audio.title = song.title;

  if(userData.currentSong === null || start){
    audio.currentTime = 0;
  }else{
    audio.currentTime = userData.songCurrentTime;
  }

  playButton.classList.add("playing");
  userData.currentSong = song;
  highlightCurrentSong();
  setPlayerDisplay();
  setPlayButtonAccessibleText();
  audio.play();
}

const pauseSong = () =>{
  userData.songCurrentTime = audio.currentTime;
  playButton.classList.remove("playing");
  audio.pause();
}

const getCurrentSongIndex = () => {
    if (userData.currentSong === null) {
    return -1;
  }

  return userData.songs.indexOf(userData.currentSong);
}
const getNextSong = () => {
  const currentSongIndex = getCurrentSongIndex();
  return userData.songs[currentSongIndex + 1];
};
function getPreviousSong() {
  const currentSongIndex = getCurrentSongIndex();
  return userData.songs[currentSongIndex - 1];
}

const playPreviousSong = () => {
  if(userData.currentSong === null){
    return;
  }
  const previousSong = getPreviousSong();

  if (previousSong === undefined) {
    playSong(userData.songs[0].id);
  } else {
    playSong(previousSong.id);
  }
};
const playNextSong = () => {
  if (userData.currentSong === null) {
    playSong(userData.songs[0].id);
    
    return;
  }

  const nextSong = getNextSong();

  if (nextSong) {
    playSong(nextSong.id);
    return;
  }

  userData.currentSong = null;
  userData.songCurrentTime = 0;
  setPlayerDisplay();
  setPlayButtonAccessibleText();
  highlightCurrentSong();
  pauseSong();
};

const setPlayerDisplay = () => {
  playingSong.textContent = userData.currentSong?.title || "";
  songArtist.textContent = userData.currentSong?.artist || "";
};

const highlightCurrentSong = () => {
  const previousCurrentSong = document.querySelector('.playlist-song[aria-current="true"]');
  previousCurrentSong?.removeAttribute("aria-current");
  
};

const setPlayButtonAccessibleText = () => {
  playButton.setAttribute(
    "aria-label",
    userData.currentSong === null
      ? "Play"
      : `Play ${userData.currentSong.title}`
  );
};

playButton.addEventListener("click", () => {
  if(userData.currentSong === null){
    playSong(userData.songs[0].id);
  }else {
    playSong(userData.currentSong.id , false);
  }
});

const songs = document.querySelectorAll(".playlist-song");

songs.forEach((song) => {
  const id = song.getAttribute("id").slice(5);
  const songBtn = song.querySelector("button");
  songBtn.addEventListener("click", () => {
    playSong(Number(id));
  });
});

pauseButton.addEventListener("click", 
  pauseSong
);

nextButton.addEventListener("click", playNextSong);
previousButton.addEventListener("click", playPreviousSong);

audio.addEventListener("ended", playNextSong);