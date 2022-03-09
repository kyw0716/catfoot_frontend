import { Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";

function App() {
  return (
    <Switch>
      <Route component={Login} path="/loginPage" exact/>
      <Route component={Home} path="/" />
    </Switch>
  );
}

export default App;