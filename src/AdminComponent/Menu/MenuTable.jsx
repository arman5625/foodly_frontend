import { Box, Card, CardHeader, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import { Delete } from '@mui/icons-material';

const menus = [1,2,3];


const MenuTable = () => {
  return (
    <Box>
        <Card className='mt-1'>
            <CardHeader
            title={"Menu"}
            sx={{pt:2, alignItems:"center"}}
            action={
                <IconButton aria-label="settings">
                    <CreateIcon/>
                </IconButton>
            }
            />
        </Card>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Ingredients</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Availability</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {menus.map((menu) => (
            <TableRow
              key={menu}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{"image"}</TableCell>
              <TableCell align="right">{"Burger"}</TableCell>
              <TableCell align="right">{""}</TableCell>
              <TableCell align="right">{300}</TableCell>
              <TableCell align="right">{"available"}</TableCell>
              <TableCell align="right">
                <IconButton>
                    <Delete/>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  )
}

export default MenuTable
