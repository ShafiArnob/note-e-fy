import { LOAD_PAGES } from "../actionTypes/actionTypes"

export const initialState = {
  pages:[
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
      return {...state, pages:action.payload }
    
    default:
      return state
  }
}