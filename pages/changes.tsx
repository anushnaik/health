import {useState} from 'react'
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import styles from '../styles/Home.module.css';
const Changes = () => {

  const [type, setType]=useState('password');
  const [icon, setIcon]=useState(eyeOff);

  const handleToggle=()=>{    
    if(type==='password'){
      setIcon(eye);      
      setType('text');
    }
    else{
      setIcon(eyeOff);     
      setType('password');
    }
  }

    return (
      <div>
            <h2 className={styles.forgot}>Set new password</h2>
            <h6 className={styles.forgot1}>Your new password must be different from</h6>
            <h6 className={styles.forgot1}>previous used password</h6>
            <br></br>
            <br></br>
      <h4 className={styles.forgot3}>Password</h4>
      <input className={styles.emailfield1} type={type} placeholder="" />
      <div className={styles.wrapper1}>
      <div className={styles.inputfield}>
      <input type={type}/>
          <span onClick={handleToggle}><Icon icon={icon} size={20}/></span>
      </div>
      </div>
      <p className={styles.forgot3}>Minimum 8 character with atleast 1 number</p>
      <h6></h6>
      <h4 className={styles.forgot3}>Password</h4>
      <input className={styles.emailfield1} type={type} placeholder="" />
      <div className={styles.wrapper2}>
      <div className={styles.inputfield}>
      <input type={type}/>
          <span onClick={handleToggle}><Icon icon={icon} size={20}/></span>
      </div>
      </div>
      <p className={styles.forgot3}>Both Password must match</p>
      <button type="submit" className={styles.sendforgButton}>
        Reset Password
        </button>
        <p className={styles.cancel}>Cancel</p>
        </div>
    );
  };
  
  export default Changes;