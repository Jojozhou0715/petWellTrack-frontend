import { useState, useEffect } from 'react'
import {Routes, Route, useNavigate } from 'react-router-dom';

import * as authService from './services/authService'
import * as profileService from './services/profileService'
import * as petService from './services/petService'

//pages
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Landing from './pages/Landing/Landing'
import PetList from './pages/PetList/petList'
import PetDetails from './pages/PetDetails/PetDetails'
import AddPet from './pages/AddPet/AddPet';
import EditPet from './pages/EditPet/EditPet';

//components
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/ProtectedRoute/PortectedRoute';
import Footer from './components/Footer/Footer';

function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(authService.getUser())
  const [profile, setProfile] = useState([])
  const [pets, setPets] = useState([])

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
    navigate('/login')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())

  }

  const handleAddPet = async (petData, image) =>{
    const newPet = await petService.create(petData)
    if (image) {
      newPet.image = await petPhotoUploader(image, newPet._id)
    }
    setPets([...pets, newPet])
    navigate('/mypets')
  }

  // const handleAddPet = async (petData, image, medicalRecordImages) => {
  //   const newPet = await petService.create(petData);
    
  //   if (image) {
  //     newPet.image = await petPhotoUploader(image, newPet._id);
  //   }
    
  //   if (medicalRecordImages && medicalRecordImages.length > 0) {
  //     const uploadedImages = await Promise.all(medicalRecordImages.map(image => petPhotoUploader(image, newPet._id)));
  //     newPet.medicalRecord = uploadedImages.filter(image => image !== null);
  //   }
    
  //   setPets([...pets, newPet]);
  //   navigate('/mypets');
  // };
  


  const handleUpdatePet = async (petData, image) => {
    const updatedPet = await petService.update(petData)
    if (image) {
      updatedPet.image = await petPhotoUploader(image, updatedPet._id)
    }
    const updatedPetData = pets.map(pet => {
      return petData._id === pet._id ? updatedPet : pet
    })
    setPets(updatedPetData)
    navigate('/mypets')
  }

  const handleRemovePet = async (id) => {
    const removedPet = await petService.deletePet(id)
    setPets(pets.filter(pet => pet._id !== removedPet._id))
    navigate('/mypets')
  }

  const petPhotoUploader = async (image, id) => {
     const photoData = new FormData()
     photoData.append('image', image)
     return await petService.addPhoto(photoData, id)
  }

  // const petPhotoUploader = async (images, id) => {
  //   const uploadedImages = [];
  
  //   if (images.length === 1) {
  //     const photoData = new FormData();
  //     photoData.append('image', images[0]);
  
  //     const uploadedImage = await petService.addPhoto(photoData, id);
  //     uploadedImages.push(uploadedImage);
  //   } else if (images.length > 1) {
  //     for (const image of images) {
  //       const photoData = new FormData();
  //       photoData.append('image', image);
  
  //       const uploadedImage = await petService.addMedicalRecord(photoData, id);
  //       uploadedImages.push(uploadedImage);
  //     }
  //   }
  
  //   return uploadedImages;
  // };
  

  useEffect(()=>{
    const fetchAllPets = async () => {
      const data = await petService.index()
      console.log('pets data:', data) 
      setPets(data)
    }
    if (user) {
      fetchAllPets()
    }
  }, [user])

  return (
    <>
    <NavBar user={user} handleLogout={handleLogout} />
    <Routes>
    <Route path='/' element={<Landing user={user} handleLogout={handleLogout}/>} />
    {/* <Route path='/logout' element={<Logout />} /> */}
    <Route path='/login' element={<Login handleSignupOrLogin={handleSignupOrLogin} />} />
    <Route path='/signup' element={<Signup handleSignupOrLogin={handleSignupOrLogin} />} />
    <Route path='/mypets' element={
      <ProtectedRoute user={user}>
        <PetList profile={profile} pets={pets}/>
      </ProtectedRoute>
    }
    />
    <Route path='/mypets/:id' element={
    <ProtectedRoute user={user}>
      <PetDetails user={user} handleRemovePet={handleRemovePet}/>
    </ProtectedRoute>
    }
    />
    <Route path='/mypets/new' element={
    <ProtectedRoute user={user}>
      <AddPet handleAddPet={handleAddPet}/>
    </ProtectedRoute>
    }
    />
     <Route path='/mypets/:id/edit' element={
    <ProtectedRoute user={user}>
      <EditPet handleUpdatePet={handleUpdatePet}/>
    </ProtectedRoute>
    }
    />
   </Routes> 
   <Footer/>
   </>

  );
}

export default App;


