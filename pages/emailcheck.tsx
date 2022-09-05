import styles from '../styles/Home.module.css';
import Link from 'next/link'
const Emailcheck = () => {
    return (
      <div>
        <Link href="/forgot"><a>Back</a></Link>
      
        <div>
            <h2 className={styles.forgot}>Check your mail</h2>
            <p className={styles.forgot1}>We sent a password reset link to </p>
      <p className={styles.emailresend}>Didnt receive the email?
        <Link href="">Click to resend</Link>
        </p>
        </div>
        </div>
    );
  }; 
  
  export default Emailcheck;