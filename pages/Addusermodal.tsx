import { TextField } from "@mui/material";
import React from "react";
import styles from '../styles/Addusermodal.module.css';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {useState} from 'react';
import { Button } from "react-bootstrap";

function Addusermodal({ setOpenModal }:any) {
  const [value, setValue] = useState()
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.titleCloseBtn}>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >x
          </button>
        </div>
        <div className={styles.title}>
          <h4>Add user</h4>
        </div>
        <div>
          Name
            <TextField className={styles.Name} id="outlined-basic" placeholder="Name" variant="outlined" size="small" /><br/>
            Email
            <TextField className={styles.Email} id="outlined-basic" placeholder="Email"  variant="outlined" size="small" /><br/>
            Phone
            <div className={styles.row}>
              <div className={styles.column}>
            <PhoneInput className={styles.Phone}
      placeholder="Enter Phone Number"
      value={value}
      onChange="setValue"/>
      </div>
      <div className={styles.column}>
      <select className={styles.Role} id="outlined-basic">
        <option>Role1</option>
        <option>Role</option>
        <option>Role</option>
        </select>
        </div>
        <div className={styles.row}>
        <div className={styles.column}>
        <Button className={styles.addbtn}>+ Add another</Button>
        </div>
        </div>
        
</div>
            
        </div>
        <div className={styles.footer}>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Invite user</button>
        </div>
      </div>
    </div>
  );
}

export default Addusermodal;