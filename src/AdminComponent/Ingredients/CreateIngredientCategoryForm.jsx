import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createIngredient } from "../../State/Admin/Ingredients/Action";

const CreateIngredientCategoryForm = () => {
    const dispatch = useDispatch();
    const {restaurant} = useSelector(store => store);
    
    const jwt = localStorage.getItem("jwt");

  const [formData, setFormData] = useState({
    name: "",
    restaurantId:""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: formData.name,
      restaurantId:restaurant.userRestaurant?.id
    };
    dispatch(createIngredient({data, jwt}));
    console.log("data", data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="">
      <div className="p-5 space-y-5">
        <h1 className="text-gray-400 text-center text-xl pb-10">
          Create Ingredient Category
        </h1>
        <form onSubmit={(e) => handleSubmit(e)} className="space-y-5">
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Category"
            variant="outlined"
            onChange={handleInputChange}
            value={formData.name}
          ></TextField>

          <Button color="primary" variant="contained" type="submit">
            {" "}
            Create
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateIngredientCategoryForm;
