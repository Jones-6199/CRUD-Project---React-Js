import TodoList from "./Components/TodoList";
import "./App.css"
import { createTheme, ThemeProvider } from "@mui/material/styles";






export default function App() {

const theme = createTheme({
  typography: {
    fontFamily: [ "RobotoBold" ]

  },
});



  return (
    <ThemeProvider theme={theme}>
  
    <div className="App" style={{
      display:'flex',
      alignItems:'center',
      background:'#191b1f',
      height:'100vh',
      justifyContent:'center',
    }}>
      <TodoList />
       
    </div>
    </ThemeProvider>

  );

}



