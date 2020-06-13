import { combineReducers} from "redux";

const songsReducer = () => {
    return [
        {title: "Its cool", duration:"4:04"},
        {title: "Its warm", duration:"3:04"},
        {title: "Its spring", duration:"2:04"},
        {title: "Its fall", duration:"1:04"}
    ];
}

const selectedSongReducer = (selectedSong = null , action ) => {

    if(action.type === "SONG_SELECTED") {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong:  selectedSongReducer
})