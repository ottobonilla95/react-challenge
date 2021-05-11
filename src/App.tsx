import React, { FunctionComponent, Suspense } from "react";

// router
import { Router, Route, Switch, Redirect } from "react-router-dom";

// history
import history from "./utils/history";

// components
const AppViews = React.lazy(() => import("./views/app"));
const NotFoundView = React.lazy(() => import("./layout/NotFound"));

const App: FunctionComponent = () => (
  <Suspense fallback="loadig...">
    <Router history={history}>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/app" />
        </Route>
        <Route path="/app" component={AppViews} />
        <Route component={NotFoundView} />
      </Switch>
    </Router>
  </Suspense>
);

export default App;
