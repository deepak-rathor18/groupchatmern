import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Dashboard from './Pages/Dashboard';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

function App() {

 const [userToken, setUserToken] = useState("")

  useEffect(()=>{
let token =localStorage.getItem("token")
console.log(token);
setUserToken(token)
  },[])
  return (
<>

<Routes>

<Route path='/' element={userToken? <Navigate to="/dashboard"/>:<Registration/>}/>
<Route path='/login' element={userToken? <Navigate to="/dashboard"/>:<Login />}/>
<Route path='/dashboard' element={userToken?<Dashboard/>: <Navigate to="/"/>}/>

</Routes>

</>
  );
}

export default App;
