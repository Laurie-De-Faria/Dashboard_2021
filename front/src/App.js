import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import Body from './layouts/body';
import { setUserInfos } from './constants/userInfos';

import PrivateRoute from './components/PrivateRoute';
import _404 from './pages/404';
import Dashboard from './pages/dashboard/Dashboard';
import SettingsPage from './pages/settings/Settings';
import ExamplePage from './pages/example/Example';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/login/RegisterPage';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
        };
        this.chargeUser = this.chargeUser.bind(this);
    }

    chargeUser(user) {
        if (!user || user === undefined || Object.keys(user) === 0)
            return;
        
        setUserInfos(user.username, user.mail, user.id);
        this.setState({
            user: {
                username: user.username,
                mail: user.mail
            }
        });
    }

    render() {
        const { user } = this.state;

        return (
            <div>
                <Switch>
                    <PrivateRoute exact path="/register" component={RegisterPage} />
                </Switch>
                {(user === undefined || Object.keys(user).length === 0 || user === {} ?
                    <LoginPage action={this.chargeUser}/> :
                    <MainPage />
                )}
            </div>
        );
    }
}

class MainPage extends Component {

    render() {
        return(
            <Body>
                <Switch>
                    <PrivateRoute exact path="/" component={Dashboard} />
                    <PrivateRoute exact path="/add" component={ExamplePage} />
                    <PrivateRoute exact path="/settings" component={SettingsPage} />
                    <PrivateRoute exact path="/register" component={RegisterPage} />
                    <PrivateRoute path="*" component={_404} />
                </Switch>
            </Body>
        );
    }

}

export default App;
