import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
function App() {
  const baseUrl='https://users-crud.academlo.tech/'
  const [users,getAllUsers,createNewUsers,delteUserByid]=useFetch(baseUrl)
  useEffect(()=>{
    getAllUsers('/users')
  },[])
  console.log(users);















  return (
    <>
      <h1>users crud</h1>
    </>
  )
}

export default App
