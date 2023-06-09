import styles from './PetList.module.css'
import { Link } from 'react-router-dom'

const PetList = (props) =>{
    console.log('petList:', props)
    
if (!props.pets || props.pets.length === 0) {
    return (
    <>
    {/* <div className={styles.image1}> <h2 className={styles.h2}>Welcome back, {props.profile.name[0].toUpperCase()+ props.profile.name.substring(1)} !</h2></div> */}
    <div className={styles.image1}>
          <h2 className={styles.h2}>Welcome back, {props.profile && props.profile.name ? props.profile.name[0].toUpperCase() + props.profile.name.substring(1) : ''} !</h2>
        </div>
    <div className={styles.noFound}>No pets found</div>
    </>
    )
}

// const numPets = props.pets.length
// const minHeight = `${numPets * 100}px`
// console.log(minHeight)

return( 
    <main>
    {/* <div className={styles.image1}> <h2 className={styles.h2}>Welcome back, {props.profile.name[0].toUpperCase()+ props.profile.name.substring(1)} !</h2></div> */}
    <div className={styles.image1}>
        <h2 className={styles.h2}>Welcome back, {props.profile && props.profile.name ? props.profile.name[0].toUpperCase() + props.profile.name.substring(1) : ''} !</h2>
      </div>
    <div className={styles.container}>
     {/* <style>
    {`
        // html {
        //   background-color: white;
        // }

    `}
    </style>  */}
    <div className={styles.box}>    
        {props.pets.map(pet => (
            <div key={pet?._id} className={styles.singlePet}>
            <Link className={styles.link} to={`/mypets/${pet._id}`}>
                <img className={styles.image} src={pet.image ? pet.image : <p>No images</p>} alt={pet.petName}/><br></br>
                <div className={styles.span}><span>{pet.petName}</span>&nbsp;&nbsp;<span>-</span>&nbsp;&nbsp;<span>{pet.breed}</span><br></br></div>
                <div className={styles.span}><span>{pet.age} year-old</span></div>
                </Link>
            </div>              
        ))}
    </div>
    </div>
    </main>

  );
};

export default PetList



