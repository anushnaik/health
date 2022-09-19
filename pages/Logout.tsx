import React from 'react'
import axios from 'axios';
import { useRouter } from "next/router";
import {useState}from 'react'

const Logout = () => {
    const [dataa,setdataa] = useState<any>([])
    React.useEffect(() => {
        Api()
      },[])
      
    const Api= () => {
      var token= localStorage.getItem("token")
      console.log(token,"from itemlist")
    
    const payload= {
      headers:{
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:`${localStorage.getItem("token")}`
      }
    };
    try {
    const response= axios.get('https://tranquil-hamlet-54124.herokuapp.com/users/sign_out',payload)
     response.then((res:any) => {console.log("",res.data)
     setdataa(res.data);
    });
    }
    catch(error:any){
      console.error("Error:",error)
    }
    }
  return (
    <div>
      
    </div>
  )
}

export default Logout
