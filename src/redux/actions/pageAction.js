import { LOAD_PAGES, LOGIN } from "../actionTypes/actionTypes"

// ! For pages
//Load all pages
export const loadPages = (data) =>{
  return {type:LOAD_PAGES, payload:data}
}


// ! For User
export const loginUser = user =>{
  return {type:LOGIN, payload:user}
}