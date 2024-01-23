import { useRecoilState } from "recoil"
import { cartItems } from "../utils/globalState"
import { Box, Button, Typography } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogTitle from "@mui/material/DialogTitle"
import { useState } from "react"
import { Link } from "react-router-dom"

const Cart = () => {
  const [cart, setCart] = useRecoilState(cartItems)

  const [open, setOpen] = useState(false)
  const [deleteId, setDeleteId] = useState("")

  const handleClickOpen = (id) => {
    setDeleteId(id)
    setOpen(true)
  }

  const handleClose = () => {
    setDeleteId("")
    setOpen(false)
  }
  const handleDelete = () => {
    const newArray = cart.filter((element) => element.id !== deleteId)

    setCart(newArray)
    handleClose()
  }

  return (
    <>
      <Typography variant="h4" sx={{ textAlign: "center", margin: "40px 0" }}>
        {cart.length === 0 ? "Your Cart is Empty" : "Your Cart Items"}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "100px",
          cursor: "pointer",
        }}
      >
        {cart.map((item) => (
          <Box
            key={item.id}
            sx={{ display: "flex", gap: "10px", margin: "10px" }}
          >
            <Link key={item.id} to={`/gadget/${item.id}`}>
              <Box>
                <img
                  src={item.images}
                  alt={item.title}
                  width={150}
                  height={150}
                />
              </Box>
            </Link>
            <Box
              sx={{
                paddingTop: "30px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Box>{item.title}</Box>
              {item.price} RS
              <DeleteIcon
                color="error"
                onClick={() => handleClickOpen(item.id)}
              />
            </Box>
          </Box>
        ))}
        <Box>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              Are you sure you want delete this Cart item?
            </DialogTitle>

            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleDelete} autoFocus>
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </>
  )
}

export default Cart
