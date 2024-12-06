// servicesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedServices: [],
};

const servicesSlice = createSlice({
    name: 'selectedServices',
    initialState,
    reducers: {
        addService: (state, action) => {
            state.selectedServices.push(action.payload);
        },
        removeService: (state, action) => {
            state.selectedServices = state.selectedServices.filter(
                    (service) => service.id !== action.payload.id
            );
        },
        clearServices: (state) => {
            state.selectedServices = [];
        },
    },
});

export const { addService, removeService, clearServices } = servicesSlice.actions;
export default servicesSlice.reducer;
