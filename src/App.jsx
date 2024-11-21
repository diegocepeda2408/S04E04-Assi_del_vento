import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import Layout from './layouts/Layout'
import AddEdit from './components/AddEdit'
import UserList from './components/UserList'
import Modal from './components/Modal'

const baseUrl = 'https://users-crud-api-81io.onrender.com/api/v1'

function App() {
  const [users, setUsers, loading]= useFetch();
  const [isOpen, setIsOpen] = useState(false);
  const [currentChild, setCurrentChild] = useState(null);

  useEffect(() => {
    readUsers()
  },[])

  const createUser = (dataForm) => {
    setUsers({
      url: `${baseUrl}/users`,
      method: 'POST',
      body: dataForm
    })
  }

  //Read user
  const readUsers = () => {
    setUsers({url: `${baseUrl}/users`})
  }

  // Update user
  const updateUser = (dataForm, userId) => {
    setUsers({
      url: `${baseUrl}/users/${userId}`,
      method: 'PATCH',
      body: dataForm
    })
  }

  // Delete user
  const deleteUser = (userId) => {
    setUsers({
      url: `${baseUrl}/users/${userId}`,
      method: 'DELETE'
    })
  }

  // HandleOpenModal
  const openAdd = () => {
    setIsOpen(true)
    setCurrentChild(<AddEdit onSave={createUser}/>)
  }

  const openEdit = (user) => {
    setIsOpen(true)
    setCurrentChild(<AddEdit user={user} onSave={updateUser}/>)
  }

  return (
    <Layout>
      <div className='header'>
        <div className='header__container'>
          <h1 className='header__title'>Usuarios</h1>

          <div className='header__button'>
            <button type='button' onClick={openAdd}>Agregar Usuario</button>
          </div>
        </div>
      </div>     

      <div className='card__section'>
        {
          loading ? (
            <h2>Loading ...</h2>
          ) : (
          <>  
            <UserList 
            users={users} 
            openEdit={openEdit}
            deleteUser={deleteUser}/>  
          </> )}
      </div>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          {currentChild}
      </Modal>

    </Layout>
    
  )
}

export default App
