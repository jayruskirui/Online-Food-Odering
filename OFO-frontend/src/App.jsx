import { darkTheme } from "./Theme/DarkTheme"
import { ThemeProvider } from "@mui/material/styles"
import Navbar from "./components/Navbar"
import CssBaseline from "@mui/material/CssBaseline"
import Home from "./components/Home/Home"
import RestaurantDetails from "./components/Restaurant/RestaurantDetails"
import Cart from "./components/Cart/Cart"
import Profile from "./components/Profile/Profile"
import CustomerRoute from "./Routes/CustomerRoute"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUser } from "./components/State/Authentication/Action"
import { findCart } from "./components/State/Cart/Action"



function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector((store)=>store)

  useEffect(()=>{
    const jwt = auth.jwt || localStorage.getItem("jwt");
    if (jwt) dispatch(getUser(jwt));
    dispatch(findCart(jwt))
  }, [auth.jwt, dispatch]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <CustomerRoute />
    </ThemeProvider>
  )
}

export default App
