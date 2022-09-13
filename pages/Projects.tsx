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
import Modal from "../pages/Addprojectmodal";
import Grow from "@mui/material/Grow";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const Projects = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

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

  const [modalOpen, setModalOpen] = useState(false);
    const router = useRouter();

    const columns = [
      { field: 'id', headerName: 'Project Id', width: 90 },
      {
        field: 'pname',
        headerName: 'Name',
        width: 200,
        editable: true,
      },
      {
        field: 'client',
        headerName: 'Client',
        width: 250,
        editable: true,
      },
      {
        field: 'projecttype',
        headerName: 'Project Type',
        width: 190,
        editable: true,
      },
      {
        field: 'projectresponsible',
        headerName: 'Project Responsible',
        sortable: false,
        width: 200,
      },
      {
        field: 'startdate',
        headerName: 'Start Date',
        sortable: false,
        width: 160,
      },
      {
        field: 'enddate',
        headerName: 'End Date',
        sortable: false,
        width: 160,
      },
      {
        field: 'projectstatus',
        headerName: 'Project Status',
        sortable: false,
        width: 160,
      },
      {
        field: 'monthlystatus',
        headerName: 'Monthly Status',
        sortable: false,
        width: 160,
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
      { id: 1, pname: 'Jackson', client: 'Michael David', projecttype:'lorem Ipsum', projectresponsible:'lorem Ipsum', startdate:'01 Aug 2022', enddate:'24 sep 2022', projectstatus:'Running', monthlystatus:'Behind Schedule', options:<MoreVertIcon/> },
      { id: 2, pname: 'Jackson', client: 'Michael David', projecttype:'lorem Ipsum', projectresponsible:'lorem Ipsum', startdate:'01 Aug 2022', enddate:'24 sep 2022', projectstatus:'Running', monthlystatus:'Behind Schedule', options:<MoreVertIcon/> },
      { id: 3, pname: 'Jackson', client: 'Michael David', projecttype:'lorem Ipsum', projectresponsible:'lorem Ipsum', startdate:'01 Aug 2022', enddate:'24 sep 2022', projectstatus:'Running', monthlystatus:'Behind Schedule', options:<MoreVertIcon/> },
      { id: 4, pname: 'Jackson', client: 'Michael David', projecttype:'lorem Ipsum', projectresponsible:'lorem Ipsum', startdate:'01 Aug 2022', enddate:'24 sep 2022', projectstatus:'Running', monthlystatus:'Behind Schedule', options:<MoreVertIcon/> },
      { id: 5, pname: 'Jackson', client: 'Michael David', projecttype:'lorem Ipsum', projectresponsible:'lorem Ipsum', startdate:'01 Aug 2022', enddate:'24 sep 2022', projectstatus:'Running', monthlystatus:'Behind Schedule', options:<MoreVertIcon/> },
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
          Projects</label>
        <input type="text" className={styles.search} style={{alignContent:"center", justifyContent:"center", marginLeft:"250px", marginTop:"-45px" }} placeholder="Search"></input>
        <button className="openModalBtn" style={{ marginLeft:"1270px", marginTop:"-20px", backgroundColor:"black", color:"white", borderRadius:"12px",width:"150px",height:"35px",
      }}
        onClick={() => {
          setModalOpen(true);
        }}>+ Add Projects</button>
        {modalOpen && <Modal setOpenModal={setModalOpen} />}
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
export default Projects