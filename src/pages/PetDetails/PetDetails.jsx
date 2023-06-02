import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from './PetDetails.module.css'

import * as petService from '../../services/petService'

const PetDetails = (props) => {
    const { id } = useParams()
    const [pet, setPet] = useState(null)

    useEffect(() => {
        const fetchPet = async () =>{
            const data = await petService.show(id)
            setPet(data)
        }
        fetchPet()
    }, [id])

    console.log('pet state:', pet)

    if (!pet) return <h1>Loading...</h1>

    return (
        <main className={styles.container}>
            <div className={styles.box}>            
                 <img className={styles.image} src={pet.image} alt={pet.petName}/>
                 <h5>{pet.petName}</h5>
                 <h5>{pet.species}</h5>
                 <h5>{pet.breed}</h5>
                 <h5>{pet.age}</h5>
                 <h5>{pet.weight}</h5>
                 <h5>{pet.microchipNo}</h5>
                 <h5>{pet.vaccination}</h5>
                 <h5>{pet.medicalRecord}</h5>
                </div>    

        </main>
    )
}

export default PetDetails