import styles from '../styles/Home.module.css';
import Link from 'next/link';
const Forgot = () => {
    return (
        <div>
<Link href="/">Back</Link>
            <h2 className={styles.forgot}>Forgot your Password</h2>
            <p className={styles.forgot1}>{"Enter your email address, and we'll send you an"}</p>
            <p className={styles.forgot2}>{"email with all the instructions"} </p>
      <h4 className={styles.forgot3}>Email</h4>
      <input className={styles.emailfield1} type="text" placeholder="" />
      <br></br>
      <br></br>
      <br></br>
      <button type="submit" className={styles.sendforgButton}>
        Send me instructions
        </button>
        <br></br>
        <br></br>
        <p className={styles.forgot4}>Cancel</p>
    
        </div>
    );
  }; 
  
  export default Forgot;