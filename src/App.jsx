import { BrowserRouter, Route, Routes } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import Login from "./components/Login"
import GadgetsContainer from "./components/GadgetsContainer"
import GadgetDetails from "./components/GadgetDetails"
import ProductedRoute from "./components/ProductedRoute"
import { useRecoilValue } from "recoil"
import { tokenValue } from "./utils/globalState"
import BuyProduct from "./components/BuyProduct"
import Signup from "./components/SignUp"
import Cart from "./components/Cart"

const App = () => {
  const queryClient = new QueryClient()
  const isLoggedIn = useRecoilValue(tokenValue)
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GadgetsContainer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/gadget" element={<GadgetsContainer />} />
          <Route path="/gadget/:ids" element={<GadgetDetails />} />
          <Route
            path="/cart"
            element={
              <ProductedRoute isLoggedIn={isLoggedIn}>
                <Cart />
              </ProductedRoute>
            }
          />
          <Route
            path="/buynow"
            element={
              <ProductedRoute isLoggedIn={isLoggedIn}>
                <BuyProduct />
              </ProductedRoute>
            }
          />
        </Routes>
      </BrowserRouter>

      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  )
}

export default App
