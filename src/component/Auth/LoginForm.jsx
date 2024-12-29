import { Button, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Field, Formik, Form } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../State/Authentication/Action";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(loginUser({ userData: values, navigate }));
    console.log("login", values);
  };

  return (
    <div>
      <Typography variant="h5" className="text-center">
        Login
      </Typography>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Grid container spacing={2}>
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
                // margin="normal"
              ></Field>
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
              <Button
                sx={{ mt: 2, padding: "1rem" }}
                fullWidth
                type="submit"
                color="primary"
                variant="contained"
              >
                LogIn
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
      <Typography varian="body2" align="center" sx={{ mt: 3 }}>
        Don't have an account?
        <Button
          size="small"
          onClick={() => navigate("/account/register")}
          className=""
        >
          register
        </Button>
      </Typography>
    </div>
  );
};

export default LoginForm;
