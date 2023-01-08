import { collection, doc, onSnapshot, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { projectAuth, projectFirestore } from "./config"

export const getPages = (userid) => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)

  // const [user, loading] = useAuthState(projectAuth)


  try{
    // console.log(userId);
    const docRef = doc(projectFirestore, "users", userid)

    useEffect(()=>{
      const unsub = onSnapshot(docRef, (doc)=>{
        if(doc.data()){
          setDocuments({...doc.data(), id:doc.id})
          setError(null)
        }
        else{
          setError("No Such Documents Found")
        }
      },(err)=>{
        console.log(err.message)
        setError("Failed to get Document")
      })
      return () => unsub()

      },[userId])
  }catch(err){
    
  }

  return {documents, error}
}

