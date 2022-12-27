import { combineReducers } from "redux";
import { kanbanReducer } from "./kanbanReducer";


export const rootReducer = combineReducers({
  kanban:kanbanReducer,
})