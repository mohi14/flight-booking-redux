import { createStore } from "redux";
import bookingReducer from "./bookings/bookingReducer";
import rootReducer from "./rootReducer";



const store = createStore(rootReducer)

export default store