import {
  Box,
  Button,
  ButtonGroup,
  Container,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";
import Pagination from "./Pagination";

interface Props {
  cols: any[];
  data: any[] | undefined | null;
  loading?: boolean;
  pagination?: boolean;
}

export default function MainTable({
  cols = [],
  data = [],
  loading,
  pagination = false,
}: Props) {
  return (
    <Container>
      <TableContainer component={Box}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {cols.map((column, idxColumn) => (
                <TableCell
                  key={idxColumn}
                  sx={{ fontWeight: "bold", color: "white" }}
                  align={idxColumn !== cols.length - 1 ? "left" : "right"}
                >
                  {column.Header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={cols.length}>Loading...</TableCell>
              </TableRow>
            ) : (
              data?.map((row: any, rowIndex: number) => (
                <TableRow key={rowIndex} sx={{ color: "white" }}>
                  {cols.map((column: any, columnIndex: number) => (
                    <TableCell
                      sx={{ color: "white", padding: '16px 0' }}
                      key={columnIndex}
                      align={columnIndex !== cols.length - 1 ? "left" : "right"}
                    >
                      {column?.accessor
                        ? row[column?.accessor]
                        : column?.Cell
                        ? column.Cell(row)
                        : null}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      { pagination && <Pagination /> }
    </Container>
  );
}
