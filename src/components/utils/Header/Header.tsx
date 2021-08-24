import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { miscColors } from "../../../themes/theme";
import NavButtons from "../NavButtons/NavButtons";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.getContrastText(miscColors.tardis),
    fontSize: 32,
    fontWeight: "bold",
    margin: theme.spacing(2),
    textAlign: "center",
  },
}));

const SiteHeader = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Typography className={classes.title}>Ty Foster</Typography>
      <NavButtons />
    </Grid>
  );
};

export default SiteHeader;
