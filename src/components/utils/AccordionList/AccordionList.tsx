import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Typography,
  Theme,
  Chip,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import List from "../../../utils/List";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: "600px",
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  accordion: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.main),
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  details: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start'
  },
  chip: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.getContrastText(theme.palette.info.main),
    fontSize: 14,
  }
}));

type Props = {
  items: List<List<string>>;
};

const AccordionList = ({ items }: Props) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container direction="column">
      <Typography className={classes.title}>{items.name}</Typography>
      {items.items &&
        items.items.map((listItems) => {
          return (
            <Accordion className={classes.accordion} key={`${items.name}-${listItems.name}`}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>{listItems.name}</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.details}>
                {listItems.items &&
                  listItems.items.map((item) => {
                    return (
                      <Chip className={classes.chip}
                        key={`${listItems.name}-${item}`}
                        label={item}/>
                    );
                  })}
              </AccordionDetails>
            </Accordion>
          );
        })}
    </Grid>
  );
};

AccordionList.defaultProps = {
  items: {
    name: "List",
    items: [{ name: "item", items: ["details"] }],
  },
};

export default AccordionList;
