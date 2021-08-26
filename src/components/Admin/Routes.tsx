import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Dashboard from './Dashboard'

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path='/' component={Dashboard} />
      </Switch>
    </>
  )
}

export default withRouter(Routes)
