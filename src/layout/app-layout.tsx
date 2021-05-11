import React, { FunctionComponent } from "react";

// material ui
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

// history
import history from "../utils/history";

const useStyles = makeStyles((theme) => ({

 
  title: {
    flexGrow: 1,
  },
}));

// props
interface Props {}

const AppLayout: FunctionComponent<Props> = (props) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.title}>
            <Button color="inherit" onClick={() => history.push("/app/home")}>
              Home
            </Button>
            <Button
              color="inherit"
              onClick={() => history.push("/app/car/list")}
            >
              Cars
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">{props.children!}</Container>
    </>
  );
};

export default AppLayout;
