import React, { Component } from 'react';
import {AppBar,Toolbar,Container,Typography,Box, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ReaderControls from './ConfigComponents/ReaderControls'
import ReaderDetails from './ConfigComponents/ReaderDetails'
import AntennaList from './ConfigComponents/AntennaList'

const useStyles = makeStyles((theme) => ({
    container: {
      background: '#c5cae9',
      border: 1,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'black',
    },
    table: {
        maxWidth: 870,
        border:0,
      },
      button: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
  }));
  

function ReaderConfiguration (){
  const classes = useStyles();

     return(
    <Container maxWidth="xl">
         <AppBar position="static">
             <Toolbar>
                 <Typography variant="h6" className={classes.title}>
                     Reader X
                 </Typography>
             </Toolbar>
         </AppBar>
         <Container className={classes.container} maxWidth="md">                  
         <TableContainer>
                     <Table className={classes.table} aria-label="spanning table">
                         <TableHead>
                             <TableRow>
                                 <TableCell align="left">Configuration</TableCell>
                                 <TableCell align="center">Details</TableCell>
                             </TableRow>
                         </TableHead>
                         <TableBody>
                            <TableRow>
                                <TableCell><div id="div_reader_control"><ReaderControls/></div></TableCell>
                                <TableCell><div id="div_reader_details"><ReaderDetails/></div></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center" colSpan={2}><div id="div_antenna_list"><AntennaList/></div></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center" colSpan={2}>
                                     <div id="div_buttons" className={classes.button}>
                                         <Button variant="contained" size="small">
                                             Back
                                         </Button>
                                         <Button variant="contained" color="primary" size="small">
                                             Apply
                                         </Button>
                                     </div>
                                </TableCell>
                            </TableRow>
                         </TableBody>
                     </Table>
                 </TableContainer>
        </Container >
    </Container>
 ); 
}

export default ReaderConfiguration;