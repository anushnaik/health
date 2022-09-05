import {SetStateAction, useState} from 'react'
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import styles from '../styles/Home.module.css';
import Link from 'next/link'


const Login = () => {
  const [email, setEmail]=useState("");
  const [message, setMessage]=useState("");
  const emailvalidation = () => {
    const regEx =/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
  if (regEx.test(email)) {
  setMessage("Email is valid");
  } else if(!regEx.test(email) && email !="") {
  setMessage("Email or password is not valid");
  } else {
    setMessage("Email is Empty");
  }
  };
  const handleonChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

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
    <>
      <div className={styles.image}>
      </div>
      <p className={styles.message}>{message}</p>
      <h1 className={styles.title}>Log In</h1>
      <h6 className={styles.email}>Email</h6>
      <input className={styles.emailfield} type={email} value={email} placeholder="" onChange={handleonChange} />
      <h6 className={styles.password}>Password</h6>
      <input className={styles.passwordfield} type={type} placeholder="" />
      <div className={styles.wrapper}>
      <div className={styles.inputfield}>
      <input type={type}/>
          <span onClick={handleToggle}><Icon icon={icon} size={25}/></span>
      </div>
      </div>
      <h6 className={styles.warning}>Minimum 8 characters with at least 1 number</h6>
      <button onClick={emailvalidation} className={styles.login}>
        LOGIN
        </button>
      <p className={styles.policy}>
        By signing in you agree to Health <Link className={styles.terms} href="/Termsofservice">Terms of service</Link> and  <Link className={styles.terms} href="/Privacypolicy">Privacy policy</Link>  {" "}
      </p>
      <p className={styles.forgotPassword}>
        <Link href="/forgot"><a>Forgot Your Password</a></Link>
      </p>
    </>
  );
};

export default Login;
