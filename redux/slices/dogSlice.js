import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchDogList = createAsyncThunk("dog/fetchDogList",
    async () =>
    {
        try
        {
            const API_URL = "https://raw.githubusercontent.com/DevTides/DogsApi/master/dogs.json";
            const response = await fetch(API_URL);
            const responseJSON = await response.json();
            return {
                doneLoading: true,
                data: responseJSON
            };
        }
        catch {
            return {};
        }
    }
);

const init = {
    doneLoading: false,
    data: [
        { id: 0, name: "", bred_for: "", url: "" }
    ]
}

export const dogSlice = createSlice({
    name: 'dog',
    initialState: init,
    reducers: {},
    extraReducers: {
        [fetchDogList.fulfilled]: (state, action) =>
        {
            return action.payload;
        }
    }
})

// export const { } = dogSlice.actions

export default dogSlice.reducer