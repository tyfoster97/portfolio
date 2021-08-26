import React from 'react'
import { Grid, Typography, Theme, Chip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import List from '../../../utils/List'
import { miscColors } from '../../../themes/theme'
import SiteAccordion from '../Accordion/Accordion'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: '600px',
    textAlign: 'center',
  },
  title: {
    color: theme.palette.getContrastText(miscColors.tardis),
    margin: theme.spacing(2),
  },
  heading: {
    fontWeight: 'bold',
  },
  chip: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.primary.main),
    fontSize: 16,
    margin: theme.spacing(1),
  },
}))

type Props = {
  items: List<List<string>>
}

const AccordionList = ({ items }: Props) => {
  const classes = useStyles()

  return (
    <Grid className={classes.root} container direction='column'>
      <Typography variant='h4' className={classes.title}>
        {items.name}
      </Typography>
      {items.items &&
        items.items.map((listItems) => {
          return (
            <SiteAccordion
              key={`${items.name}-${listItems.name}`}
              summary={
                <Typography variant='h6' className={classes.heading}>
                  {listItems.name}
                </Typography>
              }
              details={
                <Grid container direction='row' justifyContent='space-between'>
                  {listItems.items &&
                    listItems.items.map((item) => {
                      return (
                        <Chip
                          className={classes.chip}
                          key={`${listItems.name}-${item}`}
                          label={item}
                        />
                      )
                    })}
                </Grid>
              }
            />
          )
        })}
    </Grid>
  )
}

AccordionList.defaultProps = {
  items: {
    name: 'List',
    items: [{ name: 'item', items: ['details'] }],
  },
}

export default AccordionList
