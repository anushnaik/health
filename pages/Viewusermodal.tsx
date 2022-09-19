import React from "react";
import styles from '../styles/Viewusermodal.module.css';
import {useState} from 'react';

function Viewusermodal({ setOpenModalV }:any) {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.titleCloseBtn}>
          <button
            onClick={() => {
              setOpenModalV(false);
            }}
          >x
          </button>
        </div>
        <div className={styles.title}>
          <h4>View Details</h4>
        </div>
        <div className={styles.row}>
              <div className={styles.column}>
            USER ID<br/>
            <h5>text</h5>
      </div>
      <div className={styles.column}>
            NAME<br/>
            <h5>text</h5>
      </div>
      <div className={styles.column}>
            EMAIL<br/>
            <h5>text</h5>
      </div>
      <div className={styles.row}>
              <div className={styles.column}>
            PHONE<br/>
            <h5>111</h5>
      </div>
      <div className={styles.column}>
            ROLES<br/>
            <h5>111</h5>
      </div>
      <div className={styles.column}>
            STATUS<br/>
            <h5>111</h5>
            </div><br/>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Viewusermodal;