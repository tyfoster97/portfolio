import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { miscColors } from '../../../themes/theme'
import SiteHeader from '../Header/Header'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: miscColors.tardis,
    minHeight: '100vh',
    paddingBottom: theme.spacing(20),
  },
  wrapper: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    maxWidth: '800px',
  },
}))

type Props = {
  children: JSX.Element
}

const PageWrapper = ({ children }: Props) => {
  const classes = useStyles()

  return (
    <Grid className={classes.root} container direction='column'>
      <Grid
        className={classes.wrapper}
        container
        direction='row'
        justifyContent='center'
      >
        <SiteHeader />
      </Grid>
      <Grid
        className={classes.wrapper}
        container
        direction='row'
        justifyContent='center'
      >
        {children}
      </Grid>
    </Grid>
  )
}

export default PageWrapper
