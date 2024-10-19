import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
        name: "movies",
        initialState: {
            nowPlayingMovies: null
        },
        reducers: {
            addNowPlayingMovies: (state, action) => {
                state.nowPlayingMovies = action.payload;
            },
            removeMovie: (state, action) => {
                return state.filter((movie) => movie.id!== action.payload);
            },
            updateMovie: (state, action) => {
                return state.map((movie) =>
                    movie.id === action.payload.id? action.payload : movie
                );
            },
        },
});

export const { addNowPlayingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;