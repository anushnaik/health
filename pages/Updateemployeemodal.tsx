import { TextField } from "@mui/material";
import React from "react";
import styles from '../styles/Updateemployeemodal.module.css';
import 'react-phone-number-input/style.css'
import {useState} from 'react';
import { Button } from "react-bootstrap";
import { RiDeleteBin5Fill } from 'react-icons/ri';

function Updateemployeemodal({setOpenModal}:any) {

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
          <h4>Update Utilization</h4>
        </div>
        <div className={styles.row1}>
        <div className={styles.column1}>
          Name
          <TextField className={styles.Name} id="outlined-basic" placeholder="Enter" variant="outlined" size="small" />
          </div>
          <div className={styles.column1}>
          Employee Id
          <TextField className={styles.type} id="outlined-basic" placeholder="Enter" variant="outlined" size="small" />
          </div>
        </div>
        <div className={styles.row1}>
        <div className={styles.column1}>
          Month
          <TextField className={styles.Date} id="outlined-basic" placeholder="Select" variant="outlined" size="small"  />
        </div>
        <div className={styles.column1}>
          Year
          <TextField className={styles.Date} id="outlined-basic" placeholder="YYYY" variant="outlined" size="small"  />
        </div>
        </div>
        <div className={styles.row2}>
        <div className={styles.column2}>
         Salary
         <TextField className={styles.mc} id="outlined-basic" placeholder="0" variant="outlined" size="small" />  
        </div>
        <div className={styles.column2}>
         Total Utilization
         <TextField className={styles.mc} id="outlined-basic" placeholder="0" variant="outlined" size="small" />  
        </div>
        <div className={styles.column2}>
         Revenue Loss
         <TextField className={styles.mc} id="outlined-basic" placeholder="0" variant="outlined" size="small" />  
        </div>
        </div>
        <div className={styles.row1}>
        <div className={styles.column1}>
        Project Name
              <select className={styles.empname} id="outlined-basic">
                <option></option>
                <option></option>
                <option></option>
              </select>
        </div>
        <div className={styles.column1}>
        Utilization
        <TextField className={styles.util} id="outlined-basic" placeholder="0" variant="outlined" size="small" />
        <RiDeleteBin5Fill className={styles.del} />
        </div>
        </div>
        <div className={styles.row1}>
        <div className={styles.column1}>
        Project Name
              <select className={styles.empname} id="outlined-basic">
                <option></option>
                <option></option>
                <option></option>
              </select>
        </div>
        <div className={styles.column1}>
        Utilization
        <TextField className={styles.util} id="outlined-basic" placeholder="0" variant="outlined" size="small" />
        <RiDeleteBin5Fill className={styles.del} />
        </div>
        </div>
        <Button className={styles.addbtn}>+ Add another</Button>
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

export default Updateemployeemodal;