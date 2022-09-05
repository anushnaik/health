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
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const Admin = () => {
    const router = useRouter();
    const columns = [
      { field: 'id', headerName: 'User ID', width: 90 },
      {
        field: 'name',
        headerName: 'Name',
        width: 200,
        editable: true,
      },
      {
        field: 'email',
        headerName: 'Email',
        width: 250,
        editable: true,
      },
      {
        field: 'phone',
        headerName: 'Phone',
        type: 'number',
        width: 190,
        editable: true,
      },
      {
        field: 'roles',
        headerName: 'Roles',
        sortable: false,
        width: 200,
      },
      {
        field: 'status',
        headerName: 'Status',
        sortable: false,
        width: 160,
      },
      {
        field: 'options',
        headerName: 'Options',
        sortable: false,
        width: 160,
      },
    ];
      
    const rows = [
           { id: 1, name: 'Jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:"-",options:<MoreVertIcon/>},
           { id: 2, name: 'James', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:"invite sent",options:<MoreVertIcon/> },
           { id: 3, name: 'Mary', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:"Rejected",options:<MoreVertIcon/> },
           { id: 4, name: 'Michael', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:"Active",options:<MoreVertIcon/> },
           { id: 5, name: 'Jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:"-",options:<MoreVertIcon/>},
           { id: 6, name: 'James', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:"invite sent",options:<MoreVertIcon/> },
           { id: 7, name: 'Mary', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:"Rejected",options:<MoreVertIcon/> },
           { id: 8, name: 'Michael', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:"Active",options:<MoreVertIcon/> },
           { id: 9, name: 'Jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:"-",options:<MoreVertIcon/>},
           { id: 10, name: 'James', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:"invite sent",options:<MoreVertIcon/> },
           { id: 11, name: 'Mary', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:"Rejected",options:<MoreVertIcon/> },
           { id: 12, name: 'Michael', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:"Active",options:<MoreVertIcon/> },
    ];
   
  return (
    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    </Head>
     <Sidebar />


     <div className={styles.container}>
     <div className={styles.box} >
    
     <div className={styles.avatar}>
     <Stack direction="row" spacing={1}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </Stack>
     </div>
     
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
           fontSize: "25px",
           lineHeight: "50px",
           color:"#111928",
           flex:"none",
           order:"0",
           flexGrow:"0"
        }}>
          Admin Users</label>
        <input type="text" className={styles.search} style={{alignContent:"center", justifyContent:"center", marginLeft:"250px", marginTop:"-45px" }} placeholder="Search"></input>
        <button className={styles.button} style={{ marginLeft:"1290px", marginTop:"-20px"}} onClick={() => {
              router.push("/AddUser");
            }}
        >+ Add User</button>
      </div>
      <div className={styles.grid}>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
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
export default Admin