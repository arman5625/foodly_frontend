import { useFormik } from "formik";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { CircularProgress, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const initialValues = {
  name:"",
  description:"",
  cuisineType:"",
  city:"",
  stateProvince:"",
  postalCode:"",
  country:"",
  email:"",
  mobile:"",
  twitter:"",
  instagram:"",
  openingHours:"Mon-Sun : 9:00 AM - 12:00 PM",
  images:[],

}

const CreateRestaurantForm = () => {
  const [uploadImage, setUploadImage] = useState(false);
  const formik = useFormik({
    initialValues,
    onSubmit: () => {}
  });

  const handleImageChange = (e, value) => {};
  const handleRemoveImage = () => {};

  return (
    <div className="py-10 px-5 lg:flex items-center justify-center min-h-screen">
      <div className="lg:max-w-4xl">
      <h1 className="font-bold text-2xl text-center py-2">
        Add New Restaurant
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
              {[1, 2, 3].map((image, index) => (
                <div className="relative">
                  <img
                    src=""
                    alt=""
                    key={index}
                    className="w-24 h-24 object-cover"
                  />
                  <IconButton
                    onClick={() => handleRemoveImage(index)}
                    size="small"
                    sx={{
                      postion: "absolute",
                      top: 0,
                      right: 0,
                      outline: "none",
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </div>
              ))}
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 6 }}></Grid>
          <Grid size={{ xs: 12, md: 6, lg: 6 }}></Grid>
        </Grid>
      </form>
      </div>
    </div>
  );
};

export default CreateRestaurantForm;
