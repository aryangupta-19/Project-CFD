
// function buyHandalar(){

// }
// export default function buybtn(){
//     return(
//         <button className="buy-btn" onClick={buyHandalar}>BUY</button>
//     );
// }

import * as React from 'react';
import Button from '@mui/material/Button';

export default function ColorButtons() {
  return (
      <Button variant="contained" color="success" width="70px">
        Buy
      </Button>
  );
}
