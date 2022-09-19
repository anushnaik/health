import { TextField } from "@mui/material";
import React from "react";
import styles from '../styles/Addskillmodal.module.css';
import 'react-phone-number-input/style.css'
import {useState} from 'react';
import Box from '@mui/material/Box';



function Addemployeetypemodal({setOpenModal}:any) {

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
          <h4>Add Employee type</h4>
        </div>
        <div>
          <div>
          Employee Type Name
            <TextField className={styles.Name} id="outlined-basic" placeholder="Skill Name" variant="outlined" size="small" /><br/>
            Employee Type Description
            <Box>
            <TextField className={styles.skill}
            placeholder="Type your text here"
          multiline
          maxRows={4}
          value={value}
        /></Box><br/>
            Employee Type Status<br/>
      <select className={styles.Role} id="outlined-basic">
        <option>Role</option>
        <option>Role</option>
        <option>Role</option>
        </select>
        
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
          <button>Add</button>
        </div>
      </div>
    </div>
  );
}

export default Addemployeetypemodal;