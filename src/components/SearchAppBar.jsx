/* eslint-disable no-unused-vars */
import { styled, alpha } from "@mui/material/styles"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import InputBase from "@mui/material/InputBase"
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"
import Button from "@mui/material/Button"
import { useNavigate } from "react-router-dom"
import { useRecoilState, useRecoilValue } from "recoil"

import {
  allData,
  cartItems,
  getSearchData,
  searchInput,
  tokenValue,
} from "../utils/globalState"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { useState } from "react"

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}))

export default function SearchAppBar() {
  const navigate = useNavigate()
  const isLoggedIn = useRecoilValue(tokenValue)
  const [token, setToken] = useRecoilState(tokenValue)
  const [cart] = useRecoilState(cartItems)
  const [searchData, setSearchData] = useRecoilState(searchInput)
  const [allDatas, setAllDatas] = useRecoilState(allData)
  const [searchValue, setSearchValue] = useState("")
  const [searchDatas, setSearchDatas] = useRecoilState(getSearchData)

  const handleSubmit = () => {
    if (isLoggedIn) {
      setToken("")
      navigate("/login")
    } else {
      navigate("/login")
    }
  }
  const handleSearch = (value) => {
    const filteredData = allDatas.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    )
    setSearchDatas(filteredData)
    setSearchData(value)
    setSearchValue(value)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => navigate("/gadget")}
          >
            Home
          </Typography>
          <Box>
            <Box sx={{ paddingLeft: "5px" }}>{cart.length}</Box>
            <ShoppingCartIcon
              sx={{ paddingRight: "20px" }}
              onClick={() => navigate("/cart")}
            />
          </Box>

          <Button color="inherit" onClick={handleSubmit}>
            {isLoggedIn ? "Logout" : "Login"}
          </Button>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={searchValue}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
