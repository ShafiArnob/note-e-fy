export const updateTask = data =>{
  fetch(`http://localhost:8000/pages/${data.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res=>res.json())
  .then(data=> data)
}