import { useState } from 'react';
import {Routes,Route} from 'react-router-dom';
import './App.css'
import EmployeeLogin from './pages/employees/auth/EmployeeLogin';
import AdminLogin from './pages/admin/auth/AdminLogin';
import EmployeeRegister from './pages/employees/auth/EmployeeRegister';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<EmployeeLogin/>}></Route>
        <Route path="/admin-login" element={<AdminLogin/>}></Route>
        <Route path="/employee-register" element={<EmployeeRegister/>}></Route>
      </Routes>
       
    </div>
  )
}

export default App
