import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./footer.css";

export default function footer(){
    return(
        <>
        <div className="footer-container">
            <div
                style={{
                        width: "100%",
                        height: "2px",
                        backgroundColor: "#1e3a8a", // dark blue line
                        boxShadow: "0px 2px 8px rgba(30, 58, 138, 0.8)", // subtle blue glow
                        marginBottom:"20px",
                    }}>
                </div>

                <div className="icon-container">
                    <FacebookIcon sx={{fontSize:"larger", color: "rgb(170 186 206)"}}/>
                    <InstagramIcon sx={{fontSize:"larger", color: "rgb(170 186 206)"}}/>
                    <XIcon sx={{fontSize:"larger", color: "rgb(170 186 206)"}}/>
                    <YouTubeIcon sx={{fontSize:"larger", color: "rgb(170 186 206)"}}/>
                    <ShoppingCartIcon sx={{fontSize:"larger", color: "rgb(170 186 206)"}}/>
                    {/* using icons from material ui  */}

                </div>
                
                <div className="MarketPage-footer" style={{textAlign:"center", height:"150px"}}>

                <div className="footer-text">
                    <p id="line1">2025 Cfd.com | All Rights Reserved.</p>

                    <p id="line2">Cfd is owned and operated by Ryan n Co. , registration number: 145353, registered address: Gupta Tower , Bahuplaza. Payment agent companies are Gpay and PHpay. </p>
                    <p id="contact">Contact us at support@cfd.com.</p>
                    <p id="contact">ph: +91 xxxxxxxxxx</p>

                </div>
        </div>


        </div>
        </>
    );
}