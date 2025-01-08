import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    name: "",
    location:"",
    imageUrl:""
  });

  const handleSubmit = (e) => {
    // e.preventDefault();
    const data = {
      name: formData.name,
      location: formData.location,
      imageUrl: formData.imageUrl,
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
          Create Event
        </h1>
        <form onSubmit={(e) => handleSubmit(e)} className="space-y-5">
          <TextField
            fullWidth
            id="imageUrl"
            name="imageUrl"
            label="Image URL"
            variant="outlined"
            onChange={handleInputChange}
            value={formData.imageUrl}
          ></TextField>
<TextField
            fullWidth
            id="location"
            name="location"
            label="Location"
            variant="outlined"
            onChange={handleInputChange}
            value={formData.location}
          ></TextField>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Event Name"
            variant="outlined"
            onChange={handleInputChange}
            value={formData.name}
          ></TextField>
          <Button color="primary" variant="contained" type="submit">
            {" "}
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
