
import { doc, getDoc, writeBatch } from 'firebase/firestore'
import { AiOutlineEdit } from 'react-icons/ai'
import { projectFirestore } from '../firebase/config'
const EditPage = ({page, user}) => {
  
  const handleEdit = async () =>{
    const editTitle = prompt("Enter Page title", page.title)

    if(editTitle !== page.title && editTitle){
      const docRef = doc(projectFirestore,"users",user.uid)
      const docSnap = await getDoc(docRef)
      
      if(docSnap.exists()){
        const userData = {...docSnap.data()}
        const targetUserPage = userData.pages.find(doc=>doc.id===page.id) //get target page
        const restUserPages = userData.pages.filter(doc=>doc.id!==page.id) //rest of the pages
        const editedTargetUserpage = {...targetUserPage, title:editTitle} //adding edited userpage to rest
        const newUserPages = [...restUserPages, editedTargetUserpage]
        const newUserData = {...userData, pages: newUserPages}

        const newPageData = {...page, title:editTitle} //edit page title

        const batch = writeBatch(projectFirestore)
        
        // Update users after page delete 
        const userRef = doc(projectFirestore,"users",user.uid)
        batch.update(userRef, newUserData)

        // Update page
        const pageRef = doc(projectFirestore, "pages", page.id)
        batch.update(pageRef, newPageData)

        await batch.commit()
      }
    }
  }
  return (
    <div onClick={handleEdit} className='cursor-pointer p-1 rounded-md bg-[#383838b1] hover:bg-neutral-800'>
      <AiOutlineEdit size="1.2rem"/>
    </div>
  )
}

export default EditPage