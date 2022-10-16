import React from 'react'
import Navbar from './components/Navbar'
import UserTable from './components/UserTable'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Form from './components/Form'
import UserDetail from './components/UserDetail'
import UpdateUser from './components/UpdateUser'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<UserTable/>}/>
        <Route path='adduser' element={<Form/>}/>
        <Route path='userdetail/:id' element={<UserDetail/>}/>
        <Route path='edit/:id' element={<UpdateUser/>}/>
        <Route path='*' element={<Navigate to='/' replace/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App