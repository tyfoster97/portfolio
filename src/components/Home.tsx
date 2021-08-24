import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Theme,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { miscColors } from '../themes/theme'
import { NavButtons } from './utils'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: miscColors.tardis,
    height: '100vh',
  },
  card: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(3),
    maxWidth: '600px',
    width: '80%',
  },
  title: {
    textAlign: 'center',
  }
}))

const Home = () => {
  const classes = useStyles()

  return (
    <Grid container
      className={classes.root}
      component='main'
      justifyContent='center'
      alignItems='center'>
      <Card className={classes.card} color='info'>
        <CardContent>
          <Typography variant='h2' className={classes.title}>
            Ty Foster
          </Typography>
        </CardContent>
        <CardActions>
          <NavButtons />
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Home;