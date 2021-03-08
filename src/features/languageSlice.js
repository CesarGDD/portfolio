import {createSlice} from '@reduxjs/toolkit';

export const languageSlice = createSlice({
    name: 'language',
    initialState: {
        language: true
    },
    reducers: {
        language: (state, action) => {
            state.language = action.payload;
        }
    }
});

export const {language} = languageSlice.actions;
export const selectLanguage = state => state.language;

export default languageSlice.reducer;