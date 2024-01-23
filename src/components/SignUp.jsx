import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material"

import { useFormik } from "formik"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { basicSchema } from "../utils/schemas"

const Signup = () => {
  const navigate = useNavigate()

  const { errors, handleSubmit, handleChange, values, touched, handleBlur } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
      },
      onSubmit: (values, { resetForm }) => {
        const userData = {
          email: values.email,
          password: values.password,
          userName: values.name,
        }
        axios
          .post("http://localhost:8000/users/signup", userData)
          .then((response) => {
            if (response.status === 200) {
              navigate("/login")
            }
          })

        resetForm({ values: "" })
      },

      validationSchema: basicSchema,
    })

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          fontWeight: "bold",
          padding: "20px 0",
          border: "1px solid #1976d2",
          width: "500px",
          textAlign: "center",
          borderRadius: "5px",
        }}
      >
        Register Form
      </Box>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <FormControl sx={{ width: "500px" }}>
          <TextField
            label="Name"
            id="name"
            name="name"
            variant="outlined"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name && touched.name}
          />
          {errors.name && touched.name ? (
            <FormHelperText id="component-error-text" sx={{ color: "red" }}>
              {errors.name}
            </FormHelperText>
          ) : null}
        </FormControl>
        <FormControl sx={{ width: "500px" }}>
          <TextField
            label="Username"
            id="email"
            name="email"
            variant="outlined"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email && touched.email}
          />
          {errors.email && touched.email ? (
            <FormHelperText id="component-error-text" sx={{ color: "red" }}>
              {errors.email}
            </FormHelperText>
          ) : null}
        </FormControl>
        <FormControl sx={{ width: "500px" }} variant="outlined">
          <TextField
            htmlFor="outlined-adornment-password"
            id="password"
            name="password"
            label="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.password && touched.password}
          >
            Password
          </TextField>
          {errors.password && touched.password ? (
            <FormHelperText id="component-error-text" sx={{ color: "red" }}>
              {errors.password}
            </FormHelperText>
          ) : null}
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          sx={{ width: "500px", padding: "10px 0", textTransform: "none" }}
        >
          Register
        </Button>
      </form>
      <Box sx={{ display: "flex" }}>
        <Typography variant="p">Exist User?</Typography>
        <Link to="/login">
          <Typography variant="p" sx={{ color: "#1976d2", marginLeft: "5px" }}>
            Login Now
          </Typography>
        </Link>
      </Box>
    </Box>
  )
}

export default Signup
