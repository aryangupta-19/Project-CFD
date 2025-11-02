import assets from "./assets.js";

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import Buybtn from "./buybtn.jsx";
// import Sellbtn from "./sellbtn.jsx";
// import "./AssetCard.css";

// export default function assetCard(){
//     console.log(assets);
//     return(
//         <>
//             <div className="card">
//                 <h1>Product: {assets[0].name}</h1>
//                 <p>Curr Price: {assets[0].price*assets[0].change}</p>
//                 <h3 style={{color:"red", fontWeight: "900"}}>Change: {((assets[0].price * assets[0].change) - assets[0].price)/100}%</h3>
//                 <Buybtn/>
//                 <Sellbtn/>
//             </div>
//         </>

//         // card mannual hai toh responsive banane mai boho dikkat ayegi so try making it from ui only 
        
//     );
// }

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Buybtn from "./buybtn.jsx";
import Sellbtn from "./sellbtn.jsx";

const style = {
  p: 0,
  width: '100%',
  maxWidth: 400,
  height: "350px",
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: '#2a6f97',
  textAlign: 'center',
  margin: "30px 0 0 50px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
   transition: "all 0.3s ease",  // general css transition properties 
    "&:hover": {                // hover pr translate kiya isko y axis mai and on hover box-shadow also change 
    transform: "translateY(-5px)",  
    boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
  },
};

export default function assetCard({idx}) {
  return (
    <List sx={style} aria-label="mailbox folders">
        <List sx={{padding:"20px 20px 0px 20px"}}>
            <ListItem >
                <ListItemText
                sx={{"& .MuiListItemText-primary":{textAlign:"center", fontSize:"30px", fontWeight:900, color: "#e3e3e3"}}}
                primary={`Product: ${assets[idx].name}`}/>
            </ListItem>

            <ListItem>
                <ListItemText
                sx={{"& .MuiListItemText-primary":{ textAlign:"center", fontSize:"25px"}}}
                primary={`Product Price: ${assets[idx].price + (assets[idx].change / 100)*assets[idx].price}`} />
            </ListItem>

            <ListItem>
                <ListItemText
                    // new way of styling seekh isko 
                    // sx={{"& .MuiListItemText-primary":{color:"#ff4d6d", fontWeight:1000, fontSize:"35px", textAlign:"center"}}}
                    primary={
                        // condition
                        assets[idx].change > 0?
                        // if yes
                        `Increase: ${assets[idx].change}%`:
                        // if no
                        `Decrease: ${assets[idx].change}%`
                    }


                    primaryTypographyProps={{
                        color: assets[idx].change > 0 ? "#4cbb4c" : "#ff4d6d",
                        fontWeight: 1000,
                        fontSize: '40px',
                        textAlign:'center',
                      }}
                 />
               {/* { assets[idx].change > 0?
                primary={`Increase: ${((assets[idx].price*assets[idx].change) - assets[0].price)/100}%`}:
                Secondary={ `Decrease: ${(assets[0].price - (assets[idx].price * assets[idx].change))/100}%`}} */}
                {/* yeh actually possible nahi hai so i will try to use new way of styling 
                learrnt from mui docx 
                       primaryTopographyProps={{}}
                 */}

            </ListItem>

            <ListItem>
                <ListItemText
                    sx={{"& .MuiListItemText-secondary":{ textAlign:"center", fontSize:"15px", color:"#403a3f"}}}
                    secondary={`old Price:  ${assets[idx].price }`} 
                />
            </ListItem>

            </List>

            <ListItem sx={{display:"flex", justifyContent:"center", bodorRadius:"5px", gap:"10px", height:"90px"}}>
                <Buybtn/>
                <Sellbtn/>
            </ListItem>
    </List>

    // transition effects done (on hover )
    // pricing increasing decreasing all done 
    // later try adding icons *
    // market page completed 
    // 
    
  );
}
