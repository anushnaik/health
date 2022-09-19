import {SetStateAction, useState} from 'react'
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import styles from '../styles/Home.module.css';
import Link from 'next/link'
import Image from 'next/image'
import ABC from '../Images/ABC.png'
import axios from 'axios';
import { useRouter } from 'next/router'

const Login = () => {
  const router=useRouter();
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [message, setMessage]=useState("");
  const [invalidPassword, setInvalidPassword] = useState(false);
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

  async function handleSubmit (e:any) {
    e.preventDefault();
    const req={
      "user" : {
      email : email,
      password : password
      }
    }
      
    await axios.post('https://tranquil-hamlet-54124.herokuapp.com/users/sign_in',req)
    .then((response)=> {
      localStorage.setItem("token",response.headers.authorization)
    //const res = response 
     //console.log( res);
     //const token=response.headers.authorization;
    // localStorage.setitem("token",token)
     router.push("/Admin")
      
     } )
     .catch((error) => {
      setInvalidPassword(true);
      console.error("Error:",error); 
    });
  }
  return (
    <>
      <div className={styles.image}>
      </div>
      <p className={styles.message}>{message}</p>
      <h1 className={styles.title}>Log In</h1>
      <h6 className={styles.email}>Email</h6>
      <input className={styles.emailfield} type={email} value={email} placeholder="" onChange={(e) => setEmail(e.target.value)} id="email" />
      <h6 className={styles.password}>Password</h6>
      <input className={styles.passwordfield} type={type} placeholder="" onChange={(e) => setPassword(e.target.value)} id="password" />
      <div className={styles.wrapper}>
      <div className={styles.inputfield}>
      <input type={type}/>
          <span onClick={handleToggle}><Icon icon={icon} size={25}/></span>
      </div>
      </div>
      <h6 className={styles.warning}>Minimum 8 characters with at least 1 number</h6>
      <button onClick={handleSubmit} className={styles.login}>
        Login
        </button>
      <p className={styles.policy}>
        By signing in you agree to Health <Link className={styles.terms} href="/Termsofservice">Terms of service</Link> and  <Link className={styles.terms} href="/Privacypolicy">Privacy policy</Link>  {" "}
      </p>
      <p className={styles.forgotPassword}>
        <Link href="/forgot" ><a>Forgot Your Password</a></Link>
      </p>
    </>
  );
};
export default Login;
