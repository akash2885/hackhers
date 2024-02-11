import {createTheme} from "@mui/material";
import {deepPurple, green, grey} from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: grey[900]
        },
        secondary: {
            main: deepPurple[100]
        }
    }
})

export default theme