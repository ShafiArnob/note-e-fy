import { LOAD_PAGES } from "../actionTypes/actionTypes"

//Load all pages
export const loadPages = (data) =>{
  return {type:LOAD_PAGES, payload:data}
}
