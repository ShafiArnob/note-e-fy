import { collection, doc, onSnapshot, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { projectFirestore } from "./config"

export const getPages = (userId) => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)


  const docRef = doc(projectFirestore, "users", userId)

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
  },[])

  return {documents, error}
}

