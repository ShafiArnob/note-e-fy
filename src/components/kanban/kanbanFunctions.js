
import axios from "axios"

export const updateTask = async data =>{
  // const res = fetch(`http://localhost:8000/pages/${data.id}`, {
  //   method: 'PUT',
  //   headers: {
  //     'Content-type': 'application/json'
  //   },
  //   body: JSON.stringify(data)
  // })
  // .then(res=>res.json())

  const res = await axios.put(`http://localhost:8000/pages/${data.id}`,data)
  // const dataR = await res.json()

  return res
}

export const addPage = async (data) =>{
  await axios.post('http://localhost:8000/pages', data)
}