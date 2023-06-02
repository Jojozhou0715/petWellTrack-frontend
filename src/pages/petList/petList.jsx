import styles from './petList.module.css'
import { Link } from 'react-router-dom'

const PetList = ({pets}) =>{
    console.log('petList:', pets)
    return( 
        <main className={styles.container}>    
        {/* <NavBar user={user} handleLogout={handleLogout}/> */}
            {pets.map(pet => (
                <div key={pet._id} className={styles.singlePet}>
                <Link className={styles.link} to={`/mypets/${pet._id}`}>
                 <img className={styles.image} src={pet.image} alt={pet.petName}/><br></br>
                 <h5>{pet.petName}</h5>
                 <h5>{pet.breed}</h5>
                 <h5>{pet.age}</h5>
                 {/* <span>{pet.weight}</span><br></br>
                 <span>{pet.microchipNo}</span><br></br>
                 <span>{pet.vaccination}</span><br></br>
                 <span>{pet.medicalRecord}</span><br></br> */}
                 </Link>
                </div>              
            ))}
        </main>
    )
}

export default PetList