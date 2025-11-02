import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, type, entryPrice, currentPrice, quant, profitLoss, status) {
  return { name, type, entryPrice, currentPrice, quant, profitLoss, status };
}

const rows = [
  createData('BTC/USD', 'Buy', 45000,  46000,  0.5,    +600,   'Profit'),
  createData('ETH/USD', 'Buy', 3200,   3350,    2,   -300,   'Loss'),
  createData('GOLD', 'Buy',    58000,  58400,   1,   +400,   'Profit'),
  createData('AAPL', 'Buy',    180,    178,    10,    -20,   'Loss'),
  createData('TSLA', 'Buy',    250,    240,    5,    +50,   'Profit'),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ Width: 500 }} aria-label="customized table">
        <TableHead>

          <TableRow>
            <StyledTableCell>ASSET</StyledTableCell>
            <StyledTableCell align="right">TYPE</StyledTableCell>
            <StyledTableCell align="right">ENTRY PRICE</StyledTableCell>
            <StyledTableCell align="right">CURRENT PRICE</StyledTableCell>
            <StyledTableCell align="right">QUANTITY</StyledTableCell>
            <StyledTableCell align="right">P/L&nbsp;(₹)</StyledTableCell>
            <StyledTableCell align="right">STATUS</StyledTableCell>
          </TableRow>

        </TableHead>


        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.type}</StyledTableCell>
              <StyledTableCell align="right">{row.entryPrice}</StyledTableCell>
              <StyledTableCell align="right">{row.currentPrice}</StyledTableCell>
              <StyledTableCell align="right">{row.quant}</StyledTableCell>
              <StyledTableCell align="right">{row.profitLoss}</StyledTableCell>
              <StyledTableCell
                    align="right"
                    sx={{ color: row.profitLoss > 0? "green": "red", fontWeight: 900 }}
                >
                    {rows.profitLoss > 0 ? `+${row.profitLoss}` : row.profitLoss}

                </StyledTableCell>  
              
            </StyledTableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
}


