
import { useDispatch } from "react-redux"
import { loginUser } from "../redux/actions/pageAction"
import { projectAuth, projectFirestore } from "./config"
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

import { doc, setDoc } from "firebase/firestore";

export const useSignup = () =>{
  const dispatch = useDispatch()

  const [createUserWithEmailAndPassword, user, loading , error,] = useCreateUserWithEmailAndPassword(projectAuth)
  const [updateProfile] = useUpdateProfile(projectAuth);


  const signup = async(email, password, displayName) =>{

      const res = await createUserWithEmailAndPassword(email, password)
      const success = await updateProfile({displayName})

      if(res){
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
  }
  return {signup, error, loading}
}