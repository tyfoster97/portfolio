import React /*, { useState }*/ from 'react'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import { About, AdminRoutes, Home, Projects } from './components'

const Routes = () => {
  //const [errorMessage, setErrorMessage] = useState('')
  //const [snackBarOpen, setSnackBarOpen] = useState(false)

  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/admin' component={AdminRoutes} />

        <Redirect to='/' />
      </Switch>
    </>
  )
}

export default withRouter(Routes)
