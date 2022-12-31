import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { loginUser } from "../redux/actions/pageAction"
import { projectAuth, projectFirestore } from "./config"
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const useSignup = () =>{
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const dispatch = useDispatch()

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(projectAuth)
  const [updateProfile] = useUpdateProfile(projectAuth);

  const signup = async(email, password, displayName) =>{
    setError(null)
    setIsPending(true)

      const res = await createUserWithEmailAndPassword(email, password)
      const success = await updateProfile({displayName})
      console.log(res.user.email);
      console.log(res.user.uid);


      

      //create user document
      const pages = []
      await setDoc(doc(projectFirestore, "users", res.user.uid), {
        email,
        displayName,
        pages
      })

    //dispatch Login action
    dispatch(loginUser(res.user))
    

  }
  return {signup, error, isPending}
}