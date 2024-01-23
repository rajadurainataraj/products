/* eslint-disable no-unused-vars */
import { Box, Button, Rating, Stack } from "@mui/material"

import { useQuery } from "react-query"
import { useNavigate, useParams } from "react-router-dom"
import TabView from "./TabView"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import axiosPrivate from "../utils/axiosPrivate"

import Skeldon from "./Skeldon"
import { useRecoilState } from "recoil"
import { cartItems } from "../utils/globalState"

import { ToastContainer, toast } from "react-toast"
import SearchAppBar from "./SearchAppBar"

const GadgetDetails = () => {
  const [cart, setCart] = useRecoilState(cartItems)
  const { ids } = useParams()
  const navigate = useNavigate()
  const fetchData = () => {
    return axiosPrivate.get("products/" + ids)
  }
  const { isLoading, data, isError, error } = useQuery("product", fetchData)
  if (isLoading) {
    return <Skeldon />
  }
  if (isError) {
    return <h2>{error.message}</h2>
  }

  const { images, title, price, description, rating, id } = data.data
  const handleCart = (id, images, title, price) => {
    const items = { id: id, images: images[0], title: title, price: price }

    const isAlreadyInCart = cart.some((item) => item.id === items.id)
    if (!isAlreadyInCart) {
      setCart((prevCart) => [...prevCart, items])
      toast.success("item added to cart successfully")
    } else {
      toast.warn("product with the same id already exists in the cart")
    }
  }

  return (
    <>
      <SearchAppBar />
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            width: "40vw",
            height: "100vh",
            background: "linear-gradient(to bottom, #66ffff 0%, #00cc66 100%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            textAlign: "center",
          }}
        >
          <Box sx={{ color: "white", fontSize: "25px" }}>{title}</Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={images[0]} height="300px" width="300px" alt={title} />
          </Box>
          <Box
            sx={{
              fontSize: "30px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            $ {price}
          </Box>
        </Box>
        <Box sx={{ width: "60vw", padding: "20px" }}>
          <Box
            sx={{
              fontSize: "30px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {title}
            <Stack spacing={1}>
              <Rating
                name="read-only"
                defaultValue={rating}
                precision={0.5}
                readOnly
              />
            </Stack>
          </Box>
          <Box sx={{ marginTop: "50px" }}>
            <TabView detail={description} />
          </Box>
          <Box
            sx={{
              marginTop: "100px",
              display: "flex",
              gap: "30px",
            }}
          >
            <Button
              variant="contained"
              endIcon={<ShoppingCartIcon />}
              sx={{ padding: "12px 100px ", height: "60px" }}
              onClick={() => navigate("/buynow")}
            >
              Buy Now
            </Button>
            <Button
              variant="contained"
              endIcon={<FavoriteBorderIcon />}
              color="success"
              sx={{
                padding: "12px 80px ",
                height: "60px",
              }}
              onClick={() => handleCart(id, images, title, price)}
            >
              Add to whishlist
            </Button>
          </Box>
        </Box>
        <ToastContainer position="top-center" />
      </Box>
    </>
  )
}

export default GadgetDetails
