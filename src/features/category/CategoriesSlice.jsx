import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetCategories = createAsyncThunk("get", async (_, thunkAPI) => {
    try {
        const response = await axios.get("http://localhost:3004/categories")
        return response.data
    }
    catch (error) {
        console.log(error);
    }
})

const CategorySlice = createSlice({
    name: "category",
    initialState: {
        category: [],
        loading: false,
        error: ""
    },
    extraReducers: {
        [GetCategories.pending]: (state) => {
            state.loading = true
        },
        [GetCategories.fulfilled]: (state, action) => {
            state.category = action.payload
            state.loading = false
            state.error = ""
        },
        [GetCategories.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})
export default CategorySlice.reducer

