/// Delete Pages -- Now its in Kanban
import { doc, getDoc, writeBatch } from 'firebase/firestore';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { projectFirestore } from '../firebase/config';


const DeletePage = ({page, user}) => {
  
  const navigate = useNavigate()

  const handleDelete = async () =>{
    console.log(page.id, page.title);
    const proceed = confirm(`Do You want delete the page "${page.title}" \n (Click Ok to Continue)`)
    
    if(proceed){
      const docRef = doc(projectFirestore,"users",user.uid)
      const docSnap = await getDoc(docRef)
      
      
      if(docSnap.exists()){
        const userData = {...docSnap.data()}
        const newUserPages = userData.pages.filter(doc=>doc.id!==page.id)
        const newUserData = {...userData, pages:newUserPages}
        
        // console.log(newUserData);
        // console.log(newUserPages);
        const batch = writeBatch(projectFirestore)

        // Update users after page delete 
        const userRef = doc(projectFirestore,"users",user.uid)
        batch.update(userRef, newUserData)

        // Delete page
        const pageRef = doc(projectFirestore, "pages", page.id)
        batch.delete(pageRef)

      
        await batch.commit()

        navigate('/')
    }
      alert("Page Deleted")
    }
    else{
      alert(`Page "${page.title}" Not Deleted`)
    }

  }

  return (
    <div onClick={()=>handleDelete()} className='flex p-1 bg-red-600 hover:bg-red-700 border-2 border-red-600 rounded-md bg-opacity-50  cursor-pointer text-neutral-300'>
        <RiDeleteBin6Line size="1.2rem"/>
        <span className='hidden hover:inline'>Delete</span>
    </div>
  )
}

export default DeletePage