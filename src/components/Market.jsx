import { Link } from "react-router-dom";
import "./app.css";
import AssetCard from "./AssetCard.jsx";
import Footer from "./Footer.jsx";

export default function Market(){
    return(
        <div className="Navbar+MarketPage" style={{backgroundColor:"#001d3d"}}>
                <br></br>
                <div className="asset-container">
                <AssetCard idx="0"/>
                <AssetCard idx="1"/>
                <AssetCard idx="2"/>
                <AssetCard idx="3"/>
                <AssetCard idx="4"/>
                <AssetCard idx="5"/>
                </div>


                    {/* day = 2 */}
                    {
                    /* navabr bana liya hai but abi routing nahi kari hai badme dekhte hai 
                    Market page complete ho chuka hai ui ki abhi functionality kuch hai nahi isme so usko chod 
                    cards ke liye maine material UI ka hi data display use kia hai 
                    isme maine new wways seekhe styling ko customise karne ke 
                    starting mai maine market ke sare products ik array mai store kiya assets.js mai 
                    then maine unko as props assetcards mai bheja assets cards ki styling improvement ke liye maine sare cards 
                    ik div mai enclose kare abhi inko hover effect dena baki hai (arey ab dediya hai hover effect bhi)
                    cards mai buttons bhi add kardiye but functionality dena baki hai 
                    coloring or change ko show karne ke liye if else ka use kiya hai 
                    note icons dikhane hai increment |^ and decrement ke 
                    or coloring toh karli hai 
                    note ik bar customise styling ko firse padlena docx se mui ke docx mai hogi 
                    
                    note hum react@vite use kar rhe hai naki react styling ke liye css and material ui ko use kar rhe hai */
                    }


                    <Footer/>
                </div>

                

    );
}


// // <Navbar/>
//         {/*
//         make height and width of html and body 100% 
//         than root ki bhi 100% krdo
//         margin , padding dono ki 0 krddo
        
//         ab root prr hum puri website baneynge dekhle recall krle kese kiya yeh sab
//         */}
//         <br></br>
//         {/* <Navbar2/> */}

//         <div className="asset-container">
//           <AssetCard idx="0"/>
//           <AssetCard idx="1"/>
//           <AssetCard idx="2"/>
//           <AssetCard idx="3"/>
//           <AssetCard idx="4"/>
//           <AssetCard idx="5"/>
//         </div>


//             {/* day = 2 */}
//             {
//               /* navabr bana liya hai but abi routing nahi kari hai badme dekhte hai 
//               Market page complete ho chuka hai ui ki abhi functionality kuch hai nahi isme so usko chod 
//               cards ke liye maine material UI ka hi data display use kia hai 
//               isme maine new wways seekhe styling ko customise karne ke 
//               starting mai maine market ke sare products ik array mai store kiya assets.js mai 
//               then maine unko as props assetcards mai bheja assets cards ki styling improvement ke liye maine sare cards 
//               ik div mai enclose kare abhi inko hover effect dena baki hai (arey ab dediya hai hover effect bhi...)
//               cards mai buttons bhi add kardiye but functionality dena baki hai 
//               coloring or change ko show karne ke liye if else ka use kiya hai 
//               note icons dikhane hai increment |^ and decrement ke 
//               or coloring toh karli hai 
//               note ik bar customise styling ko firse padlena docx se mui ke docx mai hogi 
              
//               note hum react@vite use kar rhe hai naki react styling ke liye css and material ui ko use kar rhe hai */
//             }
//         {/* <Grid/> */}

//         <div className="MarketPage-footer" style={{color:"white", textAlign:"center", height:"150px"}}>
//           <h2>Footer</h2>
//         </div>