import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const CreateIngredientCategoryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleSubmit = (e) => {
    // e.preventDefault();
    const data = {
      name: formData.name,
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
