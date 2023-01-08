import { collection, doc, onSnapshot } from "firebase/firestore"
import { useState } from "react"
import { projectFirestore } from "./config"

export const useCollection = (coll, _query) => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)


  const colRef = collection(projectFirestore,coll)
  

  useEffect(()=>{
    const unsub = onSnapshot(doc(projectFirestore, coll), (docs)=>{
      if(docs.data()){
        setDocuments({...docs.data(), id:docs.id})
        setError(null)
      }
      else{
        setError("No Such Data Exists")
      }

    },(err)=>{
      console.log(err.message)
      setError("Failed to get Document")
    })

    return () => unsub()
  },[])

  return {documents, error}
}

