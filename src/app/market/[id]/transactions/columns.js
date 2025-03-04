import theme from "@/app/theme/theme";
import { IconButton, List, ListItemText, Typography } from "@mui/material";

import BlurOnIcon from '@mui/icons-material/BlurOn';
export const columns = [
  {
    Header: "",
    Cell: ({
      crypto, price, amount, date, total, status, folio
    }) => (
      <List p={0} sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        gap: 1, 
        backgroundColor: theme.palette.customColors.transparentBlue, 
        padding: 1,
        borderRadius: 2
      }}>
        <ListItemText 
          primary={<Typography component="strong" variant="caption">Crypto: </Typography>}
          secondary={<Typography component="span" variant="caption">{crypto}</Typography>}
          sx={{
            display: 'flex', flexDirection: 'column', alignItems: 'flex-start'
          }}
        />
        
        <ListItemText 
          primary={<Typography component="strong" variant="caption">Price: </Typography>}
          secondary={<Typography component="span" variant="caption">{price}</Typography>}
          sx={{
            display: 'flex', flexDirection: 'column', alignItems: 'flex-start'
          }}
        />

        <ListItemText 
          primary={<Typography component="strong" variant="caption">Amount: </Typography>}
          secondary={<Typography component="span" variant="caption">{amount}</Typography>}
          sx={{
            display: 'flex', flexDirection: 'column', alignItems: 'flex-start'
          }}
        />

        <ListItemText 
          primary={<Typography component="strong" variant="caption">Date: </Typography>}
          secondary={<Typography component="span" variant="caption">{date}</Typography>}
          sx={{
            display: 'flex', flexDirection: 'column', alignItems: 'flex-start'
          }}
        />

        <ListItemText 
          primary={<Typography component="strong" variant="caption">Total: </Typography>}
          secondary={<Typography component="span" variant="caption">{total}</Typography>}
          sx={{
            display: 'flex', flexDirection: 'column', alignItems: 'flex-start'
          }}
        />

        <ListItemText 
          primary={<Typography component="strong" variant="caption">Status: </Typography>}
          secondary={<Typography component="span" variant="caption">{status}</Typography>}
          sx={{
            display: 'flex', flexDirection: 'column', alignItems: 'flex-start'
          }}
        />

        <ListItemText 
          primary={<Typography component="strong" variant="caption">Folio: </Typography>}
          secondary={<Typography component="span" variant="caption">{folio}</Typography>}
          sx={{
            display: 'flex', flexDirection: 'column', alignItems: 'flex-start'
          }}
        />
          <IconButton ><BlurOnIcon /></IconButton>
      </List>
    )
  }
];

export const columnsLg = [
  {
    Header: "Crypto",
    accessor: "crypto",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Date",
    accessor: "date",
  },
  {
    Header: "Total",
    accessor: "total",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Folio",
    accessor: "folio",
  },
  {
    Header: "Sender Address",
    accessor: "senderAddress",
  },
  {
    Header: "Receiver Address",
    accessor: "receiverAddress",
  },
];