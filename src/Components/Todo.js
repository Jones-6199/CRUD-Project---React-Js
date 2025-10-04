import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from '@mui/icons-material/Delete';

import Grid from '@mui/material/Grid';
import CheckIcon from '@mui/icons-material/Check';

import IconButton from '@mui/material/IconButton';



export default function Todo() {




  return (
    <>
            <Card sx={{ minWidth: 275, backgroundColor: "#283593", color: "#FFF", marginTop: 5 }}>
        <CardContent>
                 <Grid container spacing={2}>
        <Grid size={8}  >          <Typography
            gutterBottom
            style={{
           
         
              color:'white',
            }}
            variant="h2"
            sx={{ color: "text.secondary" }}
          >
            Day Plan
          </Typography>

          </Grid>

          {/* ACTION BUTON TA3 EL CARDS*/}
        <Grid size={4}  display="flex" justifyContent="space-around" alignItems="center"  >

        <IconButton aria-label="delete" disabled color="primary" style={{color:'#8bc34a' , background:'white' , border:'solid 3px #8bc34a ' , cursor:"pointer"}}>
        
        <CheckIcon  />

      </IconButton>
      
          <IconButton aria-label="delete" disabled color="primary" style={{color:'#8bc34a' , background:'white' , border:'solid 3px #8bc34a ' , cursor:"pointer"}}>
        
        <CheckIcon  />

      </IconButton>
          <IconButton aria-label="delete" disabled color="primary" style={{color:'#8bc34a' , background:'white' , border:'solid 3px #8bc34a ' , cursor:"pointer"}}>
        
        <CheckIcon  />
      </IconButton>
    
 
        </Grid>
   
      </Grid>

        </CardContent>
      
      </Card>
    </>
  );
}
