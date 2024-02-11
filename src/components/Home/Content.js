import {Box, Typography} from "@mui/material";
import MariaBlackADP from 'src/components/Home/MariaBlackADP.jpg';

const Content = () => {
    return (
        <Box sx={{height: '150vh', border: '1 solid black'}}>
            <Box sx={{height: '20vh', border: '1 solid black'}}>
                <div>
                    
                </div>
            </Box>
            <Box sx={{height: '20vh', border: '1 solid black'}}>
                <dashboard/>
            </Box>
            <Box sx={{height: '50vh', border: '1 solid black'}}>
                <h4>ABOUT FinHERS</h4>
                <h6>finHERS aims to foster women empowerment within the finance industry by providing live updates on the S&P 500 and pertinent financial news. Our overarching objective is to unite women in finance, ensuring equality and equitable opportunities across the spectrum of the top 500 companies. Additionally, by providing comprehensive information on the latest developments in finance as well as financial components and essential skills such as budgeting, investing, borrowing, taxation, and personal financial management, we strive to empower them to achieve their aspirations and advance their careers. Moreover, we are committed to creating a supportive community where women can thrive and excel in the dynamic world of finance. 
                </h6>
                <h5>WOMEN IN FINANCE</h5>
                    <ul>
                        <li>
                        <img src={MariaBlackADP} alt="ADP CEO" width="20" height="20"></img>
                        </li>
                    </ul>
                
            </Box>
            <Box sx={{height: '20vh', border: '1 solid black'}}>
                <h5>STATISTICS</h5>

            </Box>
            <Box sx={{height: '20vh', border: '1 solid black'}}>
                <h5>NEWS</h5>
                <h6>
                    <ul>
                        <li>
                            <a href="https://www.barrons.com/articles/most-influential-women-in-finance-ca839b71" target="_blank">How the Top Women in Finance Are Shaping the Future</a>
                        </li>
                        <li>
                            <a href="https://www.ft.com/women-in-business" target="_blank">FINANCIAL TIMES: Women in business</a>
                        </li>
                        <li>
                            <a href="https://100women.org/about-us/news/" target="_blank">100 Women in Finance</a> 
                        </li>
                    </ul>
                </h6>
            </Box>
            <Box sx={{height: '20vh', border: '1 solid black'}}>
                <h5>ANALYST RATINGS</h5>
            </Box>
        
        </Box>
    )
}

export default Content