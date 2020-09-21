import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';


import { Grid, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Table } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
    table: {
        minWidth: 600,
    },
    roots: {
        flexGrow: 1,
    },
});


function MainTop() {
    const classes = useStyles();
    return (
        <div className={classes.roots}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                <span> <h1 >Harga Cabai Bulanan</h1><em>Harga rata-rata tahun 2010-2019</em></span>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <h3><p>Cabai Rawit</p></h3>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Bulan</StyledTableCell>
                                    <StyledTableCell align="center">Nasional</StyledTableCell>
                                    <StyledTableCell align="center">Provinsi</StyledTableCell>
                                    <StyledTableCell align="center">Kab/Kota</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{row.calories}</StyledTableCell>
                                        <StyledTableCell align="center">{row.fat}</StyledTableCell>
                                        <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <h3><p>Cabai Merah Besar</p></h3>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Bulan</StyledTableCell>
                                    <StyledTableCell align="center">Nasional</StyledTableCell>
                                    <StyledTableCell align="center">Provinsi</StyledTableCell>
                                    <StyledTableCell align="center">Kab/Kota</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{row.calories}</StyledTableCell>
                                        <StyledTableCell align="center">{row.fat}</StyledTableCell>
                                        <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>
    )
}

export default MainTop
