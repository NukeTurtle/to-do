import React from "react";
import ListProjects from "./components/ListProjects";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <>
      <div className="App">
        <ListProjects>
        </ListProjects>
        <ListTodos>
        </ListTodos>
      </div>
    </>
  );
}

export default App;