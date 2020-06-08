import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class ReaderDetails extends Component {
    render() {
        return(
            <div>
                 <TableContainer component={Paper} maxWidth={100}>
                     <Table aria-label="spanning table">
                         <TableBody>
                            <TableRow>
                                <TableCell>Make:</TableCell>
                                <TableCell align="left">Impinj</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Model:</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Protocol:</TableCell>
                                <TableCell>LLRP</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Host Name:</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Port:</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Antennas:</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Connection Status:</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                         </TableBody>
                     </Table>
                 </TableContainer>
            </div>
        );
    }
}

export default ReaderDetails;