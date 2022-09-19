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
import { IconButton } from '@mui/material';
import Modal from "../pages/Addemployeemodal";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import axios from 'axios';

const Employees = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [dataa,setdataa] = useState<any>([])

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: { target: any; }) => {
    setOpen(false);
  };

  function handleListKeyDown(event: { key: string; preventDefault: () => void; }) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {

    }

    prevOpen.current = open;
  }, [open]);
  React.useEffect(() => {
    Api()
  },[])
  
const Api= () => {
  var token= localStorage.getItem("token")
  console.log(token,"from itemlist")

const payload= {
  headers:{
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization:`${localStorage.getItem("token")}`
  }
};
try {
const response= axios.get('https://tranquil-hamlet-54124.herokuapp.com/clients/all',payload)
 response.then((res:any) => {console.log("",res.data)
 setdataa(res.data);
});
}
catch(error:any){
  console.error("Error:",error)
}
}

  const [modalOpen, setModalOpen] = useState(false);
    const router = useRouter();
    const columns: GridColDef[] = [
      { field: 'id', headerName: 'Employee Id', width: 90 },
      {
        field: 'ename',
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
        field: 'projectname',
        headerName: 'Project Name',
        width: 190,
        editable: true,
      },
      {
        field: 'skills',
        headerName: 'Skills',
        sortable: false,
        width: 160,
      },
      {
        field: 'employeetype',
        headerName: 'Employee Type',
        sortable: false,
        width: 160,
      },
      {
        field: 'joiningdate',
        headerName: 'Joining Date',
        sortable: false,
        width: 160,
      },
      {
        field: 'salary',
        headerName: 'Salary',
        sortable: false,
        width: 160,
      },
      {
        field: 'utilization',
        headerName: 'Utilization',
        sortable: false,
        width: 160,
      },
      {
        field: 'revenueoppo',
        headerName: 'Revenue Opportunity',
        sortable: false,
        width: 200,
      },
      {
        field: "option",
        headerName: "Option",
        width: 120,
        renderCell: () => {
          return (
            <div>
              <IconButton aria-label="option" onClick={handleToggle}>
                <MoreVertIcon />
              </IconButton>
            </div>
          );
        },
        sortable: false,
        filterable: false,
      },
    ];
      
    const rows = [
        { id: 1, ename: 'Jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', projectname: <button className={styles.adminbtn}>lorem ipsum</button>, skills: <button className={styles.adminbtn}>Front end</button>, employeetype:"lorem ipsum", joiningdate:"lorem ipsum", salary:"lorem ipsum", utilization:"lorem ipsum", revenueoppo:"lorem ipsum", options:<MoreVertIcon/>},
        { id: 2, ename: 'James', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', projectname: <button className={styles.adminbtn}>lorem ipsum</button>, skills: <button className={styles.adminbtn}>Front end</button>, employeetype:"lorem ipsum", joiningdate:"lorem ipsum", salary:"lorem ipsum", utilization:"lorem ipsum", revenueoppo:"lorem ipsum", options:<MoreVertIcon/>},
        { id: 3, ename: 'Mary', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', projectname: <button className={styles.adminbtn}>lorem ipsum</button>, skills: <button className={styles.adminbtn}>Front end</button>, employeetype:"lorem ipsum", joiningdate:"lorem ipsum", salary:"lorem ipsum", utilization:"lorem ipsum", revenueoppo:"lorem ipsum", options:<MoreVertIcon/>},
        { id: 4, ename: 'Michael', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', projectname: <button className={styles.adminbtn}>lorem ipsum</button>, skills: <button className={styles.adminbtn}>Front end</button>, employeetype:"lorem ipsum", joiningdate:"lorem ipsum", salary:"lorem ipsum", utilization:"lorem ipsum", revenueoppo:"lorem ipsum", options:<MoreVertIcon/>},
        { id: 5, ename: 'Jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', projectname: <button className={styles.adminbtn}>lorem ipsum</button>, skills: <button className={styles.adminbtn}>Front end</button>, employeetype:"lorem ipsum", joiningdate:"lorem ipsum", salary:"lorem ipsum", utilization:"lorem ipsum", revenueoppo:"lorem ipsum", options:<MoreVertIcon/>},
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
      <Avatar alt="A" src="/static/images/avatar/1.jpg" />
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
          Employees</label>
        <input type="text" className={styles.search} style={{alignContent:"center", justifyContent:"center", marginLeft:"250px", marginTop:"-45px" }} placeholder="Search"></input>
        <button className="openModalBtn" style={{ marginLeft:"1250px", marginTop:"-20px", backgroundColor:"black", color:"white", borderRadius:"12px", width:"180px",height:"35px",
      }}
        onClick={() => {
          setModalOpen(true);
        }}>+ Add Employees</button>
        {modalOpen && <Modal setOpenModal={setModalOpen} />}
      </div>
      <div className={styles.grid}>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={dataa}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
      <Paper>
    </Paper>
      </div>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="right"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              marginLeft:"1350px",
              marginTop:"240px",
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom"
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>View</MenuItem>
                  <MenuItem onClick={handleClose}>Archive</MenuItem>
                  <MenuItem onClick={handleClose}>Delete</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      </div>
    
  </>
  )
}
export default Employees