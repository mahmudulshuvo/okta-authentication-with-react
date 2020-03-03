import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "@okta/okta-react";
import Button from "@material-ui/core/Button";

export default withAuth(
    class Home extends Component {
        state = { authenticated: null };

        checkAuthentication = async () => {
            const authenticated = await this.props.auth.isAuthenticated();
            if (authenticated !== this.state.authenticated) {
                this.setState({ authenticated });
            }
        };

        async componentDidMount() {
            this.checkAuthentication();
        }

        async componentDidUpdate() {
            this.checkAuthentication();
        }

        login = async () => {
            this.props.auth.login("/");
        };

        logout = async () => {
            this.props.auth.logout("/");
        };

        render() {
            if (this.state.authenticated === null) return null;

            const mainContent = this.state.authenticated ? (
                <div>
                    <p className="lead">
                        You have entered the staff portal,{" "}
                        <Link to="/user">click here</Link>
                    </p>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={this.logout}
                    >
                        Logout
                    </Button>
                </div>
            ) : (
                <div>
                    <p>Please get your credentials to login</p>

                    <Button variant="contained" onClick={this.login}>
                        Login
                    </Button>
                </div>
            );

            return (
                <div>
                    <h1 className="display-4">User Portal</h1>
                    {mainContent}
                </div>
            );
        }
    }
);
