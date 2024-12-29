import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import { useDispatch } from "react-redux";
import { registerUser } from "../State/Authentication/Action";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  role: "",
};

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(registerUser({userData:values, navigate}))
    console.log("form data", values);
    
  };

  const handleRoleChange = (value) => {
    console.log("");
    
  };

  return (
    <div>
      <Typography variant="h5" className="text-center">
        Register
      </Typography>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 12 }}>
              <Field
                as={TextField}
                name="fullName"
                label="Full Name"
                fullWidth
                variant="outlined"
              ></Field>
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
              <Field
                as={TextField}
                name="email"
                label="Email"
                fullWidth
                variant="outlined"
              ></Field>
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
              <Field
                as={TextField}
                name="password"
                label="Password"
                fullWidth
                variant="outlined"
                type="password"
                // margin="normal"
              ></Field>
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
              
            <FormControl fullWidth>
                <InputLabel id="role-simple-select-label">Role</InputLabel>
                <Field 
                    as={Select}
                    name="role"
                    labelId="role-simple-select-label"
                    id="role-simple-select"
                    // value={age}
                    label="Role"
                    // onChange={handleRoleChange}
                    fullWidth
                    variant="outlined"
                >
                    <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                    <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
                    <MenuItem value={"ROLE_ADMIN"}>Admin</MenuItem>
                </Field>
            </FormControl>
            </Grid>

            <Grid size={{ xs: 12, md: 12 }}>
              <Button
                sx={{ mt: 2, padding: "1rem" }}
                fullWidth
                type="submit"
                color="primary"
                variant="contained"
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
      <Typography varian="body2" align="center" sx={{ mt: 3 }}>
        have account?
        <Button
          size="small"
          onClick={() => navigate("/account/login")}
          className=""
        >
          login
        </Button>
      </Typography>
    </div>
  );
};

export default RegisterForm;
