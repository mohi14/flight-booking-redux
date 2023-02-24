import { combineReducers } from "redux";
import bookingReducer from "./bookings/bookingReducer";


const rootReducer = combineReducers({
    bookings: bookingReducer
})

export default rootReducer;