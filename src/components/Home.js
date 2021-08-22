import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.misc.tardis,
    height: '100vh',
  },
  card: {
    backgroundColor: theme.palette.primary.background,
    color: theme.palette.primary.text,
    padding: theme.spacing(3),
    maxWidth: '600px',
    width: '95%',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
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
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title}>
            Ty Foster
          </Typography>
        </CardContent>
        <CardActions>
          <Grid container
            justify='space-evenly'>
            <Button variant='contained' color='primary'>
              About Me
            </Button>
            <Button 
              variant='contained' 
              color='primary'
              href='https://linkedin.com/in/ty-foster'
              target='_blank'
              rel='noopener noreferrer'>
              LinkedIn
            </Button>
            <Button 
              variant='contained' 
              color='primary'
              href='https://github.com/tyfoster97'
              target='_blank'
              rel='noopener noreferrer'>
              GitHub
            </Button>
            <Button variant='contained' color='primary'>
              Projects
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Home;