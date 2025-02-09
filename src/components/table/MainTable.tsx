import { Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

interface Props {
  cols: any[],
  data: any[] | undefined | null;
  loading?: boolean;
}


export default function MainTable({ cols, data=[], loading }:Props) {
  return (
    <Container>
    <TableContainer component={Box}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {cols.map((column, idxColumn) => (
              <TableCell key={idxColumn} sx={{ fontWeight: "bold", color: 'white' }}  align={idxColumn !== cols.length - 1 ? 'left' : 'right'}>{column.Header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
        { 
        loading ? <TableRow><TableCell colSpan={cols.length}>Loading...</TableCell></TableRow> :
        data?.map((row:any, rowIndex:number) => (
            <TableRow key={rowIndex} sx={{color: 'white'}}>
              {cols.map((column:any, columnIndex:number) => (
                <TableCell sx={{color: 'white'}} key={columnIndex} align={columnIndex !== cols.length - 1 ? 'left' : 'right'}>
                 {column?.accessor ? row[column?.accessor] : column?.Cell ? column.Cell(row) : null}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}