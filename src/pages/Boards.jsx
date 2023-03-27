import React, { useEffect, useState } from 'react'
import HomeCard from '../components/HomeCard';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { projectAuth, projectFirestore } from '../firebase/config';
import Loading from '../components/Loading';
import { doc, onSnapshot } from 'firebase/firestore';
const Boards = () => {

  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)

  const [user, loading] = useAuthState(projectAuth)
  
  // Load Home Page Data
  useEffect(()=>{
    if(user){
      const docRef = doc(projectFirestore, "users", user.uid)

        const unsub = onSnapshot(docRef, (doc)=>{
          if(doc.data()){
            setDocuments({...doc.data(), id:doc.id})
            setError(null)
          }
          else{
            setError("No Such Documents Found")
          }
        },(err)=>{
          console.log(err.message)
          setError("Failed to get Document")
        })
        
        return () => unsub()
      }
    
  },[user])
  // console.log(documents);
  
  // Laod Data -- Redux
  // useEffect(()=>{
  //   dispatch(loadPagesData())
  // },[])

  if(loading && !document){
    return <Loading/>
  }

  
  return (
    <div className='flex flex-col container  mx-auto p-4 md:flex-row md:flex-wrap md:p-6'>
      {
        documents?.pages.map(page => <Link to={`/pages/${page.id}`} key={page.id}><HomeCard  page={page}></HomeCard></Link>)
      }
    </div>
  )
}

export default Boards