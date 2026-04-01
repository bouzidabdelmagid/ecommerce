import { createSlice } from "@reduxjs/toolkit";
import { getallcategoryaction } from "../actions/categoryaction";

const initialState = {
    categories: [],
    isFetching: false,
    error: null,
};

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getallcategoryaction.pending, (state) => {
                state.isFetching = true;
                state.error = null;
            })
            .addCase(getallcategoryaction.fulfilled, (state, { payload }) => {
                state.isFetching = false;
                state.error = null;
                state.categories = payload;
            })
            .addCase(getallcategoryaction.rejected, (state, { payload }) => {
                state.isFetching = false;
                state.error = payload;
            });
    },
});

export default categorySlice.reducer;
