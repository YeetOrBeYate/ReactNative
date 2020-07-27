import {createStore, combineReducers} from "redux"
import {CourseReducer} from "./CourseReducer"

const rootReducer = combineReducers({
    Course:CourseReducer
})

export const reduxStore = createStore(rootReducer)