import {
  Box,
  Button,
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
import { modalStyle } from '../utils/modalStyle';
import CreateIngredientForm from "./CreateIngredientForm";
import { useDispatch, useSelector } from "react-redux";
import { updateStockOfIngredient } from "../../State/Admin/Ingredients/Action";

const menus = [1, 2, 3];

const IngredientTable = () => {
    const[openModal,setOpenModal] = useState(false);
    const { restaurant, ingredients } = useSelector((store) => store);
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");

   const handleOnClose = ()=> setOpenModal(false);
    const handleOpenModal = ()=> setOpenModal(true);

    const handleUpdateStock = (id) => {
      dispatch(updateStockOfIngredient({ id, jwt }));
    }

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
            {ingredients.ingredients?.map((ingredient) => (
              <TableRow
                key={ingredient.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{ingredient.id}</TableCell>
                <TableCell align="left">{ingredient.name}</TableCell>
                <TableCell align="left">{ingredient.category.name}</TableCell>
                <TableCell align="left"><Button onClick={()=> handleUpdateStock(ingredient.id)}>{ingredient.inStoke?"IN_STOCK":"OUT_OF_STOCK"}</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={openModal} onClose={handleOnClose}>
        <Box sx={modalStyle}>
          <CreateIngredientForm />
        </Box>
      </Modal>
    </Box>
  );
};

export default IngredientTable;
