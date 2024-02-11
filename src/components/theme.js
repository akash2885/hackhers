import {createTheme} from "@mui/material";
import {green, grey} from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: grey[900]
        },
        secondary: {
            main: green[800]
        }
    }
})

export default theme