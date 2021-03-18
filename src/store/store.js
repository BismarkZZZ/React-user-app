import {combineReducers, createStore} from "redux"
import authReducer from "../reducers/authReducer";
import userReducer from "../reducers/usersReducer";

export const store = createStore(
    combineReducers({
        users: userReducer,
        auth: authReducer,
    })
);