import { Button, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
  },
}));

const NavButtons = () => {
  const classes = useStyles();
  const history = useHistory()

  return (
    <Grid container justifyContent="space-evenly">
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={() => history.push('/about')}
      >
        About
      </Button>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        href="https://github.com/tyfoster97"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </Button>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        href="https://linkedin.com/in/ty-foster"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </Button>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={() => history.push('/projects')}
      >
        Projects
      </Button>
    </Grid>
  );
};

export default NavButtons;
