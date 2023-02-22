import React from 'react'
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom'
//external components
import CompletePassword from './views/Auth/CompleteResetPassword'
import RegisterConfirm from './views/Confirm/registerConfirm'
import ForgotConfirm from './views/Confirm/forgotConfirm'
import ConfirmDevice from './views/Auth/ConfirmDevice'
import ResetPassword from './views/Auth/ResetPassword'
import PhoneVerify from './views/Auth/PhoneVerify'
import EmailVerify from './views/Auth/EmailVerify'
import Forgot from './views/Auth/ForgotPassword'
import Register from './views/Auth/Register'
import Login from './views/Auth/Login'
import SecurityVerification from './views/Auth/SecurityVerification'

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register/confirm/:jwtToken" component={RegisterConfirm} />
        <Route exact path="/security-verification" component={SecurityVerification} />
        <Route exact path="/forgot_password/confirm/:jwtToken" component={ForgotConfirm} />
        <Route exact path="/reset-password" component={Forgot} />
        <Route exact path="/verification-new-register/mobile" component={PhoneVerify} />
        <Route exact path="/verification-new-register/email" component={EmailVerify} />
        <Route exact path="/reset-password/password" component={ResetPassword} />
        <Route exact path="/confirm-new-device" component={ConfirmDevice} />
        <Route exact path="/complete-password" component={CompletePassword} />
      </Switch>
    </Router>
  )
}

export default App
