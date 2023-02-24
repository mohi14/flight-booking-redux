import { ADD_BOOKINGS, REMOVE_BOOKINGS } from "./actionTypes";

const initialState = []




const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOKINGS:
            state = [...state, action.payload]
            return state

        case REMOVE_BOOKINGS:
            const filterBookings = state.filter(booking => booking.id !== action.payload)
            state = filterBookings;
            return state
        default:
            return state
    }
}

export default bookingReducer;