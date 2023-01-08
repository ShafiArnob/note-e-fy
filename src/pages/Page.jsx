import { doc, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useParams } from 'react-router-dom'
import Kanban from '../components/kanban/Kanban'
import Loading from '../components/Loading'
import { projectAuth, projectFirestore } from '../firebase/config'

const Page = () => {

  const [page, setPage] = useState({})
  const params = useParams()

  const [document, setDocument] = useState(null)
  const [error, setError] = useState(null)
  const [docLoading, setDocLoading] = useState(true)
  
  const [user, loading] = useAuthState(projectAuth)
  
  //Load Single Page Data
  useEffect(()=>{
    setDocLoading(true)
    if(user){
      const docRef = doc(projectFirestore, "pages", params.id)

        const unsub = onSnapshot(docRef, (doc)=>{
          if(doc.data()){
            setDocument({...doc.data(), id:doc.id})
            setDocLoading(false)
            setError(null)
          }
          else{
            setDocLoading(false)
            setError("No Such Documents Found")
          }
        },(err)=>{
          setDocLoading(false)
          console.log(err.message)
          setError("Failed to get Document")
        })
        
        return () => unsub()
      }
    
  },[user])

  if(docLoading || loading){
    return <Loading/>
  }

  // useEffect(()=>{
  //   fetch(`http://localhost:8000/pages/${params.id}`)
  //   .then(res => res.json())
  //   .then(data => setPage(data))
  // },[])

  // const {data,error,isLoading, refetch} = useQuery('page', async () => {
  //   const res = await fetch(`http://localhost:8000/pages/${params.id}`).then(res=> res.json())
  //   return res
  // })
  // if(isLoading){
  //   return <h1>Loading...</h1>
  // }
  // console.log(data);

  return (
    <div className='mx-6 my-4'>
      <Kanban page={document}/>
    </div>
  )
}

export default Page