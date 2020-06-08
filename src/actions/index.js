//Select song Action Creator

const SelectSong = (song) => {
    //Return an action
return {
    type: "SONG_SELECTED",
    payload: song
}
}

export {SelectSong};