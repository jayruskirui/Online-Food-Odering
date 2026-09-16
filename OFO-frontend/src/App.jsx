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



function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store)=>store)

  useEffect(()=>{
    dispatch(getUser(auth.jwt || jwt));
  }, [auth.jwt]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <CustomerRoute />
    </ThemeProvider>
  )
}

export default App
