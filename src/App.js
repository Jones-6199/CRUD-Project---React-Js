import TodoList from "./Components/TodoList";
import "./App.css"







export default function App() {




  return (
    <div className="App" style={{
      display:'flex',
      alignItems:'center',
      background:'#191b1f',
      height:'100vh',
      justifyContent:'center',
      

    }}>
      <TodoList />
    </div>
  );
}


