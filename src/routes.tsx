import React, { useState } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { Home } from './components'

const Routes = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const [snackBarOpen, setSnackBarOpen] = useState(false)
    
    return (
        <>
            <Switch>
                <Route
                    exact
                    path='/'
                    component={Home}
                />
            </Switch>
        </>
    )
}

export default withRouter(Routes)