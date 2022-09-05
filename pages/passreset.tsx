import styles from '../styles/Home.module.css';
const Passreset = () => {
    return (
        <div>
            <h2 className={styles.forgot}>Password reset</h2>
            <p className={styles.forgot1}>Your password has been successfully reset</p>
      <p className={styles.forgot1}>Click below to login magically</p>
      <button type="submit" className={styles.sendforgButton}>
        Continue
        </button>
      
        </div>
    );
  }; 
  
  export default Passreset;