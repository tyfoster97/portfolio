import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { miscColors } from "../../themes/theme";
import { AccordionList, SiteHeader } from "../utils";
import ABOUT from "./data";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundColor: miscColors.tardis,
        paddingBottom: theme.spacing(20),
    }, 
    wrapper: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
        maxWidth: '800px',
    }
}))

const About = () => {
    const classes = useStyles()

  return (
  <Grid className={classes.root} container direction="column">
      <Grid className={classes.wrapper} container direction='row' justifyContent='center'>
        <SiteHeader />
      </Grid>
      <Grid className={classes.wrapper} container direction='row' justifyContent='center'>
        <AccordionList items={ABOUT} />
      </Grid>
  </Grid>
  );
};

export default About;
