import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import styles from './PetDetails.module.css'
import Carousel from 'react-bootstrap/Carousel'

import * as petService from '../../services/petService'

const PetDetails = (props) => {
    const { id } = useParams()
    const [pet, setPet] = useState(null)

    useEffect(() => {
        const fetchPet = async () =>{
            const data = await petService.show(id)
            setPet(data)
            console.log('pet images:', data && data.image)
        }
        fetchPet()
    }, [id])


    console.log('pet state:', pet)

    if (!pet) return <h1>Loading...</h1>

    return (
        <section className={styles.main}>
        <div className={styles.container}>
            {/* <div className={styles.box}>  */}
                <div className={styles.basicInfo}>
                    <img className={styles.image} src={pet.image} alt={pet.petName}/>
                   <div className={styles.info}>   
                    <h5 className={styles.basicH5}>{pet.petName}</h5>
                    <p className={styles.basicP}>{pet.breed}</p>  
                     <p className={styles.basicP}>{pet.age} year-old</p>                                                    
                         
                 {pet.owner && pet.owner._id === props.user.profile &&
                 <div className={styles.btn}>
                 <Link to={`/mypets/${id}/edit`} state={pet}><button className={styles.edit}>Edit</button></Link>
                 <button className={styles.delete} onClick={() => props.handleRemovePet(id)}>Delete</button>
                 </div>
                 }
                 </div>
                 </div> 
                {/* </div>     */}
                <div className={styles.box}>
                <h5>BASIC INFO:</h5>
                <p><span>Species: </span>{pet.species}</p>
                <p><span>Gender: </span>{pet.sex}</p>      
                {/* <p><span>Breed: </span>{pet.breed}</p>          */}
                <p><span>Weight: </span>{pet.weight} lb</p>
                <p><span>Microchip#: </span>{pet.microchipNo}</p>
                <p><span>Most recent vac: </span>{pet.vaccination}</p>                
                </div>            
               </div>
               <div className={styles.medical}>
                <h5 className={styles.medH4}>Medical Record:</h5>
                {/* <div className="slideshow-container"> */}
               <div className={styles.medImg}>
            <Carousel> 
              {pet.medicalRecord && pet.medicalRecord.map((img, index )=>(   
              <Carousel.Item key={index}>
                <div>
              <img className={styles.recordImg} src={img} alt={pet.petName}/>
               </div>
              </Carousel.Item>
             ))} 
           </Carousel>
           </div> 
                {/* <img className={styles.recordImg} src={pet.medicalRecord} alt={pet.medicalRecord}/>  */}
            </div>
        </section>

    )
}

export default PetDetails



