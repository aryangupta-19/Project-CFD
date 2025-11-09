import PortfolioNav from "./Portfolio-nav.jsx";
import PortfolioInfo from "./portfolio-info.jsx";
import PortfolioGraph from "./Portfolio-graph.jsx";
import PortfolioTable from "./Portfolio-table.jsx";
import Footer from "./Footer.jsx";
import "./portfolioPage.css";


export default function Portfolio( ){
    return(
        <>
            <div className="Portfolio-page" style={{marginTop:"0"}}>
                {/* <h1>Welcome to Portfolio page</h1> */}

                <div className="portfolio-nav">
                    <PortfolioNav></PortfolioNav>
                </div>

                <div className="portfolio-Info">
                    <PortfolioInfo></PortfolioInfo>
                </div>

                <div className="portfolio-Graph">
                    <PortfolioGraph></PortfolioGraph>
                </div>

                <div className="portfolio-table">
                    <PortfolioTable></PortfolioTable>
                </div>

                {/* <div className="PortfolioPage-footer" style={{color:"white", textAlign:"center", height:"150px"}}>
                    <h2>Footer</h2>
                </div> */}
                <Footer/>
            </div>

            
        </>
    );
}
