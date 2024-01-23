/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom"

const ProductedRoute = ({ children, isLoggedIn }) => {
  return <div>{isLoggedIn ? children : <Navigate to="/login" />}</div>
}

export default ProductedRoute
