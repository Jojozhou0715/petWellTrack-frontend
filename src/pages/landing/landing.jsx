import styles from './landing.module.css'
import NavBar from '../../components/NavBar/NavBar'

const Landing = ({ user }) => {
  return (
    <main>
      <NavBar user={user} isLandingPage={true} />
      <div className={styles.landing}>
        <div className={styles.title}>
          <h1>{user ? `Welcome back, ${user.name[0].toUpperCase()+ user.name.substring(1)}` : null}</h1>
          <h1 className={styles.landingText}>{!user? 'Welcome to petWellTrack' : null}</h1>
        </div>
      </div>
    </main>
  )
}

export default Landing