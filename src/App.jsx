import { useEffect, useState } from 'react'
import './App.css'
import '../src/components/style/FormUser.css'
import useFetch from './hooks/useFetch'
import FormUsers from './components/FormUsers'
import UsersCard from './components/UsersCard'
import { URL_API } from '../url'
function App() {
  const [isCloseForm,setisCloseForm]=useState(true)
  const [UpdateInfo,setUpdateInfo]=useState()
  const baseUrl=URL_API.url
  const [users,getAllUsers,createNewUsers,delteUserByid,UpdateInfoByid]=useFetch(baseUrl)
  useEffect(()=>{
    getAllUsers('/users')
  },[])
  const dhanleOpenForm=()=>{
    setisCloseForm(false)
  }
  return (
    <>
      <header className='presentation_card'>
        <h1>users crud</h1>
        <button onClick={dhanleOpenForm}><h2>Register</h2></button>
        <div className={`form-container ${isCloseForm && 'form__close'}`}>
          <FormUsers
          createNewUsers={createNewUsers}
          UpdateInfo={UpdateInfo}
          UpdateInfoByid={UpdateInfoByid}
          setUpdateInfo={setUpdateInfo}
          setisCloseForm={setisCloseForm}/>
          
        </div>
      </header>
      <div className='card__main'>
        {
          users?.map(user=>(
            <UsersCard
              key={user.id}
              user={user}
              delteUserByid={delteUserByid}
              setUpdateInfo={setUpdateInfo}
              setisCloseForm={setisCloseForm}
              />
          ))
        }
      </div>
    
    </>
  )
}

export default App
