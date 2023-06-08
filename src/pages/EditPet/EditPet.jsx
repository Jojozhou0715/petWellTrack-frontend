import { useState } from "react"
import { useLocation } from "react-router-dom"
import styles from './EditPet.module.css'

const EditPet = (props) => {
    const { state } = useLocation()
    const [form, setForm] = useState(state)
    const [photoData, setPhotoData] = useState({})

    console.log(state)
    // const handleChange = ({ target }) => {
    //     setForm({ ...form, [target.name]: target.value})
    // }
    const handleChange = ({ target }) => {
        if (target.name === 'medicalRecord') {
          setForm({ ...form, medicalRecord: target.value.split(',') });
        } else {
          setForm({ ...form, [target.name]: target.value });
        }
      };
    

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleUpdatePet(form, photoData.image)
    }

    const handleChangePhoto = (e) => {
        setPhotoData({ image: e.target.files[0] })
    }

return (
    <main className={styles.container}>
        <div className={styles.box}>
            <h5>Edit your pet info</h5>
        <form onSubmit={handleSubmit} className={styles.formBox}>
            <div className={styles.inputBox}>
                <input 
                className={styles.input}
                type="text"
                value={form.petName}
                name="petName"
                placeholder="Name"
                onChange={handleChange}
                />
                {/* <input  
                className={styles.input}
                type="text"
                value={form.image}
                name="image"
                placeholder="image URL"
                onChange={handleChange}
                /> */}
                <input  
                className={styles.addPhoto}
                type="file"
                name="image"
                onChange={handleChangePhoto}
                />
                <select
                className={styles.select}
                value={form.species}
                name="species"
                placeholder="species"
                onChange={handleChange}
                >
                <option value='Dog'>Dog</option>
                <option value='Cat'>Cat</option>
                <option value='Horse'>Horse</option>
                <option value='Bird'>Bird</option>
                <option value='Rabbit'>Rabbit</option>
                <option value='Other'>Other</option>
                </select>
                <input
                className={styles.input}
                type="text"
                value={form.breed}
                name="breed"
                placeholder="Breed"
                onChange={handleChange}
                />
                {/* <input
                className={styles.input}
                type="text"
                value={form.sex}
                name="sex"
                placeholder="sex"
                onChange={handleChange}
                /> */}
                   <select
                className={styles.select}
       
                value={form.sex}
                name="sex"
         
                onChange={handleChange}
                >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    </select>
                <input 
                className={styles.input}
                type="text"
                value={form.age}
                name="age"
                placeholder="Age"
                onChange={handleChange}
                />                
                <input
                className={styles.input}
                type="text"
                value={form.weight}
                name="weight"
                placeholder="Weight"
                onChange={handleChange}
                />  
                <input
                className={styles.input}
                type="text"
                value={form.microchipNo}
                name="microchipNo"
                placeholder="Microchip#"
                onChange={handleChange}
                />
                <input
                className={styles.input}
                type="text"
                value={form.vaccination}
                name="vaccination"
                placeholder="Vaccination"
                onChange={handleChange}
                />                   
                <input
                className={styles.input}
                type="text"
                value={form.medicalRecord}
                name="medicalRecord"
                placeholder="Image url"
                onChange={handleChange}
                />
                </div>        
                <button className={styles.save} type="submit" >SAVE</button>
            </form> 
            </div>
        </main>
    )

}

export default EditPet;

