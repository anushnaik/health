import React from "react";
import styles from '../styles/Viewemployeemodal.module.css';
import {useState} from 'react';




function Viewemployeemodal(setOpenModal:any) {

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
            EMPLOYEE ID<br/>
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
            CONTACT NUMBER<br/>
            <h5>111</h5>
      </div>
      <div className={styles.column}>
            EMPLOYEE TYPE<br/>
            <h5>111</h5>
      </div>
      <div className={styles.column}>
            JOINING DATE<br/>
            <h5>111</h5>
            </div>
            <div className={styles.row}>
              <div className={styles.column}>
            SALARY<br/>
            <h5>111</h5>
      </div>
      <div className={styles.column}>
            UTILIZATION<br/>
            <h5>111</h5>
      </div>
      <div className={styles.column}>
            REVENUE OPPORTUNITY<br/>
            <h5>111</h5>
            </div>
            <div className={styles.column}>
            SKILLS<br/>
            <h5>111</h5><br/>
            PROJECT NAME<br/>
            <h5>111</h5><br/>

            </div>
      </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Viewemployeemodal;