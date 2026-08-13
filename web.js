const playlists = {

    oldGold: {

        title: "OLD GOLD",

        smallTitle: "🪔 OG",

        description:
            "The timeless sounds of Durga Puja.",

        spotify:
            "https://open.spotify.com/embed/playlist/7yDMyLZsCzpd2UgO0pSW6X"

    },


    newDance: {

        title: "NEW DANCE PUJO",

        smallTitle: "💃 NEW",

        description:
            "Fresh beats for the modern Pujo.",

        spotify:
            "https://open.spotify.com/embed/playlist/3m08Mi2M4F2JWMsCas3uAW"

    }

};


/* =========================================
   OPEN PLAYLIST
========================================= */

function openPlaylist(type) {

    const playlist =
        playlists[type];


    document.getElementById(
        "playlist-small-title"
    ).textContent =
        playlist.smallTitle;


    document.getElementById(
        "playlist-title"
    ).textContent =
        playlist.title;


    document.getElementById(
        "playlist-description"
    ).textContent =
        playlist.description;


    const spotifyPlayer =
        document.getElementById(
            "spotify-player"
        );


    const comingSoon =
        document.getElementById(
            "coming-soon"
        );


    if (playlist.spotify) {

        spotifyPlayer.src =
            playlist.spotify;

        spotifyPlayer.style.display =
            "block";

        comingSoon.style.display =
            "none";

    }

    else {

        spotifyPlayer.src = "";

        spotifyPlayer.style.display =
            "none";

        comingSoon.style.display =
            "flex";

    }


    document.querySelector(
        ".hero"
    ).style.display =
        "none";


    document.getElementById(
        "playlist-section"
    ).style.display =
        "block";


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =========================================
   BACK TO PUJO
========================================= */

function goHome() {

    const spotifyPlayer =
        document.getElementById(
            "spotify-player"
        );


    /*
       Remove Spotify iframe source.
       This stops the currently playing
       Spotify content when returning home.
    */

    spotifyPlayer.src = "";


    document.getElementById(
        "playlist-section"
    ).style.display =
        "none";


    document.querySelector(
        ".hero"
    ).style.display =
        "flex";


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}