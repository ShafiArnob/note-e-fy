import { LOAD_PAGES } from "../actionTypes/actionTypes"

export const loadPages = (data) =>{
  return {type:LOAD_PAGES, payload:data}
}