import {ThemeProvider} from "@mui/material";
import theme from "./components/theme";
import Home from "./components/Home/Home";

const App = () => {
  return (
      <ThemeProvider theme={theme}>
          <Home/>

      </ThemeProvider>
  )
}

export default App
