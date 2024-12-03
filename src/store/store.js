import { configureStore } from '@reduxjs/toolkit';
import selectedServicesReducer from './services/servicesSlice.js';

export const store = configureStore({
    reducer: {
        selectedServices: selectedServicesReducer,
    },
});
