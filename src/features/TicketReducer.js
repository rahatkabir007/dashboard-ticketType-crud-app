import { createSlice } from '@reduxjs/toolkit';

// Local storage utility functions
const LocalStorage = {
    getTicketTypes: () => {
        const storedData = localStorage.getItem('ticketTypes');
        return storedData ? JSON.parse(storedData) : [];
    },
    setTicketTypes: (ticketTypes) => {
        localStorage.setItem('ticketTypes', JSON.stringify(ticketTypes));
    },
};

// Initial state
const initialState = {
    ticketTypes: LocalStorage.getTicketTypes(),
};

// Ticket types slice
const ticketTypesSlice = createSlice({
    name: 'ticketTypes',
    initialState,
    reducers: {
        addTicketType: (state, action) => {
            const newTicketType = action.payload;
            state.ticketTypes.push(newTicketType);
            LocalStorage.setTicketTypes(state.ticketTypes);
        },
        editTicketType: (state, action) => {
            const editedTicketType = action.payload;
            state.ticketTypes = state.ticketTypes.map((ticketType) => {
                if (ticketType.id === editedTicketType.id) {
                    return editedTicketType;
                }
                return ticketType;
            });
            LocalStorage.setTicketTypes(state.ticketTypes);
        },
        deleteTicketType: (state, action) => {
            const deletedTicketId = action.payload;
            state.ticketTypes = state.ticketTypes.filter(
                (ticketType) => ticketType.id !== deletedTicketId
            );
            LocalStorage.setTicketTypes(state.ticketTypes);
        },
    },
});

// Actions
export const {
    addTicketType,
    editTicketType,
    deleteTicketType,
    toggleModal,
} = ticketTypesSlice.actions;

// Reducer
const ticketTypesReducer = ticketTypesSlice.reducer;

export default ticketTypesReducer;
