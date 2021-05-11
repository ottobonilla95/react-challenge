import React, { FunctionComponent } from "react";

// router
import { Route, Redirect, RouteChildrenProps } from "react-router-dom";

// components
const CarList = React.lazy(() => import("./CarList"));
const CarDetail = React.lazy(() => import("./CarDetail"));

// interface
interface Props extends RouteChildrenProps {}

const App: FunctionComponent<Props> = (props) => (
  <>
    <div style={{ marginTop: "20px" }}>
      <Route path={`${props.match?.path}/`} exact>
        <Redirect to={`${props.match?.path}/list`} />
      </Route>
      <Route path={`${props.match?.path}/list`} component={CarList} />
      <Route path={`${props.match?.path}/detail`} component={CarDetail} />
    </div>
  </>
);

export default App;
