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
import { miscColors } from "../../../themes/theme";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: "600px",
    textAlign: "center",
  },
  title: {
    color: theme.palette.getContrastText(miscColors.tardis),
    margin: theme.spacing(2),
  },
  accordion: {
    backgroundColor: theme.palette.info.light,
    color: theme.palette.getContrastText(theme.palette.info.light),
    marginBottom: theme.spacing(1.5),
    width: '100%',
  },
  heading: {
    fontWeight: "bold",
  },
  details: {
    backgroundColor: theme.palette.info.dark,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  chip: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.primary.main),
    fontSize: 16,
    margin: theme.spacing(1),
  },
  icon: {
    color: theme.palette.getContrastText(theme.palette.info.light)
  }
}));

type Props = {
  items: List<List<string>>;
};

const AccordionList = ({ items }: Props) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container direction="column">
      <Typography variant='h4' className={classes.title}>{items.name}</Typography>
      {items.items &&
        items.items.map((listItems) => {
          return (
            <Accordion className={classes.accordion} key={`${items.name}-${listItems.name}`}>
              <AccordionSummary expandIcon={<ExpandMoreIcon className={classes.icon}/>}>
                <Typography variant='h6' className={classes.heading}>{listItems.name}</Typography>
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
