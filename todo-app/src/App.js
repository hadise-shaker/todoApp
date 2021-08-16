import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ToDoList from "./components/ToDoList";
import { ProtectedRoute } from "./utils/ProtectedRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <ProtectedRoute path="/todo-list" exact component={ToDoList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
