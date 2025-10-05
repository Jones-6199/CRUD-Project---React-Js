import * as React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Todo from "../Components/Todo";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

export default function TodoList() {

  



  const initialTodos = [
    {
      id:uuidv4(),
      title: "Learning React" ,
      description: "More Information",
      isCompleted: false,
    },
    {
      id:uuidv4(),
      title: "",
      description:"",
      isCompleted:false,
    },
    {
      id:uuidv4(),
      title:"",
      description:'',
      isCompleted:false
    },
  ];
  const [todos, setTodos ] = useState(initialTodos)
  const [titleInput, setTitleInput] = useState("")
  function handleAddClick(){
      const newTodo = {
    id: uuidv4(),
    title: titleInput,
    description: "",
    isCompleted:false,
  }
      setTodos([...todos, newTodo ])
      setTitleInput("")

  }



  const myTodos = todos.map((todo) => {
    return( 
      <Todo title={todo.title} description={todo.description} isCompleted={todo.isCompleted} key={todo.id} />
    )
  })
  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography
            gutterBottom
            style={{
              alignContent: "center",
              justifyContent: "center",
              display: "flex",
              fontWeight: "bold",
            }}
            variant="h3"
            sx={{}}
          >
            Day Plan
          </Typography>
          <Divider />

          {/* This is toggle buttons */}

          <ToggleButtonGroup
            exclusive
            aria-label="text alignment"
            style={{
              justifyContent: "center",
              display: "flex",
              marginTop: "20px",
            }}
          >
            <ToggleButton value="left">General</ToggleButton>

            <ToggleButton value="center">Done</ToggleButton>

            <ToggleButton value="right">Not Done yet</ToggleButton>
          </ToggleButtonGroup>

          {/* The ened of Tuggle Buttons */}
          {/* All Todos */}
          {myTodos}
          {/* input and button */}
          <Grid container style={{ marginTop: "20px" }} spacing={2}>
            <Grid
              xs={8}
              display="flex"
              justifyContent="space-around"
              alignContent="center"
              style={{}}
            >
              <TextField
                style={{
                width:'250px',
                }}
                id="outlined-basic"
                label="Name of the Plan"
                variant="outlined"
                value={titleInput}
                onChange={(e) => {
                  setTitleInput(e.target.value)
                }}
              />
            </Grid>

            <Grid
              xs={4}
              display="flex"
              justifyContent="space-around"
              alignContent="center"
              style={{
                background: "red",
              }}
            >
              <Button variant="contained" 
              style={{
                width:'250px',

              }}
              onClick={() => {
                handleAddClick()
              }}
              >
                
                Add Plan</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
