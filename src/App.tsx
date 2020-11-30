import { Switch, Route } from "react-router-dom";

import ROUTES from "./utils/routes";

import Login from "./pages/Auth/Login/Login";
import Signup from "./pages/Auth/Signup/Signup";

function App() {
  return (
    <Switch>
      <Route path={ROUTES.LOGIN} exact>
        <Login />
      </Route>
      <Route path={ROUTES.SIGNUP}>
        <Signup />
      </Route>
    </Switch>
  );
}

export default App;
