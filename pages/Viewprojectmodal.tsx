import React from "react";
import styles from '../styles/Viewprojectmodal.module.css';
import {useState} from 'react';




function Viewusermodal({setOpenModal}:any) {

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
            PROJECT ID<br/>
            <h5>text</h5>
      </div>
      <div className={styles.column}>
            NAME<br/>
            <h5>text</h5>
      </div>
      <div className={styles.column}>
            CLIENT<br/>
            <h5>text</h5>
      </div>
      <div className={styles.row}>
              <div className={styles.column}>
            PROJECT TYPE<br/>
            <h5>111</h5>
      </div>
      <div className={styles.column}>
            PROJECT RESPONSIBLE<br/>
            <h5>111</h5>
      </div>
      <div className={styles.column}>
            START DATE<br/>
            <h5>111</h5>
            </div>
            <div className={styles.row}>
              <div className={styles.column}>
            END DATE<br/>
            <h5>111</h5>
      </div>
      <div className={styles.column}>
            PROJECT STATUS<br/>
            <h5>111</h5>
      </div>
      <div className={styles.column}>
            MONTHLY STATUS<br/>
            <h5>111</h5>
            </div>
      </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Viewusermodal;