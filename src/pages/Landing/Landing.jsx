import styles from './Landing.module.css'
import dogLove from '../../images/eyes-closed.jpg'
import dogFood from '../../images/beautiful-pet-portrait-dog-with-food.jpg'
import vet from '../../images/vet.jpg'
import social from '../../images/social.jpg'
import hands from '../../images/hands.jpg'

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
            <img src="https://img.freepik.com/free-photo/portrait-dog-isolated-white-created-using-generative-ai_60438-2499.jpg?w=740&t=st=1685917016~exp=1685917616~hmac=5f144f33b6a72e5541454d013389f2a3de619afc95617175b3bb4c18b660558e" alt="" />
            <p>Dog</p>
          </div>
          <div className={styles.cat}>
            <img src="https://img.freepik.com/free-photo/british-shorthair-kitty-with-monochrome-wall-her_23-2148955105.jpg?w=740&t=st=1685915471~exp=1685916071~hmac=77acb2595dc8d89a635cbc0ba6c916800246b7bd59aadd21bd012232579b880a" alt="" />
            <p>Cat</p>
          </div>
          <div className={styles.horse}>
            <img src="https://img.freepik.com/free-photo/beautiful-brown-horse-outdoors_23-2148573800.jpg?w=740&t=st=1685915585~exp=1685916185~hmac=e54d5adab5e57b07dcbdf3f3db468a56d9e8ddb1418b21e9db7a869aa8e5c3d3" alt="" />
            <p>Horse</p>
          </div>         
          <div className={styles.rabbit}>
            <img src="https://img.freepik.com/free-photo/rabbit-with-ornament-red-heart-front_23-2148010820.jpg?w=740&t=st=1685915967~exp=1685916567~hmac=04a805fd9224c74801afc4763e3e96c00d319ffdd843a9b25c1ed99a15960f37" alt="" />
            <p>Rabbit</p>
          </div>
          <div className={styles.hamster}>
            <img src="https://img.freepik.com/free-photo/beautiful-guinea-pig-pet-portrait_23-2149152067.jpg?w=1060&t=st=1685916058~exp=1685916658~hmac=4a0c03928738a6090f0a7bfaec6bf5d58ecd889881b1a3ce4489b8571d250cb1" alt="" />
            <p>Hamster</p>
          </div>
          <div className={styles.bird}>
            <img src="https://img.freepik.com/free-photo/closeup-shot-sulphur-crested-cockatoo-perched-branch-yellow-background_181624-36192.jpg?w=740&t=st=1685932244~exp=1685932844~hmac=cbd3d03368d372cb38416ef3af23cb076ee0dfa87d25daaa760806532fe4cfcd" alt="" />
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
