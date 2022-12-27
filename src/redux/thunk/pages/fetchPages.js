import { loadPages } from "../../actions/pageAction"

const loadPagesData = () =>{
  return async (dispatch, getSate) => {
    const res = await fetch("http://localhost:8000/pages")
    const data = await res.json()
    if(data.length){
      dispatch(loadPages(data))
    }
  }
}

export default loadPagesData