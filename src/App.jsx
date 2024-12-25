import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import RepoPage from './page/Repo'
import Login from './page/Login'
import Home from './page/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/repositories' element={<RepoPage/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
