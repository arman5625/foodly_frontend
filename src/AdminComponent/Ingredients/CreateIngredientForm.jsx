import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";

const CreateIngredientForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    restaurantId: "",
    ingredientCategoryId:""
  });

  const handleSubmit = (e) => {
    // e.preventDefault();
    const data = {
      name: formData.name,
      ingredientCategoryId: formData.ingredientCategoryId,
      restaurantId: {
        id: 1,
      },
    };

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
          Create Ingredient
        </h1>
        <form onSubmit={(e) => handleSubmit(e)} className="space-y-5">
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            onChange={handleInputChange}
            value={formData.name}
          ></TextField>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              name="ingredientCategoryId"
              id="demo-simple-select"
              value={formData.ingredientCategoryId}
              label="Category"
              onChange={handleInputChange}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
            </Select>
          </FormControl>

          <Button color="primary" variant="contained" type="submit">
            {" "}
            Create
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateIngredientForm;
