import { Switch, Route } from "react-router-dom";

import ROUTES from "./utils/routes";

import Home from "./pages/Home/Home";

function App() {
  return (
    <Switch>
      <Route path={ROUTES.HOME} exact>
        <Home />
      </Route>
      <Route path={ROUTES.LOGIN}>
        <h1>LOGIN</h1>
      </Route>
      <Route path={ROUTES.SIGNUP}>
        <h1>SIGN UP</h1>
      </Route>
    </Switch>
  );
}

export default App;
