import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Signup.module.css'
import * as authService from '../../services/authService'

const SignnupForm = (props) => {
    const navigate = useNavigate()
    const [message, setMessage] = useState('')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const updateMessage = (msg) => {
        setMessage(msg)
    }

    const handleChange = (e) =>{
        updateMessage('')
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await authService.signup(formData)
            props.handleSignupOrLogin()
            navigate('/')
        } catch (err) {
            updateMessage(err.message)
        }
    }

    const { name, email, password } = formData

    const isFormInvalid = () => {
        return !(name && email && password )
    }

return(
    // <>    
    // <section>
    //     <div className="rightContainer">
    //     <div className="header">
    //     <p className="registerH3">Sign up</p>
    //     <p>{message}</p>
    //     </div>
    //     <form onSubmit={handleSubmit} className="formContainer">
    //         <div className="registerForm">
    //         <input 
    //             className="registerInput"
    //             type="text"
    //             autoComplete='off'
    //             value={name}
    //             id='name'
    //             name="name"
    //             placeholder="name"
    //             onChange={handleChange}
    //             />
    //         <input
    //             className="registerInput"
    //             type="text"
    //             autoComplete='off'
    //             value={email}
    //             id='email'
    //             name="email"
    //             placeholder="email"
    //             onChange={handleChange}
    //             />       
    //         <input
    //             className="registerInput"
    //             type="password"
    //             autoComplete='off'
    //             id='password'
    //             value={password}
    //             name="password"
    //             placeholder="password"
    //             onChange={handleChange}
    //             />
    //             </div>
    //             <div className="registerInput">
    //         <button disabled={isFormInvalid()} className="signUp">SIGNUP</button>
    //         <Link to='/'><button className='button'>Cancel</button></Link>
    //         </div>
    //         <p className="registerP"><span className="spanP">Already sign up</span> <Link className="loginLink" to="/profile/login">Log in</Link></p> 
    //     </form> 
    //     </div>
    //     <div className="leftContainer">
    // <img className="signupImg" src="https://assets3.thrillist.com/v1/image/1706913/1584x1056/crop;jpeg_quality=60;progressive.jpg" alt="" />
    //     </div>            
    // </section>
    // </>
    <>    
    <section className={styles.section}>
        <div className={styles.rightContainer}>
        <div className={styles.header}>
        <p className={styles.registerP}>Sign up</p>
        <p>{message}</p>
        </div>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <div className={styles.registerForm}>
            <input 
                className={styles.registerInput}
                type="text"
                autoComplete='off'
                value={name}
                id='name'
                name="name"
                placeholder="name"
                onChange={handleChange}
                />
            <input
                className={styles.registerInput}
                type="text"
                autoComplete='off'
                value={email}
                id='email'
                name="email"
                placeholder="email"
                onChange={handleChange}
                />       
            <input
                className={styles.registerInput}
                type="password"
                autoComplete='off'
                id='password'
                value={password}
                name="password"
                placeholder="password"
                onChange={handleChange}
                />
                </div>
                <div className={styles.registerInput}>
            <button disabled={isFormInvalid()} className={styles.signUp}>SIGNUP</button>
            </div>
            <p className={styles.registerP}><span className={styles.spanP}>Already sign up?</span> <Link className={styles.loginLink} to="/">Log in</Link></p> 
        </form> 
        </div>
        <div className={styles.leftContainer}>
    {/* <img className={styles.signupImg} src="https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_1280.jpg" alt="" /> */}
    <img className={styles.signupImg} src="https://scitechdaily.com/images/Dog-and-Cat-Pets-Under-Blanket.jpg" alt="" />
        </div>            
    </section>
    </>
    
    )

}

export default SignnupForm