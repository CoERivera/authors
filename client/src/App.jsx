import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Form from './pages/Form';

function App() {
  return (
    <div className="container mt-5">
      <h1>Favorite Authors</h1>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/new' element={<Form />} />
        <Route path='/edit/:id' element={<Form />} />
      </Routes>
    </div>
  )
}

export default App