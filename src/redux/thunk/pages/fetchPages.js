import { doc, onSnapshot } from "firebase/firestore"
import { useAuthState } from "react-firebase-hooks/auth"
import { projectAuth } from "../../../firebase/config"
import { loadPages } from "../../actions/pageAction"

const loadPagesData = () =>{
  return async (dispatch, getSate) => {
    const [user, loading] = useAuthState(projectAuth)

    if(user){
      const docRef = doc(projectFirestore, "users", user.uid)
      console.log("g");
      onSnapshot(docRef, (doc)=>{
        if(doc.data()){
          // dispatch(loadPages({...doc.data(), id:doc.id}))
          console.log(doc);
        }
          
        },(err)=>{
          console.log(err.message)
        })
        
    }

    // const res = await fetch("http://localhost:8000/pages")
    // const data = await res.json()
    // if(data.length){
    //   dispatch(loadPages(data))
    // }
  }
}

export default loadPagesData