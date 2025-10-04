import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Todo from "../Components/Todo"

export default function TodoList() {






  return (
    
      
      <Container maxWidth="sm">
     <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom style={{alignContent:'center',justifyContent:'center',display:'flex', fontWeight:'bold'}} variant='h3' sx={{  }}>
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
      {/* All Todos */}
      <Todo/>

      </CardContent>
   
    </Card>
      </Container>


    
  );
}
