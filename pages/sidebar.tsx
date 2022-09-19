import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {faClipboardList, faGear, faUser, faUserGroup} from "@fortawesome/free-solid-svg-icons"
import type { NextPage } from 'next'
import styles from '../styles/sidebar.module.css'
import logo from '../Images/logo.jpg'
import Image from 'next/image'
import Link from 'next/link'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { Button } from 'react-bootstrap'

const sidebar: NextPage = () => {
 
  return (
    <>
     <ul>
      
    <div className={styles.sidebar}>
    <li>
    <Image
           src={logo}
           width="50px"
           height="50px"
           alt='Logo'
            /> <h3 className={styles.health}> HEALTH</h3>
             <div className={styles.line}></div>
       </li>
        <li>
    <div className={styles.admin}>
    <FontAwesomeIcon icon={faUser}  
     style={{ 
       height: "16px",
       width: "16px",
       left: "4px",
      top: "4px"
      }} 
      /> <Link href='/Admin'> 
      <a className={styles.adminl}> Admin_User </a>
      </Link>
     </div>
     </li>
     <li>
    <div className={styles.projects}>
    <FontAwesomeIcon icon={faClipboardList}
    style={{
        height: "18px",
        width: "14.400001525878906px",
        left: "4.8000030517578125px",
        top: "4px"
       }}/> <Link href='/Projects'>
         <a className={styles.projectsl}> Projects </a>
         </Link>
       </div>
       </li>
       <li>
       <div className={styles.employee}>
       <FontAwesomeIcon icon={faUserGroup}
       style= {{
        height: "20px",
        width: "20px",
        left: "18px",
        top: "192px",
       }}
       /> <Link href='/Employees'> 
       <a className={styles.employeel}> Employees </a></Link>
       </div>
      </li>
      <li>
      <div className={styles.setting}>
      <FontAwesomeIcon icon={faGear}
      style={{
        height: "20.1997013092041px",
        width: "19.199398040771484px", 
        left: "2.400299072265625px",
        top: "2.4000244140625px" 
      }}
      /><Link href='/Settings'>
         <a className={styles.settingl}> Settings{""}</a></Link>
      </div>
      </li>
      <li>
      <div className={styles.skill}>
    <Link href='/Skill'>
         <a className={styles.settingl}> Skills </a></Link>
      </div>
      </li>
      <li>
      <div className={styles.projecttype}>
      <Link href='/Project-type'>
         <a className={styles.projecttypel}> Project Type </a></Link>
      </div>
      </li>
      <li>
      <div className={styles.employeetype}>
      <Link href='/Employee-type'>
         <a className={styles.employeetypel}> Employee Type </a></Link>
      </div>
      </li>
      </div>
        </ul> 
       
   </>
  )
}

export default sidebar;



