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
import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import { modalStyle } from '../utils/modalStyle';
import CreateFoodCategoryForm from "./CreateFoodCategoryForm";
import { getRestaurantsCategory } from "../../State/Restaurant/Action";
import { useDispatch, useSelector } from "react-redux";

const categories = [1, 2, 3];

const FoodCategoryTable = () => {
  const[openModal,setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const {restaurant} = useSelector(store=>store);

  const jwt = localStorage.getItem("jwt");

 const handleOnClose = ()=> setOpenModal(false);
  const handleOpenModal = ()=> setOpenModal(true);

  useEffect(()=>{
        dispatch(getRestaurantsCategory({restaurantId:restaurant.userRestaurant?.id, jwt}));
      },[])
  
  return (
    <>
      <Box>
        <Card className="mt-1">
          <CardHeader
            title={"Categories"}
            sx={{ pt: 2, alignItems: "center" }}
            action={
              <IconButton
                onClick={handleOpenModal}
                aria-label="settings"
              >
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
              </TableRow>
            </TableHead>
            <TableBody>
              {restaurant.categories.map((category) => (
                <TableRow
                  key={category.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{category.id}</TableCell>
                  <TableCell align="left">{category.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Modal
        open={openModal}
        onClose={handleOnClose}
      >
        <Box sx={modalStyle}>
          <CreateFoodCategoryForm />
        </Box>
      </Modal>
    </>
  );
};

export default FoodCategoryTable;
