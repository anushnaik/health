import React ,{useState}from 'react'
import Sidebar from './sidebar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' 
import styles from '../styles/Admin.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';
import Paper from '@mui/material/Paper';
import { Grid, PagingPanel, Table, TableHeaderRow, TableSelection,} from '@devexpress/dx-react-grid-material-ui';
import { SelectionState } from '@devexpress/dx-react-grid';
import { useRouter } from "next/router";
import {FiMoreVertical} from "react-icons/fi";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NorthIcon from '@mui/icons-material/North';

const Projects = () => {
    const router = useRouter();
    const columns = [ 
        { name: 'id', title: 'project Id' },
        { name: 'name', title: 'Name' },
        { name: 'client', title: 'Client' },
        { name: 'projecttype', title: 'Project Type' },
        { name: 'projectresponsible', title: 'Project Responsible' },
        { name: 'startdate', title: 'Start Date' },
        { name: 'enddate', title: 'End Date' },
        { name: 'projectstatus', title: 'Project Status'},
        { name: 'monthlystatus', title: 'Monthly Status'},
        { name: 'options', title: 'Options' },
      ];
      
       const rows = [
         { id: 1, name: 'Jackson', client: 'Michael David', projecttype:'lorem Ipsum', projectresponsible:'lorem Ipsum', startdate:'01 Aug 2022', enddate:'24 sep 2022', projectstatus:'Running', monthlystatus:'Behind Schedule', options:<MoreVertIcon/> },
         { id: 2, name: 'Jackson', client: 'Michael David', projecttype:'lorem Ipsum', projectresponsible:'lorem Ipsum', startdate:'01 Aug 2022', enddate:'24 sep 2022', projectstatus:'Running', monthlystatus:'Behind Schedule', options:<MoreVertIcon/> },
         { id: 3, name: 'Jackson', client: 'Michael David', projecttype:'lorem Ipsum', projectresponsible:'lorem Ipsum', startdate:'01 Aug 2022', enddate:'24 sep 2022', projectstatus:'Running', monthlystatus:'Behind Schedule', options:<MoreVertIcon/> },
         { id: 4, name: 'Jackson', client: 'Michael David', projecttype:'lorem Ipsum', projectresponsible:'lorem Ipsum', startdate:'01 Aug 2022', enddate:'24 sep 2022', projectstatus:'Running', monthlystatus:'Behind Schedule', options:<MoreVertIcon/> },
         { id: 5, name: 'Jackson', client: 'Michael David', projecttype:'lorem Ipsum', projectresponsible:'lorem Ipsum', startdate:'01 Aug 2022', enddate:'24 sep 2022', projectstatus:'Running', monthlystatus:'Behind Schedule', options:<MoreVertIcon/> },
  
      ];
   
      
  return (
    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    </Head>
     <Sidebar />


     <div className={styles.container}>
     <div className={styles.box} >
     
    
     <FontAwesomeIcon icon={faBell} style={{
      position: "absolute",
      left: "15%",
      right: "15%",
      top: "10%",
      bottom: "10%",
     color: "#111928",
     marginLeft: "1150px",
     backgroundColor: "white"
}} />
     </div>
      <div className={styles.box1}>
        <label htmlFor="Admin" style={{ 
           width: "204px",
           height: "27px",
           top:"10px",
           fontFamily:"Arial",
           fontStyle: "normal",
           fontWeight: "bold",
           fontSize: "20px",
           lineHeight: "50px",
           color:"#111928",
           flex:"none",
           order:"0",
           flexGrow:"0"
        }}>
          Projects</label>
        <input type="text" className={styles.search} style={{alignContent:"center", justifyContent:"center", marginLeft:"250px", marginTop:"-45px" }} placeholder="Search"></input>
        <button className={styles.button} style={{ marginLeft:"1290px", marginTop:"-20px"}} onClick={() => {
              router.push("/AddUser");
            }}
        >+ Add Projects</button>
      </div>
      <div className={styles.grid}>
  
      <Paper>
      <Grid
        rows={rows}
        columns={columns}
      >
        <SelectionState/>
        <Table />
        
        <TableHeaderRow />
        
        <TableSelection />
     
      </Grid>
    </Paper>

     
      </div>
      
      </div>
    
  </>
  )
}
export default Projects