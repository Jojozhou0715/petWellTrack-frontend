import { useState } from "react";
import styles from './AddPet.module.css'

const AddPet = (props) => {
    const [form, setForm] = useState({
        petName: '',
        image: '',
        species: 'Dog',
        breed: '',
        sex: 'Male',
        age: '',
        weight: '',
        microchipNo: '',
        vaccination: '',
        medicalRecord: '',
    })
    
    const [photoData, setPhotoData] =useState([])

    // const [medicalRecordPhotos, setMedicalRecordPhotos] = useState([]);
    // const handleMedicalRecordChange = (event) => {
    //     const files = event.target.files;
    //     const selectedPhotos = Array.from(files);
    //     setMedicalRecordPhotos(selectedPhotos);
    //   };
      

    const handleChange = ({ target }) => {
        setForm({ ...form, [target.name]: target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleAddPet(form, photoData.image)
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const medicalRecordsData = Array.from(medicalRecordPhotos);
    //     props.handleAddPet(form, photoData.image, medicalRecordsData);
    //   };
      

    const handleChangePhoto = (e) => {
        setPhotoData({ image: e.target.files[0] })
    }

return (
  <main className={styles.container}>
     <div className={styles.box}>
            <h5>Add A Pet</h5>
    <form onSubmit={handleSubmit} className={styles.formBox}>
        <div className={styles.inputBox}>
            <input 
            className={styles.input}
            type="text"
            value={form.petName}
            name="petName"
            placeholder="Pet Name"
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
            <option value='Hamster'>Hamster</option>
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
            placeholder="Image URL"
            onChange={handleChange}
            />
            </div>          
            <button className={styles.save} type="submit" >SAVE</button>        
        </form> 
        </div>
    </main>
)
}

export default AddPet