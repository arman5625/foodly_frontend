import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
const CreateEvent = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    imageUrl: "",
    startedAt: null,
    endsAt: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: formData.name,
      location: formData.location,
      imageUrl: formData.imageUrl,
      startedAt: formData.startedAt,
      endsAt: formData.endsAt,
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

  const handleDateChange = (date, dateType) => {
    const formatedDate = dayjs(date).format("MMMM DD,YYYY hh:mm A");
    setFormData({
      ...formData,
      [dateType]: formatedDate,
    });
  };

  return (
    <div className="">
      <div className="p-5 space-y-5">
        <h1 className="text-gray-400 text-center text-xl pb-10">
          Create Event
        </h1>
        <form onSubmit={(e) => handleSubmit(e)} className="space-y-5">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 12 }}>
              <TextField
                fullWidth
                id="imageUrl"
                name="imageUrl"
                label="Image URL"
                variant="outlined"
                onChange={handleInputChange}
                value={formData.imageUrl}
              ></TextField>
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
              <TextField
                fullWidth
                id="location"
                name="location"
                label="Location"
                variant="outlined"
                onChange={handleInputChange}
                value={formData.location}
              ></TextField>
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Event Name"
                variant="outlined"
                onChange={handleInputChange}
                value={formData.name}
              ></TextField>
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  onChange={(newValue) =>
                    handleDateChange(newValue, "startedAt")
                  }
                  label="Start Date and Time"
                  className="w-full"
                  inputFormate="MM/DD/YYYY hh:mm a"
                  sx={{ width: "100%" }}
                ></DateTimePicker>
              </LocalizationProvider>
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  onChange={(newValue) =>
                    handleDateChange(newValue, "endsAt")
                  }
                  label="End Date and Time"
                  className="w-full"
                  inputFormate="MM/DD/YYYY hh:mm a"
                  sx={{ width: "100%" }}
                ></DateTimePicker>
              </LocalizationProvider>
            </Grid>
            <Button color="primary" variant="contained" type="submit">
              {" "}
              Submit
            </Button>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
