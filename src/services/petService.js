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

export { 
  index,
  show,
  create,
  update,
  deletePet
}