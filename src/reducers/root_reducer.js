import { combineReducers } from "redux";
import { questionReducer } from "./question_reducer";
import { userReducer } from "./user_reducer";

export const rootReducer = combineReducers({
    // restaurants
    // activities
    user: userReducer,
    questions: questionReducer
})