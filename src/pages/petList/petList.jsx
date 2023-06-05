import styles from './petList.module.css'
import { Link } from 'react-router-dom'

const PetList = (props) =>{
    console.log('petList:', props)
    
if (!props.pets || props.pets.length === 0) {
    return <div>No pets found</div>
}

// const numPets = props.pets.length
// const minHeight = `${numPets * 100}px`
// console.log(minHeight)

return( 
    <>
    <div className={styles.image1}> <h2 className={styles.h2}>Welcome back, {props.profile.name[0].toUpperCase()+ props.profile.name.substring(1)} !</h2></div>
    <div className={styles.container}>
     {/* <style>
    {`
        // html {
        //   background-color: white;
        // }

    `}
    </style>  */}
    {/* <div className={styles.image1}> <h2 className={styles.h2}>Welcome back, {props.profile.name[0].toUpperCase()+ props.profile.name.substring(1)} !</h2></div> */}
    {/* <h2 className={styles.h2}>Welcome back, {props.profile.name[0].toUpperCase()+ props.profile.name.substring(1)} !</h2> */}
    {/* <img src='https://www.thelist.com/img/gallery/how-to-tell-if-your-pet-is-really-sick/l-intro-1628618761.jpg'></img> */}  
    {/* <div className={styles.container} style={{ minHeight}}> */}
    <div className={styles.box}>    
    {/* <NavBar user={user} handleLogout={handleLogout}/> */}
        
        {props.pets.map(pet => (
            <div key={pet._id} className={styles.singlePet}>
            <Link className={styles.link} to={`/mypets/${pet._id}`}>
                <img className={styles.image} src={pet.image} alt={pet.petName}/><br></br>
                <div className={styles.span}><span>{pet.petName}</span>&nbsp;&nbsp;-&nbsp;&nbsp;<span>{pet.breed}</span><br></br></div>
                <div className={styles.span}><span>{pet.age} year-old</span></div>
                
                {/* <span>{pet.weight}</span><br></br>
                <span>{pet.microchipNo}</span><br></br>
                <span>{pet.vaccination}</span><br></br>
                <span>{pet.medicalRecord}</span><br></br> */}
                </Link>
            </div>              
        ))}
    </div>
    {/* </div> */}
    </div>
    </>
    
//     <>
//     <section className={styles.section}>
//       <style>
//         {`
//           html{
//             background: url('https://img.freepik.com/free-vector/frame-with-dogs-vector-white-background_53876-127700.jpg?w=2000') no-repeat center center / cover;
//           }
//         `}
//       </style>
//       <h2 className={styles.h2}>Welcome back, {props.profile.name[0].toUpperCase() + props.profile.name.substring(1)} !</h2>
//       <div className={styles.sectionDiv} style={{ minHeight }}>
//         <main className={styles.container}>
//           {/* <NavBar user={user} handleLogout={handleLogout}/> */}

//           {props.pets.map(pet => (
//             <div key={pet._id} className={styles.singlePet}>
//               <Link className={styles.link} to={`/mypets/${pet._id}`}>
//                 <img className={styles.image} src={pet.image} alt={pet.petName} /><br></br>
//                 <div className={styles.span}><span>{pet.petName}</span>&nbsp;&nbsp;-&nbsp;&nbsp;<span>{pet.breed}</span><br></br></div>
//                 <div className={styles.span}><span>{pet.age} year-old</span></div>

//                 {/* <span>{pet.weight}</span><br></br>
//                 <span>{pet.microchipNo}</span><br></br>
//                 <span>{pet.vaccination}</span><br></br>
//                 <span>{pet.medicalRecord}</span><br></br> */}
//               </Link>
//             </div>
//           ))}
//         </main>
//       </div>
//     </section>
//   </>

)
}

export default PetList