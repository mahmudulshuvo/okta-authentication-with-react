import React, { Component, Fragment } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Home from "./Components/Home/Home";
import User from "./Components/User/User";
import Login from "./Components/auth/Login";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import "./App.css";

function onAuthRequired({ history }) {
    history.push("/login");
}
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Security
                    issuer="https://dev-727324.okta.com/oauth2/default"
                    client_id="0oailab02oi4rDCa4356"
                    redirect_uri={window.location.origin + "/implicit/callback"}
                    onAuthRequired={onAuthRequired}
                >
                    <div className="App">
                        <Route
                            path="/"
                            render={({ location }) => (
                                <Fragment>
                                    <Tabs value={location.pathname}>
                                        <Tab
                                            label="Home"
                                            component={Link}
                                            to="/"
                                        />
                                        <Tab
                                            label="User"
                                            component={Link}
                                            to="/user"
                                        />
                                    </Tabs>
                                    <Switch>
                                        <SecureRoute
                                            path="/user"
                                            exact={true}
                                            render={() => <User />}
                                        />
                                        <Route
                                            path="/"
                                            exact={true}
                                            render={() => <Home />}
                                        />
                                        <Route
                                            path="/login"
                                            render={() => (
                                                <Login baseUrl="https://dev-727324.okta.com" />
                                            )}
                                        />
                                        <Route
                                            path="/implicit/callback"
                                            component={ImplicitCallback}
                                        />
                                    </Switch>
                                </Fragment>
                            )}
                        />
                    </div>
                </Security>
            </BrowserRouter>
        );
    }
}

export default App;
