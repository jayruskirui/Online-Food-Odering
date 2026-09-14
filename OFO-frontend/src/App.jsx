import { darkTheme } from "./Theme/DarkTheme"
import { ThemeProvider } from "@mui/material/styles"
import Navbar from "./components/Navbar"
import CssBaseline from "@mui/material/CssBaseline"
import Home from "./components/Home/Home"
import RestaurantDetails from "./components/Restaurant/RestaurantDetails"



function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      {/* <Home /> */}
      <RestaurantDetails />
    </ThemeProvider>
  )
}

export default App
