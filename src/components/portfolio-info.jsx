import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={2} style={{display:"flex", justifyContent:"space-between"}}>
        <Grid size={4}>
          <Item sx={{color:"#E0E6F5", fontWeight:700, fontSize:"20px", backgroundColor:"#16213E"}}>Balance:  $400 </Item>
        </Grid>
        <Grid size={4} style={{}}>
          <Item  sx={{color:"#4ADE80", fontWeight:700, fontSize:"20px", backgroundColor:"#16213E"}} >Net P/L: +$62</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
// actually grid system use karlia hai maeine isko balance and profit loss ko show karavane ke liye 
// ik grid mai 2 grids with space between and each inner grid covers size of 4 cols 
