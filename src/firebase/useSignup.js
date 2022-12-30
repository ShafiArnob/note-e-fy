import { useEffect, useState } from "react"
import { projectAuth, projectFirestore } from "./config"

export const useSignup = () =>{
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  const signup = async(email, password, displayName) =>{
    setError(null)
    setIsPending(true)

    try{
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)
      if(!res){
        throw new Error("Could Not Complete Signup")
      }

      //add user name
      await res.user.updateProfile({displayName})

      //create user document
      const pages = []
      await projectFirestore.collection("users").doc(res.user.uid).set({
        displayName,
        email,
        pages
    })
    }catch(err){
      if(!isCancelled){
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  useEffect(()=>{
    return () => setIsCancelled(true)
  },[])

  return {signup, error, isPending}
}