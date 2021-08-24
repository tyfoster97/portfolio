import React/*, { useState }*/ from 'react'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import { About, Home } from './components'

const Routes = () => {
    //const [errorMessage, setErrorMessage] = useState('')
    //const [snackBarOpen, setSnackBarOpen] = useState(false)
    
    return (
        <>
            <Switch>
                <Route
                    exact
                    path='/'
                    component={Home}
                />
                <Route path='/about' component={About} />
                
                <Redirect to='/'/>
            </Switch>
        </>
    )
}

export default withRouter(Routes)