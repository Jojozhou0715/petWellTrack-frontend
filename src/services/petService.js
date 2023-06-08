import * as tokenService from '../services/tokenService'


const BASE_URL = `${process.env.REACT_APP_API_URI}/pets`

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
        headers: {
            'Authorization': `Bearer ${tokenService.getToken()}` 
        },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const show = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
        headers: {
            'Authorization': `Bearer ${tokenService.getToken()}` 
        },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

// const show = async (id) => {
//   try {
//     const res = await fetch(`${BASE_URL}/${id}`, {
//       headers: {
//         'Authorization': `Bearer ${tokenService.getToken()}` 
//       },
//     });

//     if (!res.ok) {
//       throw new Error('Failed to fetch pet data');
//     }

//     return res.json();
//   } catch (error) {
//     console.log(error);
//     throw error; // Rethrow the error to be handled by the caller
//   }
// };


const create = async (petData) => {
  try {
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${tokenService.getToken()}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(petData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const update = async (petData) => {
  try {
    const res = await fetch(`${BASE_URL}/${petData._id}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${tokenService.getToken()}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(petData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deletePet = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${tokenService.getToken()}`,
        },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function addPhoto(photoData, petId) {
  const res = await fetch(`${BASE_URL}/${petId}/add-photo`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`, 
    },
    body: photoData
  })
  return await res.json()
}

// async function addMedicalRecord(medicalRecordData, petId) {
//   const res = await fetch(`${BASE_URL}/${petId}/add-medical-record`, {
//     method: 'PUT',
//     headers: {
//       'Authorization': `Bearer ${tokenService.getToken()}`, 
//     },
//     body: medicalRecordData
//   })
//   return await res.json()
// }


export { 
  index,
  show,
  create,
  update,
  deletePet,
  addPhoto
}