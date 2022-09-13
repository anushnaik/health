import { TextField } from "@mui/material";
import React from "react";
import styles from '../styles/Addskillmodal.module.css';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {useState} from 'react';
import { Button } from "react-bootstrap";
import Box from '@mui/material/Box';



function Addprojecttypemodal(setOpenModal:any) {

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
          <h4>Add Project type</h4>
        </div>
        <div>
          <div>
          Project Type Name
            <TextField className={styles.Name} id="outlined-basic" placeholder="Skill Name" variant="outlined" size="small" /><br/>
            Project Type Description
            <Box>
            <TextField className={styles.skill}
            placeholder="Type your text here"
          multiline
          maxRows={4}
          value={value}
        /></Box><br/>
            Project Type Status<br/>
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

export default Addprojecttypemodal;