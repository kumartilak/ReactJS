import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import {Box} from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

class AntennaItem extends Component {
    render() {
        return(
            <Box component={Paper}>
                <TableContainer>
                    <Table aria-label="spanning table">
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <div> Antenna 1 </div>
                                </TableCell>

                                <TableCell>
                                    <div> Signal Strength </div>
                                    <div>
                                        <Slider width="100"
                                        // value={value} 
                                        // onChange={handleChange} 
                                        aria-labelledby="continuous-slider" /> 
                                    </div>
                                </TableCell>

                                <TableCell>
                                    <div align="center"> Inventory Search Mode </div>
                                    <div align="center">
                                        <DropdownButton title="Select mode">
                                            <Dropdown.Item href="#/action-1">Mode 1</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Mode 2</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Mode 3</Dropdown.Item>
                                        </DropdownButton>
                                    </div>

                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        );
    }
}

export default AntennaItem;