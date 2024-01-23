/* eslint-disable no-unused-vars */
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
import { useRecoilState } from "recoil"
import { loginSchema } from "../utils/schemas"
import { tokenValue } from "../utils/globalState"
import axios from "axios"

const Login = () => {
  const [token, setToken] = useRecoilState(tokenValue)
  const navigate = useNavigate()
  const { errors, handleSubmit, handleChange, values, touched, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: (values, { resetForm }) => {
        // const userData = {
        //   email: values.email,
        //   password: values.password,
        // }
        const userData2 = {
          username: "kminchelle",
          password: "0lelplR",
        }
        axios
          // .post("http://localhost:8000/users/login", userData)
          .post("https://dummyjson.com/auth/login", userData2)

          .then((response) => {
            setToken(response?.data?.token)

            if (response.status === 200) {
              navigate("/gadget")
            }
          })
        resetForm({ values: "" })
      },
      validationSchema: loginSchema,
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
        Login Form
      </Box>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
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
            type="password"
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
          Login
        </Button>
      </form>
      <Box sx={{ display: "flex" }}>
        <Typography variant="p">Not a member?</Typography>
        <Link to="/signup">
          <Typography variant="p" sx={{ color: "#1976d2", marginLeft: "5px" }}>
            Register now
          </Typography>
        </Link>
      </Box>
      <Box>
        <Typography variant="p" sx={{ color: "blue" }}>
          hint:
        </Typography>
        <Typography variant="p">
          (use any valid email and any 8 digit password for login)
        </Typography>
      </Box>
    </Box>
  )
}

export default Login
