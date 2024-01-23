/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Skeldon from "./Skeldon"
import { useQuery } from "react-query"
import Gadgets from "./Gadgets"
import { Box } from "@mui/material"
import { Link } from "react-router-dom"
import axiosPrivate from "../utils/axiosPrivate"
import SearchAppBar from "./SearchAppBar"
import { useRecoilState, useRecoilValue } from "recoil"
import { allData, getSearchData, searchInput } from "../utils/globalState"
import { useEffect } from "react"

const GadgetsContainer = () => {
  const [allDatas, setAllDatas] = useRecoilState(allData)
  const [searchDatas, setSearchDatas] = useRecoilState(getSearchData)
  const [searchData, setSearchData] = useRecoilState(searchInput)

  const fetchData = () => {
    return axiosPrivate.get("products")
  }
  const { isLoading, data, isError, error } = useQuery(
    "gedgets-all-data",
    fetchData
  )

  // if search field value it took search data map else took all datas
  const mapValue = () => {
    if (searchData.length === 0) {
      return data?.data?.products
    } else {
      return searchDatas
    }
  }
  setAllDatas(data?.data?.products)

  if (isLoading) {
    return <Skeldon />
  }
  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
      <SearchAppBar />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          minWidth: "600px",
          minHeight: "500px",
          borderRadius: "20px",
          overflow: "hidden",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {mapValue().map((product) => (
          <Link key={product.id} to={`/gadget/${product.id}`}>
            <Gadgets key={product.id} {...product} />
          </Link>
        ))}
      </Box>
    </>
  )
}

export default GadgetsContainer
