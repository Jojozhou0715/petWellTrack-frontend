import { useState } from 'react';
import styles from './Contact.module.css'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    return (
        <section className={styles.main}>
            <div className={styles.container}>
            <div className={styles.left}>
            <div className={styles.touch}>
              {/* <p>Get in touch</p>             */}
              <h5>Get In Touch</h5>
              </div>
               <div className={styles.phone}>
               <PhoneIcon/><p>Call Us</p>
               </div>
               <p className={styles.pTag}>800-786-567</p>   
              <div className={styles.email}>
                <EmailIcon/><p>Email Us</p>
              </div>
                <p className={styles.pTag}>joeyzhou@gmail.com</p>           
              <div className={styles.location}>
                <LocationOnIcon/> <p>Locate Us</p> 
              </div>
                <p className={styles.pTag}>New York, USA</p>           
                </div>
            
            <div className={styles.right}>
            <form className={styles.formContainer}>
            <div className={styles.registerForm}>
            <input 
                className={styles.registerInput}
                type="text"
                value={name}
                id='name'
                name="name"
                placeholder=" Your Name"
                onChange={(e) => setName(e.target.value)}
                />
            <input
                className={styles.registerInput}
                type="text"
                value={email}
                id='email'
                name="email"
                placeholder=" Your Email"
                onChange={(e) => setEmail(e.target.value)}
                />       
            <textarea
                // className={styles.text}
                type="message"
                id='message'
                value={message}
                name="message"
                placeholder="Type a message"
                onChange={(e) => setMessage(e.target.value)}
                />
                
                {/* <div className={styles.registerInput}> */}
            <button className={styles.send}>SEND</button>
            {/* </div> */}</div>
        </form> 
            </div>
            </div>
        </section>
    )
}

export default Contact