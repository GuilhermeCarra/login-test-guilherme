import { Switch, Route } from "react-router-dom";

import ROUTES from "./utils/routes";

import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login/Login";
import Signup from "./pages/Auth/Signup/Signup";

function App() {
  return (
    <Switch>
      <Route path={ROUTES.HOME} exact>
        <Home />
      </Route>
      <Route path={ROUTES.LOGIN}>
        <Login />
      </Route>
      <Route path={ROUTES.SIGNUP}>
        <Signup />
      </Route>
    </Switch>
  );
}

export default App;
