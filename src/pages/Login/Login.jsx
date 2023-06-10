import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Login.module.css'
import * as authService from '../../services/authService'

const LoginForm = (props) => {
    const navigate = useNavigate()
    const [message, setMessage] = useState('')
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    
    const getErrMsg = (msg) => {
        setMessage(msg)
        }

    const handleChange = (e) => {
        getErrMsg('')
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }
     
    const handleSubmit = async event => {
        event.preventDefault()
        try {
            await authService.login(formData)
            props.handleSignupOrLogin()
            navigate('/')
        } catch (err) {
            getErrMsg(err.message)
        }
    }

return (
    <section className={styles.section}>
        {/* <div className={styles.loginLeft}> */}
        {/* <img className={styles.loginImg} src="https://cdn.pixabay.com/photo/2017/08/07/18/57/dog-2606759_1280.jpg" alt="" /> */}
        {/* <img className={styles.loginImg} src="https://imgix.bustle.com/uploads/image/2018/5/17/717eb285-bbbc-48ef-a291-d5eea5e45d51-fotolia_194955015_subscription_monthly_m.jpg?w=800&fit=crop&crop=faces&auto=format%2Ccompress" alt="" />
        </div> */}
        <div className={styles.loginBox}>
        {/* <Link to='/'><img className={styles.image} src={logo} alt="logo"/></Link> */}
        <div className={styles.loginHeader}>
            <p className={styles.welcome}> Accout Login</p>
            <p className={styles.errMsg}>{message}</p>
        </div>
    <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div className={styles.loginInputs}>
        <input className={styles.loginInput} 
            type="text"
            autoComplete='off'
            id='email'
            value={formData.email}
            name='email'
            placeholder="email"
            onChange={handleChange}/>
        <input className={styles.loginInput} 
            type="password"
            autoComplete='off'
            id='password'
            value={formData.password}
            name='password'
            placeholder="password"
            onChange={handleChange}/>
        </div>
        <div className={styles.loginInput} >
        <button className={styles.loginButton}>LOGIN</button>
        </div>
        <p className={styles.loginP}><span className={styles.spanP}>Don’t have an account?</span> 
        <Link className={styles.registerLink} to="/signup">Sign up</Link></p>  
    </form>
    </div>
    </section>
    )
}

export default LoginForm