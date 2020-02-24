const songsReducer = () => {
    return [
        { title: "NoScrubs", duration: "4:05" },
        { title: "Macarena", duration: "2:55" },
        { title: "All star", duration: "3:15" },
        { title: "I want it that way", duration: "1:45" }
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }
    return selectedSong;
};