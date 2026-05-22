import { createSlice } from "@reduxjs/toolkit";
import { addcategory, deletcategory, deletecategory, getallcategoryaction, updatecategory } from "../actions/categoryaction";

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
            })
            .addCase(addcategory.pending, (state) => {
                state.isFetching = true;
                state.error = null;
            })
            .addCase(addcategory.fulfilled, (state, { payload }) => {
                state.isFetching = false;
                state.error = null;
                state.categories.push(payload);
            })
            .addCase(addcategory.rejected, (state, { payload }) => {
                state.isFetching = false;
                state.error = payload;
            })
            .addCase(updatecategory.pending, (state) => {
                state.isFetching = true;
                state.error = null;
            })
            .addCase(updatecategory.fulfilled, (state, { payload }) => {
                state.isFetching = false;
                state.error = null;
                const index = state.categories.findIndex((cat) => cat.id === payload.id);
                if (index !== -1) {
                    state.categories[index] = payload;
                }
            })
            .addCase(updatecategory.rejected, (state, { payload }) => {
                state.isFetching = false;
                state.error = payload;
            })
            .addCase(deletecategory.pending, (state) => {
                state.isFetching = true;
                state.error = null;
            })
            .addCase(deletecategory.fulfilled, (state, { payload }) => {
                state.isFetching = false;
                state.error = null;
              /*   state.categories = state.categories.filter((cat) => cat.id !== payload.id); */
            })
            .addCase(deletecategory.rejected, (state, { payload }) => {
                state.isFetching = false;
                state.error = payload;
            });

    },
});

export default categorySlice.reducer;
