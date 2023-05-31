import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_API_URI}/profile`

async function getProfile() {
    const res = await fetch(BASE_URL, {
        headers: {
            'Authorization': `Bearer ${tokenService.getToken()}` 
        },
    })
    return await res.json()
}

export { getProfile }