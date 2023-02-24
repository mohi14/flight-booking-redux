import { ADD_BOOKINGS, REMOVE_BOOKINGS } from "./actionTypes"


export const addBooking = (value) => {
    return {
        type: ADD_BOOKINGS,
        payload: value
    }
}

export const removeBooking = (value) => {
    return {
        type: REMOVE_BOOKINGS,
        payload: value
    }
}