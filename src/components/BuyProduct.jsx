import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Stack,
  TextField,
} from "@mui/material"
import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toast"
import { creditCardSchema } from "../utils/schemas"

const BuyProduct = () => {
  const navigate = useNavigate()

  const { errors, handleSubmit, handleChange, values, touched, handleBlur } =
    useFormik({
      initialValues: {
        cardHolder: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
      },
      onSubmit: (values, { resetForm }) => {
        toast.success("Your payment was received! Thank you!")
        setTimeout(() => {
          navigate("/gadget")
        }, 2000)
        resetForm({ values: "" })
      },
      validationSchema: creditCardSchema,
    })

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
        fontSize: "24px",
        fontWeight: "bold",
      }}
    >
      <Box sx={{ marginBottom: "30px" }}>Payment with credit card</Box>
      <Box sx={{ width: "90vw" }}>
        <form
          style={{ display: "flex", flexDirection: "column", gap: "60px" }}
          onSubmit={handleSubmit}
        >
          <FormControl>
            <TextField
              id="cardHolder"
              label="Cardholder name"
              variant="standard"
              name="cardHolder"
              value={values.cardHolder}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              error={errors.cardHolder && touched.cardHolder}
            />
            {errors.cardHolder && touched.cardHolder ? (
              <FormHelperText id="component-error-text" sx={{ color: "red" }}>
                {errors.cardHolder}
              </FormHelperText>
            ) : null}
          </FormControl>
          <FormControl>
            <TextField
              id="cardNumber"
              label="Card number"
              variant="standard"
              name="cardNumber"
              value={values.cardNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              error={errors.cardNumber && touched.cardNumber}
            />
            {errors.cardNumber && touched.cardNumber ? (
              <FormHelperText id="component-error-text" sx={{ color: "red" }}>
                {errors.cardNumber}
              </FormHelperText>
            ) : null}
          </FormControl>
          <Stack direction="row" spacing={2}>
            <FormControl sx={{ width: "50vw" }}>
              <TextField
                id="expirationDate"
                label="MM/YY"
                variant="standard"
                name="expirationDate"
                value={values.expirationDate}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
                error={errors.expirationDate && touched.expirationDate}
              />
              {errors.expirationDate && touched.expirationDate ? (
                <FormHelperText id="component-error-text" sx={{ color: "red" }}>
                  {errors.expirationDate}
                </FormHelperText>
              ) : null}
            </FormControl>
            <FormControl sx={{ width: "50vw" }}>
              <TextField
                id="cvv"
                label="CVV"
                variant="standard"
                name="cvv"
                value={values.cvv}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
                error={errors.cvv && touched.cvv}
              />
              {errors.cvv && touched.cvv ? (
                <FormHelperText id="component-error-text" sx={{ color: "red" }}>
                  {errors.cvv}
                </FormHelperText>
              ) : null}
            </FormControl>
          </Stack>
          <Button
            variant="contained"
            type="submit"
            sx={{
              display: "flex",
              height: "50px",
            }}
          >
            Paynow
          </Button>
        </form>
      </Box>
      <ToastContainer position="top-center" />
    </Box>
  )
}

export default BuyProduct
