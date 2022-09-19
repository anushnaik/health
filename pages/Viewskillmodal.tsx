import React from "react";
import styles from '../styles/Viewskillmodal.module.css';
import {useState} from 'react';




function Viewskillmodal({setOpenModal}:any) {

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
          <h4>View Details</h4>
        </div>
        <div className={styles.row}>
              <div className={styles.column}>
            SKILL NAME<br/>
            <h5>text</h5>
      </div>
      <div className={styles.column}>
            STATUS<br/>
            <h5>text</h5><br/>
            <div className={styles.row}>
            <div className={styles.column}>
            DESCRIPTION<br/>
            <h5>aaa</h5>
            </div>
            </div>
            
      </div>
      </div>
      </div>
      </div>

  );
}

export default Viewskillmodal;