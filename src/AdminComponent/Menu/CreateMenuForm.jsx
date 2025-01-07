import { useFormik } from "formik";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Box, Button, Chip, CircularProgress, FormControl, IconButton, InputLabel, MenuItem, OutlinedInput, Select, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { uploadImageToCloudinary } from "../utils/uploadToCloudinary";

const initialValues = {
  name: "",
  description: "",
  price: "",
  category: "",
  restaurantId: "",
  vegetarian: true,
  seasonal: false,
  ingredients: [],
  images: [],
};



const CreateMenuForm = () => {
  const [uploadImage, setUploadImage] = useState(false);
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const data = {
        name: values.name,
        description: values.description,
        cuisineType: values.cuisineType,
        address: {
          streetAddress: values.streetAddress,
          stateProvince: values.stateProvince,
          city: values.city,
          postalCode: values.postalCode,
          country: values.country,
        },
        contactInformation: {
          email: values.email,
          mobile: values.mobile,
          twitter: values.twitter,
          instagram: values.instagram,
        },
        openingHours: values.openingHours,
        images: values.images,
      };
      console.log("data ---- ", data);
    },
  });

  const handleImageChange = async (e, value) => {
    const file = e.target.files[0];
    setUploadImage(true);
    const image = await uploadImageToCloudinary(file);
    formik.setFieldValue("images", [...formik.values.images, image]);
    setUploadImage(false);
  };
  const handleRemoveImage = (index) => {
    const updatedImages = [...formik.values.images];
    updatedImages.splice(index, 1);
    formik.setFieldValue("images", updatedImages);
  };

  return (
    <div className="py-10 px-5 lg:flex items-center justify-center min-h-screen">
      <div className="lg:max-w-4xl">
        <h1 className="font-bold text-2xl text-center py-2">
          Add New Food
        </h1>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <Grid container spacing={2}>
            <Grid
              className="flex flex-wrap gap-5"
              size={{ xs: 12, md: 12, lg: 12 }}
            >
              <input
                accept="image/*"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleImageChange}
                type="file"
              />
              <label htmlFor="fileInput" className="relative">
                <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-600">
                  <AddPhotoAlternateIcon className="text-white" />
                </span>
                {uploadImage && (
                  <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                    <CircularProgress />
                  </div>
                )}
              </label>
              <div className="flex flex-wrap gap-2">
                {formik.values.images.map((image, index) => (
                  <div className="relative">
                    <img
                      src={image}
                      alt=""
                      key={index}
                      className="w-24 h-24 object-cover"
                    />
                    <IconButton
                      onClick={() => handleRemoveImage(index)}
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        outline: "none",
                      }}
                    >
                      <CloseIcon sx={{ fontSize: "1rem" }} />
                    </IconButton>
                  </div>
                ))}
              </div>
            </Grid>
            <Grid size={{ xs: 12, md: 12, lg: 12 }}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.name}
              ></TextField>
            </Grid>
            <Grid size={{ xs: 12, md: 12, lg: 12 }}>
              <TextField
                fullWidth
                id="description"
                name="description"
                label="Description"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.description}
              ></TextField>
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 6 }}>
              <TextField
                fullWidth
                id="price"
                name="price"
                label="Price"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.price}
              ></TextField>
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 6 }}>
              <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Food Category</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                name="category"
                id="demo-simple-select"
                value={formik.values.category}
                label="Food Category"
                onChange={formik.handleChange}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            </FormControl>
            </Grid>
            <Grid size={{ xs: 12, md: 12, lg: 12 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-multiple-chip-label">Ingredients</InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  name="ingredients"
                  id="demo-multiple-chip"
                  multiple
                  value={formik.values.ingredients}
                  onChange={formik.handleChange}
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Ingredients" />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                //   MenuProps={MenuProps}
                >
                  {["bread", "sauce", "bun"].map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 6 }}>
              <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Is Vegetarian</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                name="vegetarian"
                id="demo-simple-select"
                value={formik.values.vegetarian}
                label="Food Category"
                onChange={formik.handleChange}
            >
                <MenuItem value={true}>True</MenuItem>
                <MenuItem value={false}>False</MenuItem>
            </Select>
            </FormControl>
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 6 }}>
              <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Is Seasonal</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                name="seasonal"
                id="demo-simple-select"
                value={formik.values.seasonal}
                label="Is Vegetarian"
                onChange={formik.handleChange}
            >
                <MenuItem value={true}>True</MenuItem>
                <MenuItem value={false}>False</MenuItem>
            </Select>
            </FormControl>
            </Grid>
          </Grid>
          <Button color="primary" variant="contained" type="submit">
            {" "}
            Create Menu Item
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateMenuForm;
