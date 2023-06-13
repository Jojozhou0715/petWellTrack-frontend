import styles from './Landing.module.css'
import dogLove from '../../images/eyes-closed.jpg'
import dogFood from '../../images/beautiful-pet-portrait-dog-with-food.jpg'
import vet from '../../images/vet.jpg'
import social from '../../images/social.jpg'
import hands from '../../images/hands.jpg'
import hamster from '../../images/hamster.jpg'
import horse from '../../images/horse.jpg'
import rabbit from '../../images/rabbit.jpg'
import cat from '../../images/cat.jpg'
import dog from '../../images/dog.jpg'
import bird from '../../images/bird.jpg'

const Landing = (props) => {
  return (
    <section className={styles.main}>
        <div className={styles.head}>
          <div className={styles.divH2}>
            <h2>Brightening Your Pet's <br />Wellness Journey</h2>
          </div>
          {/* <p>Your pet's well-being matters,</p> <p>and we're here to help you prioritize it.</p><p>Make every day extraordinary for your </p><p>furry friend with our easy-to-use and intuitive app.</p> */}
         <div className={styles.divP}>
          {/* <p>Prioritize your pet's well-being with our</p> 
          <p>comprehensive pet health tracking app. </p> */}
          <p>Your pet's well-being matters, and</p> 
          <p>we're here to help you prioritize it.</p>
          {/* <p>Simplify pet care, stay informed,</p>
          <p>and ensure their happiness with ease.</p> */}
         </div>
        </div>
        <div className={styles.container}>
          <div className={styles.title}><h5>Categories</h5></div>
          <div className={styles.box}>
          <div className={styles.dog}>
            <img src={dog} alt="" />
            <p>Dog</p>
          </div>
          <div className={styles.cat}>
            <img src={cat} alt="" />
            <p>Cat</p>
          </div>
          <div className={styles.horse}>
            <img src={horse} alt="" />
            <p>Horse</p>
          </div>         
          <div className={styles.rabbit}>
            <img src={rabbit} alt="" />
            <p>Rabbit</p>
          </div>
          <div className={styles.hamster}>
            <img src={hamster} alt="hamster" />
            <p>Hamster</p>
          </div>
          <div className={styles.bird}>
            <img src={bird} alt="" />
            <p>Bird</p>
          </div>
          </div>
        </div>        
          <div className={styles.goal}>
          <img src={dogLove} alt="dogHug" />
          <div className={styles.words}>
          <h5>Our goal</h5>
          <p>At PetWellTrack, our goal is to empower pet owners with the
           tools and information they need to proactively manage their
           pets' health. </p><p>Our app allows you to effortlessly track
           vaccinations and medical records, ensuring nothing falls through
           the cracks.</p> <p>With PetWellTrack, you can stay on top of your
           pet's well-being and provide them with the best care possible.</p>
           
           </div>
        </div>
        <div className={styles.tipsContainer}>
        <h5>Tips to Keep Your Pet Happy and Healthy</h5>
        <div className={styles.tips}>   
          <div className={styles.one}>
            <img src="https://img.freepik.com/premium-photo/sky-blue-wavy-parrot-with-plastic-toy-skateboard-color-background_175086-9.jpg?w=1060" alt="" />
            <p>Give them Toys</p>
          </div>
          <div className={styles.two}>
            <img src={social} alt="" />
            <p>Let them Socialize</p>
          </div>
          <div className={styles.three}>
            <img src={dogFood} alt="" />
            <p>Healthy Diet is Crucial</p>
          </div>
          <div className={styles.four}>
            <img src={vet} alt="" />
            <p>Take them to a Vet</p>
          </div>
        </div>
        </div>
        <div className={styles.about}>
          <div className={styles.aboutWords}>
         <h4>About Us</h4>
            <p>PetWellTrack: Your Pet's Health, Simplified. Our app streamlines pet care by 
              providing a convenient way to manage vital information and records.</p>
              <p>With PetWellTrack, you can easily track your pet's health and keep important 
              details at your fingertips. From vaccination records to medical history, 
              our app offers a secure platform to store and access all the essential information.</p>
              <p>We understand that your pet's well-being is a top priority, and that's why we've created 
              PetWellTrack. Say goodbye to the hassle of keeping track of paperwork and welcome a more 
              organized and efficient approach to pet care. Join PetWellTrack today and take control of your pet's health journey. </p>
          </div>
         <img src={hands} alt="hands" />
        </div>
    </section>
  )
}

export default Landing
