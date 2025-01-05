import { Box, Card, CardHeader, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import CreateIcon from '@mui/icons-material/Create';

const categories = [1,2,3];


const FoodCategoryTable = () => {
  return (
    <Box>
        <Card className='mt-1'>
            <CardHeader
            title={"Categories"}
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
            <TableCell align="left">Id</TableCell>
            <TableCell align="left">Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow
              key={category}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{category}</TableCell>
              <TableCell align="left">{"Burger"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  )
}

export default FoodCategoryTable
