
import axios from "axios"
import { doc, updateDoc } from "firebase/firestore"
import { projectFirestore } from "../../firebase/config"

export const updateTask = async data =>{
  // const res = fetch(`http://localhost:8000/pages/${data.id}`, {
  //   method: 'PUT',
  //   headers: {
  //     'Content-type': 'application/json'
  //   },
  //   body: JSON.stringify(data)
  // })
  // .then(res=>res.json())

  // local server
  // const res = await axios.put(`http://localhost:8000/pages/${data.id}`,data)
  // const dataR = await res.json()

  
  const collRef = doc(projectFirestore,"pages",data.id)

  const res = await updateDoc(collRef, data)
  return res

  // console.log(data);
}

export const addPage = async (data) =>{
  await axios.post('http://localhost:8000/pages', data)
}