import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    data: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: ''
}


export const Package = createAsyncThunk('packages/getpackages', async (page, { rejectWithValue }) => {
    try {
        const response = await axios.get(`http://10.10.10.29:5000/api/v1/package/getPackages`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})


export const getPackagesSlice = createSlice({
    name: 'about',
    initialState,
    extraReducers: {
        [Package.pending]: (state) => {
            state.isLoading = true;
        },
        [Package.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = payload;
        },
        [Package.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.errorMessage = payload
        }
    }
})

export default getPackagesSlice.reducer;