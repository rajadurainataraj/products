/* eslint-disable no-undef */
import * as Yup from "yup"
import * as yup from "yup"

export const basicSchema = yup.object({
  name: yup.string().min(5).required("Required"),
  email: yup.string().email("please enter a valid email").required("Required"),
  password: yup.string().min(5).required("Required"),
})
export const loginSchema = yup.object({
  email: yup.string().email("please enter a valid email").required("Required"),
  password: yup.string().min(8).required("Required"),
})

export const creditCardSchema = Yup.object().shape({
  cardHolder: Yup.string()
    .required("Cardholder name is required")
    .matches(/^[a-zA-Z ]*$/, "Invalid cardholder name"),

  cardNumber: Yup.string()
    .required("Card number is required")
    .matches(/^[0-9]{16}$/, "Invalid card number"),

  expirationDate: Yup.string()
    .required("Expiration date is required")
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid expiration date"),

  cvv: Yup.string()
    .required("CVV is required")
    .matches(/^[0-9]{3,4}$/, "Invalid CVV"),
})
