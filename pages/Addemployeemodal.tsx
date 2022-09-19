import { TextField } from "@mui/material";
import React from "react";
import styles from '../styles/Addemployeemodal.module.css';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {useState} from 'react';

function Addemployeemodal({setOpenModal}:any) {
  const [value, setValue] = useState();
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.titleCloseBtn}>
          <button
            onClick={() => {
              setOpenModal(false);
            } }
          >x
          </button>
        </div>
        <div className={styles.title}>
          <h4>Add Employee</h4>
        </div>
        <div>
          Name
          <TextField className={styles.Name} id="outlined-basic" placeholder="Name" variant="outlined" size="small" /><br />
          Email
          <TextField className={styles.Email} id="outlined-basic" placeholder="Email" variant="outlined" size="small" /><br />
          <div className={styles.row}>
            <div className={styles.column}>
              Phone Number
              <PhoneInput className={styles.Phone}
                placeholder="Enter Phone Number"
                value={value}
                onChange={setValue} />
            </div>
            <div className={styles.column}>
              Joining Date
              <TextField className={styles.Date} id="outlined-basic" placeholder="Name" variant="outlined" size="small" type="date" />
            </div>
            <div className={styles.column}>
              Skills
              <select className={styles.Role} id="outlined-basic">
                <option>Role</option>
                <option>Role</option>
                <option>Role</option>
              </select>
            </div>
            <div className={styles.column}>
              Employee Type
              <select className={styles.Role} id="outlined-basic">
                <option>Role</option>
                <option>Role</option>
                <option>Role</option>
              </select>
            </div>
            <div className={styles.column}>
              Salary
              <TextField className={styles.Date} id="outlined-basic" placeholder="Name" variant="outlined" size="small" type="date" />
            </div>
            <div className={styles.column}>
              Utilization
              <TextField className={styles.Date} id="outlined-basic" placeholder="Name" variant="outlined" size="small" type="date" />
            </div>
            <div className={styles.column}>
              Revenue Opportunity
              <select className={styles.Role} id="outlined-basic">
                <option>Role</option>
                <option>Role</option>
                <option>Role</option>
              </select>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <button
            onClick={() => {
              setOpenModal(false);
            } }
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

export default Addemployeemodal;