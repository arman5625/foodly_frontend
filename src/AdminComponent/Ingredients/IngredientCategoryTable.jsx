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
import CreateIngredientCategoryForm from "./CreateIngredientCategoryForm";
import { modalStyle } from "../utils/modalStyle";
import { useDispatch, useSelector } from "react-redux";

const menus = [1, 2, 3];

const IngredientCategoryTable = () => {
  const { ingredients } = useSelector((store) => store);
  const [openModal, setOpenModal] = useState(false);

  const handleOnClose = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);

  console.log("ingredients",ingredients)
  return (
    <Box>
      <Card className="mt-1">
        <CardHeader
          title={"Category"}
          sx={{ pt: 2, alignItems: "center" }}
          action={
            <IconButton onClick={handleOpenModal} aria-label="settings">
              <CreateIcon />
            </IconButton>
          }
        />
      </Card>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Id</TableCell>
              <TableCell align="left">Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ingredients.category?.map((ingredientCategory) => (
              <TableRow
                key={ingredientCategory.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{ingredientCategory.id}</TableCell>
                <TableCell align="left">{ingredientCategory.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={openModal} onClose={handleOnClose}>
        <Box sx={modalStyle}>
          <CreateIngredientCategoryForm />
        </Box>
      </Modal>
    </Box>
  );
};

export default IngredientCategoryTable;
