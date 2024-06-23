import { createSlice } from "@reduxjs/toolkit";

export const savedSlice = createSlice({
	name: 'saved',
	initialState: {
		saved: []
	},
	reducers: {
		addToSaved: (state, action) => {
			state.saved.push(action.payload)
		},
		removeFromSaved: (state, action) => {
      state.saved = state.saved.filter(item => item.id !== action.payload.id);
    }
	}
})

export const { addToSaved, removeFromSaved } = savedSlice.actions;

export default savedSlice.reducer;
