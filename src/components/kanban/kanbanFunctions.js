
import axios from "axios"
import { doc, getDoc, onSnapshot, updateDoc, writeBatch } from "firebase/firestore"
import { useEffect } from "react"
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
  // console.log(res);
  // return res

  // console.log(data);
}

export const addPage = async (data, user) =>{
  // console.log(data, "-", user.uid);
  // await axios.post('http://localhost:8000/pages', data)
  
  const docRef = doc(projectFirestore,"users",user.uid)
  const docSnap = await getDoc(docRef)
  

  if(docSnap.exists()){
    const userData = {...docSnap.data()}
    const newData = {...userData, pages:[...userData.pages, data]} //user

    // await setDoc(doc(projectFirestore, "pages", data.id), data)
    const batch = writeBatch(projectFirestore)
    
    // Add page
    const pageRef = doc(projectFirestore, "pages", data.id)
    batch.set(pageRef, data)

    delete newData["kanban"]
    
    // Add page referance to users
    const userRef = doc(projectFirestore,"users",user.uid)
    batch.update(userRef, newData)

    await batch.commit()
  }
  else{
    console.log("No Such Document");
  }

}