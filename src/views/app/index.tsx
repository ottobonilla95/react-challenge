import React, { FunctionComponent, Suspense } from "react";

// router
import { Route, Redirect, RouteChildrenProps } from "react-router-dom";

// AppLayout
import AppLayout from "../../layout/app-layout";

// components
const HomeView = React.lazy(() => import("./home"));
const CarViews = React.lazy(() => import("./car"));

// interface
interface Props extends RouteChildrenProps {}

const App: FunctionComponent<Props> = (props) => (
  <AppLayout>
    <Route path={`${props.match?.path}/`} exact>
      <Redirect to={`${props.match?.path}/car`} />
    </Route>
    <Route path={`${props.match?.path}/home`} component={HomeView} />
    <Route path={`${props.match?.path}/car`} component={CarViews} />
  </AppLayout>
);

export default App;
