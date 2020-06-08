import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import AntennaItem from './AntennaItem'

let rowData = {
    name: "row1"
}

const rows = [
    rowData
]

class AntennaList extends Component {
    render() {
        return(
            <div>
                <TableContainer>
                     <Table aria-label="spanning table">
                         <TableBody>
                             {
                                 rows.map((row) => (
                                    <TableRow>
                                    <TableCell>
                                        <AntennaItem/>
                                    </TableCell>
                                </TableRow>
                                 ))
                             }
                            
                         </TableBody>
                     </Table>
                 </TableContainer>
            </div>
        );
    }
}

export default AntennaList;