import { useState } from "react";
import styles from './AddPet.module.css'

const AddPet = (props) => {
    const [form, setForm] = useState({
        petName: '',
        image: '',
        species: 'Dog',
        breed: '',
        sex: '',
        age: '',
        weight: '',
        microchipNo: '',
        vaccination: '',
        medicalRecord: '',
    })

    const handleChange = ({ target }) => {
        setForm({ ...form, [target.name]: target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleAddPet(form)
    }

return (
  <main>
    <form onSubmit={handleSubmit} className="formContainer">
        <div className="registerForm">
            <input 
            className="registerInput"
            type="text"
            value={form.petName}
            name="petName"
            placeholder="petName"
            onChange={handleChange}
            />
            <input  
            className="registerInput"
            type="text"
            value={form.image}
            name="image"
            placeholder="image URL"
            onChange={handleChange}
            />
            <select
            className="registerInput"
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
            className="registerInput"
            type="text"
            value={form.breed}
            name="breed"
            placeholder="breed"
            onChange={handleChange}
            />
             <input
            className="registerInput"
            type="text"
            value={form.sex}
            name="sex"
            placeholder="sex"
            onChange={handleChange}
            />
            <input 
            className="registerInput"
            type="text"
            value={form.age}
            name="age"
            placeholder="age"
            onChange={handleChange}
            />                
            <input
            className="registerInput"
            type="text"
            value={form.weight}
            name="weight"
            placeholder="weight"
            onChange={handleChange}
            />  
            <input
            className="registerInput"
            type="text"
            value={form.microchipNo}
            name="microchipNo"
            placeholder="microchipNo"
            onChange={handleChange}
            />
            <input
            className="registerInput"
            type="text"
            value={form.vaccination}
            name="vaccination"
            placeholder="vaccination"
            onChange={handleChange}
            />                   
            <input
            className="registerInput"
            type="text"
            value={form.medicalRecord}
            name="medicalRecord"
            placeholder="medicalRecord"
            onChange={handleChange}
            />
            </div>
            <div className="registerInput">
            <button className="signUp" type="submit" >SAVE</button>
            </div>
        </form> 
    </main>
)
}

export default AddPet