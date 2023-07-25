import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    data: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: ''
}


export const CustomerReview = createAsyncThunk('review/getreview', async (page, { rejectWithValue }) => {
    try {
        const response = await axios.get(`http://10.10.10.29:5000/api/v1/about/getCustomerReview`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})


export const getCustomerReviewSlice = createSlice({
    name: 'about',
    initialState,
    extraReducers: {
        [CustomerReview.pending]: (state) => {
            state.isLoading = true;
        },
        [CustomerReview.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = payload;
        },
        [CustomerReview.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.errorMessage = payload
        }
    }
})

export default getCustomerReviewSlice.reducer;