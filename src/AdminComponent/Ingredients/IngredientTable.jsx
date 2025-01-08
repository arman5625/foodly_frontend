import {
  Box,
  Card,
  CardHeader,
  IconButton,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import { style } from "../../component/Cart/Cart";
import CreateIngredientForm from "./CreateIngredientForm";

const menus = [1, 2, 3];

const IngredientTable = () => {
    const[openModal,setOpenModal] = useState(false);
  
   const handleOnClose = ()=> setOpenModal(false);
    const handleOpenModal = ()=> setOpenModal(true);

  return (
    <Box>
      <Card className="mt-1">
        <CardHeader
          title={"Ingredients"}
          sx={{ pt: 2, alignItems: "center" }}
          action={
            <IconButton onClick={handleOpenModal} aria-label="settings">
              <CreateIcon />
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
              <TableCell align="left">Category</TableCell>
              <TableCell align="left">Availability</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {menus.map((menu) => (
              <TableRow
                key={menu}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{menu}</TableCell>
                <TableCell align="left">{"Almond"}</TableCell>
                <TableCell align="left">{"Nuts & seeds"}</TableCell>
                <TableCell align="left">{"IN STOCK"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={openModal} onClose={handleOnClose}>
        <Box sx={style}>
          <CreateIngredientForm />
        </Box>
      </Modal>
    </Box>
  );
};

export default IngredientTable;
