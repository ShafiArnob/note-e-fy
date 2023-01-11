import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from "react-redux"
import { loginUser } from "../redux/actions/pageAction"
import { projectAuth, projectFirestore } from "./config"
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

import { doc, setDoc } from "firebase/firestore";
import { addPage } from "../components/kanban/kanbanFunctions";
import { useNavigate } from 'react-router-dom';

export const useSignup = () =>{
  const dispatch = useDispatch()

  const [createUserWithEmailAndPassword, user, loading , error,] = useCreateUserWithEmailAndPassword(projectAuth)
  const [updateProfile] = useUpdateProfile(projectAuth);
  const navigate = useNavigate()


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
        const data = {
          userName: res.user.displayName,
          id: uuidv4(),
          title: "Default Page",
          kanban: [
            {
              "id": "3ecee80d-6b68-46bd-a783-f1113c7c7677",
              "title": "✏️ In progress",
              "tasks": [
                {
                  "id": "95360d09-7e7b-4e59-90ff-f6a1140f9e96",
                  "title": "Something In Progress"
                },
                {
                  "id": "95360d0t-7g7b-4e79-94ff-f6a1140f9e96",
                  "title": "Something from ToDo"
                }
              ],
              "index": 1
            },
            {
              "id": "07ada544-63e5-4fec-bad0-fbba8541a815",
              "title": "✔️ Completed",
              "tasks": [
                {
                  "id": "a6dbe1cb-1b4c-4cfa-8169-cf96480953da",
                  "title": "Something Complete"
                }
              ],
              "index": 2
            },
            {
              "id": "8b3112c0-706d-4c3c-896d-60d19bf187d7",
              "title": "📃 To do",
              "tasks": [
                {
                  "id": "a6dbe1cb-1b4c-4cfa-816p-cf96480953dg",
                  "title": "Something ToDo"
                }
              ],
              "index": 0
            }
          ]
        }
      addPage(data, res.user)
      //dispatch Login action
      dispatch(loginUser(res.user))

      if(res.user){
        navigate('/')
      }
      }
  }
  return {signup, error, loading}
}