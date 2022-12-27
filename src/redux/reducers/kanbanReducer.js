import { LOAD_PAGES } from "../actionTypes/actionTypes"

export const initialState = {
  kanban:[
    {
      id:"",
      username:"",
      title:"",
      kanban:[]
    }
  ],
  note:[]
}

export const kanbanReducer = (state=initialState, action) => {
  switch(action.type){
    case LOAD_PAGES:
      return {...state, kanban:action.payload }
    
    default:
      return state
  }
}