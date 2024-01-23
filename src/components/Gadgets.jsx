/* eslint-disable react/prop-types */
import { Box, Rating, Stack } from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

const Gadgets = ({ title, price, rating, images }) => {
  return (
    <Box>
      <Box
        sx={{
          width: 450,
          height: 300,
          padding: "20px",
          Height: 350,
          border: "1px solid #edede9",
          borderRadius: "20px",
          backgroundColor: "#f1faee",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          {<ShoppingCartIcon />}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={images[0]} alt={title} width="200px" height="200px" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "40px",
          }}
        >
          <Box>
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
          <Box sx={{ marginTop: "10px" }}>{price}</Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Gadgets
