import { configureStore } from '@reduxjs/toolkit'
import productReducer from './product/productSlice';
import savedReducer from './saved/savedSlice';

export const store = configureStore({
	reducer: {
		'product': productReducer,
		'saved': savedReducer,
	}
});