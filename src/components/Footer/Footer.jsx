import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <main>
        {/* <hr></hr> */}
        <div className={styles.footer}>         
        <p>@2023 PetWellTrack. All rights reserved</p> 
        <div className={styles.contact}>   
            <Link className={styles.tag} to={'./contact'}><p>contact us</p></Link>   
            <Link className={styles.tag} to="https://github.com/Jojozhou0715"><GitHubIcon /></Link>
            <Link className={styles.tag} to="https://www.linkedin.com/in/joey-y-zhou/"><LinkedInIcon /></Link>
            </div>
       </div>
       </main>
    )
}

export default Footer