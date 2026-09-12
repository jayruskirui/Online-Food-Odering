import { darkTheme } from "./Theme/DarkTheme"
import { ThemeProvider } from "@mui/material/styles"
import Navbar from "./components/Navbar"
import CssBaseline from "@mui/material/CssBaseline"



function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <CssBaseline />
    </ThemeProvider>
  )
}

export default App
