import { Avatar, Box, Stack, Typography } from '@mui/material';
import { teal } from '@mui/material/colors';
import Image from 'next/image';
import React from 'react'
const columns = [
  {
    Header: '#',
    accessor: 'rank'
  },
  {
    Header: 'Crypto',
    Cell: ({
      name, symbol, logo
    }) => {
      return (
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar src={logo.src} sx={{
            boxShadow: `0 0 15px -5px ${teal[200]}`
          }}/>
          {/* <Image 
            src={logo}
            width={20}
            height={20}
            // style={{}}
          /> */}
          <Stack>
            <Typography variant="caption">{name}</Typography>
            <Typography variant="caption">{symbol}</Typography>
          </Stack>
        </Stack>
      )
    }
  },
  {
    Header: 'Precio',
    accessor: 'price'
  },
  {
    Header: '24h',
    accessor: 'h24'
  },
]

export default columns