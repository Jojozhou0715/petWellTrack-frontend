import { useState, useEffect } from 'react'
import {Routes, Route, useNavigate } from 'react-router-dom';

import * as authService from './services/authService'
import * as profileService from './services/profileService'

import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Landing from './pages/landing/landing'

import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/ProtectedRoute/PortectedRoute';

function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(authService.getUser())
  const [profile, setProfile] = useState([])

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getProfile()
      setProfile(profileData)
    }
    if (user){
      fetchProfile()
    }
  }, [user])

  const handleLogout = () => {
    setUser(null)
    authService.logout()
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())

  }

  return (
    <>
    <NavBar user={user} handleLogout={handleLogout} />
    <Routes>
    <Route path='/' element={<Landing user={user} />} />
    {/* <Route path='/logout' element={<Logout />} /> */}
    <Route path='/login' element={<Login handleSignupOrLogin={handleSignupOrLogin} />} />
    <Route path='/signup' element={<Signup handleSignupOrLogin={handleSignupOrLogin} />} />
   </Routes> 
   </>

  );
}

export default App;


