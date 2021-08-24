import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { miscColors } from "../../../themes/theme";
import NavButtons from "../NavButtons/NavButtons";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.getContrastText(miscColors.tardis),
    cursor: 'pointer',
    margin: theme.spacing(2),
    textAlign: "center",
    textDecoration: 'none',
  },
}));

const SiteHeader = () => {
  const classes = useStyles();
  const history = useHistory()
  const handleClick= useCallback(() => history.push('/'), [history])

  return (
    <Grid container direction="column">
      <Typography variant='h2'
        className={classes.title}
        onClick={handleClick}>Ty Foster</Typography>
      <NavButtons />
    </Grid>
  );
};

export default SiteHeader;
