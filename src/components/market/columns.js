// columns.js
import { Avatar, IconButton, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { teal } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Link from 'next/link';


let action =  {
  Header: 'n.n/',
  accessor: null,
  Cell: () => {
    const theme = useTheme();
    return (
      <IconButton sx={{ color: theme.palette.customColors.white }} component={Link} href="/market/crypto/chart">
        <MoreVertIcon />
      </IconButton>
    );
  }
}

const columns = [
  {
    Header: '#',
    accessor: 'rank'
  },
  {
    Header: 'Crypto',
    accessor: null,
    Cell: ({ name, symbol, logo }) => (
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar src={logo.src} sx={{ boxShadow: `0 0 15px -5px ${teal[200]}` }} />
        <Stack>
          <Typography variant="caption">{name}</Typography>
          <Typography variant="caption">{symbol}</Typography>
        </Stack>
      </Stack>
    )
  },
  {
    Header: 'Precio',
    accessor: null,
    Cell: ({ price, h24 }) => {
      const theme = useTheme();
      const md = useMediaQuery(theme.breakpoints.up('md'));
      return (
        <Stack direction={md ? 'row' : 'column'} spacing={1}>
          <Typography variant="caption" align="right">{price}</Typography>
          <Typography variant="caption" color="secondary" align="right">{h24}</Typography>
        </Stack>
      );
    }
  },
];

let columnsLg = [
  ...columns,
  { Header: 'C. Circulación', accessor: 'circulatingSupply' },
  { Header: 'S. Total', accessor: 'totalSupply' },
  { Header: 'S. Máximo', accessor: 'maxSupply' },
  { Header: 'MarketCap', accessor: 'marketCap' },
  { Header: 'Vol 24h', accessor: 'volume24h' },
  { Header: '24h %', accessor: 'change24h' },
  { Header: 'Max', accessor: 'high24h' }
];
columnsLg.push(action);
columns.push(action);
export { columns, columnsLg };
