import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    box: {
      background: '#c5cae9',
      border: 1,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'black',
      //height: 600,
      flexGrow: 1,
      display: 'block',
    },
    table: {
        //minWidth: 700,
      },
      button: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
  }));

class ReaderControls extends Component {
    // state = {
    //     reader_state: true
    // }
    // handleChange = (event) => {

    // };
    render() {
        return(
            <div>
                <TableContainer>
                     <Table aria-label="spanning table">
                         <TableBody>
                            <TableRow>
                                <TableCell>Mode:</TableCell>
                                <TableCell align="left">
                                    <DropdownButton title="Select mode">
                                        <Dropdown.Item href="#/action-1">Mode 1</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Mode 2</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Mode 3</Dropdown.Item>
                                    </DropdownButton>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Session:</TableCell>
                                <TableCell>
                                    <DropdownButton title="Select session">
                                        <Dropdown.Item href="#/action-1">Session 1</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Session 2</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Session 3</Dropdown.Item>
                                    </DropdownButton>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Start/Stop:</TableCell>
                                <TableCell>
                                    <Switch
                                        // checked={state.reader_state}
                                        // onChange={handleChange}
                                        color="primary"
                                        name="readerSwitch"
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                </TableCell>
                            </TableRow>
                         </TableBody>
                     </Table>
                 </TableContainer>
            </div>
        );
    }
}

export default ReaderControls;