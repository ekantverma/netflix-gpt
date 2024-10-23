import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
        name: "movies",
        initialState: {
            nowPlayingMovies: null,
            trailerVedio: null,
            popularMovies: null,
            topRatedMovies: null,
            upcomingMovies: null,
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
            addTrailerVedio: (state, action) => {
                state.trailerVedio = action.payload;
            },
            addPopularMovies: (state, action) => {
                state.popularMovies = action.payload;
            },
            addTopRatedMovies: (state, action) => {
                state.topRatedMovies = action.payload;
            },
            addUpcomingMovies: (state, action) => {
                state.upcomingMovies = action.payload;
            },
        },
});

export const { addNowPlayingMovies, addTrailerVedio, addPopularMovies, addTopRatedMovies, addUpcomingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;