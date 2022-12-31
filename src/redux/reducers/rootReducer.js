import { combineReducers } from "redux";
import { kanbanReducer } from "./kanbanReducer";
import { userReducer } from "./userReducer";


export const rootReducer = combineReducers({
  kanban:kanbanReducer,
  user:userReducer,
})