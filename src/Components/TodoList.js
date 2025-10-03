import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';



export default function TodoList() {






  return (
    
      
      <Container maxWidth="sm">
     <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom style={{alignContent:'center',justifyContent:'center',display:'flex'}} variant='h2' sx={{ color: 'text.secondary', }}>
        Day Plan
        </Typography>
        <Divider />
        
        {/* This is toggle buttons */}

       <ToggleButtonGroup
      exclusive
      aria-label="text alignment"
      style={{
        justifyContent:'center',
        display:'flex',
        marginTop:'20px',


      }}
    >
      <ToggleButton value="left" >
        General
      </ToggleButton>

      <ToggleButton value="center" >
        Done 
      </ToggleButton>

      <ToggleButton value="right" >
        Not Done yet
      </ToggleButton>
  
    </ToggleButtonGroup>

    {/* The ened of Tuggle Buttons */ }

      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </Container>


    
  );
}
