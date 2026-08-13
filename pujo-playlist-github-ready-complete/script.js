const playlists = {
  oldGold: {
    title: "OLD GOLD",
    smallTitle: "🪔 OG",
    description: "The timeless sounds of Durga Puja.",
    spotify: "https://open.spotify.com/embed/playlist/7yDMyLZsCzpd2UgO0pSW6X"
  },
  newDance: {
    title: "NEW DANCE PUJO",
    smallTitle: "💃 NEW",
    description: "Fresh beats for the modern Pujo.",
    spotify: "https://open.spotify.com/embed/playlist/3m08Mi2M4F2JWMsCas3uAW"
  }
};

const mainPlayer = document.getElementById("spotify-player");
const dock = document.getElementById("music-dock");
const dockPlayer = document.getElementById("music-dock-player");
const dockLabel = document.getElementById("music-dock-label");

function openPlaylist(type) {
  const playlist = playlists[type];

  document.getElementById("playlist-small-title").textContent = playlist.smallTitle;
  document.getElementById("playlist-title").textContent = playlist.title;
  document.getElementById("playlist-description").textContent = playlist.description;

  mainPlayer.src = playlist.spotify;
  mainPlayer.style.display = "block";
  document.getElementById("coming-soon").style.display = "none";

  // Keep a persistent Spotify player at the bottom of the site.
  dockPlayer.src = playlist.spotify;
  dockLabel.textContent = `${playlist.smallTitle}  •  ${playlist.title}`;
  dock.style.display = "block";

  document.querySelector(".hero").style.display = "none";
  document.getElementById("playlist-section").style.display = "block";
  window.scrollTo({top: 0, behavior: "smooth"});
}

function goHome() {
  // Do NOT clear the persistent player. This lets the player remain available.
  mainPlayer.src = "";
  document.getElementById("playlist-section").style.display = "none";
  document.querySelector(".hero").style.display = "flex";
  window.scrollTo({top: 0, behavior: "smooth"});
}
