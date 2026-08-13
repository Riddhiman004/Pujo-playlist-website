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

let playerOpen = false;

function openPlaylist(type) {
    const playlist = playlists[type];
    const spotifyPlayer = document.getElementById("spotify-player");
    const musicPlayer = document.getElementById("music-player");

    document.getElementById("playlist-small-title").textContent = playlist.smallTitle;
    document.getElementById("playlist-title").textContent = playlist.title;
    document.getElementById("playlist-description").textContent = playlist.description;

    document.getElementById("player-title").textContent = playlist.title;
    document.getElementById("player-subtitle").textContent = "Spotify • Pujo Playlist";

    // Only change the source when switching playlists.
    // Do NOT clear it when returning home, so playback can continue.
    if (spotifyPlayer.src !== playlist.spotify) {
        spotifyPlayer.src = playlist.spotify;
    }

    document.querySelector(".hero").style.display = "none";
    document.getElementById("playlist-section").style.display = "block";

    musicPlayer.classList.add("expanded");
    playerOpen = true;

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function goHome() {
    // IMPORTANT: Do not clear the Spotify iframe.
    // Keeping it alive lets Spotify continue playing while the site is on the home screen.
    document.getElementById("playlist-section").style.display = "none";
    document.querySelector(".hero").style.display = "flex";

    const musicPlayer = document.getElementById("music-player");
    musicPlayer.classList.remove("expanded");
    playerOpen = false;

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function togglePlayer() {
    const musicPlayer = document.getElementById("music-player");

    playerOpen = !playerOpen;
    musicPlayer.classList.toggle("expanded", playerOpen);
}
