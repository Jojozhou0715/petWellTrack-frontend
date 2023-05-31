import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout, isLandingPage}) => {
  const navbarClassName = isLandingPage ? styles.landingNav : styles.container;
  const navLinkClassName = isLandingPage ? styles.landingNavLink : styles.navLink;

  return (
    <nav className={navbarClassName}>
    {/* <nav className={styles.container}> */}
     {user ?
       <ul className={styles.navUl}>
        <li><Link to='/profile' className={navLinkClassName}>My Pets</Link></li>
        <li><Link to='/pets' className={navLinkClassName}>Add</Link></li>
        <li><Link to='' onClick={handleLogout} className={navLinkClassName}>Logout</Link></li>
       </ul>
      :
      <ul className={styles.navUl}>
        <li><Link to='/login' className={navLinkClassName}>Login</Link></li>
        <li><Link to='/signup' className={navLinkClassName}>signUp</Link></li>
      </ul>     
    }
    </nav>
  )
}

export default NavBar