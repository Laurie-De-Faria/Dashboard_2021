import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getUser } from '../backend/backend';
import { Link } from 'react-router-dom';

import {
    Form, FormGroup, Input, InputGroup, InputGroupText, InputGroupAddon, Alert, Button,
} from 'reactstrap';
import Spinner from './Spinner';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formValues: {
                username: "",
                password: "",
            },
            isLoading: false,
            error: '',
        };
        this.userExist = this.userExist.bind(this);
    }

    handleChange(ev) {
        const { formValues } = this.state;
        const newData = { [ev.target.name]: ev.target.value };
        this.setState({ formValues: {...formValues, ...newData} });
    }

    async userExist(username) {
        const jsonData = await getUser(username);

        if (!jsonData || jsonData === {} || Object.keys(jsonData) === 0 || jsonData === undefined) {
            return null;
        }
        return jsonData;
    }

    async login() {
        const { setUser } = this.props;
        const { formValues } = this.state;

        const user = await this.userExist(formValues.username);

        if (user) {
            this.setState({ isLoading: true });
            setUser(user);
        } else {
            alert("User not exist");
        }
    }

    render () {
        const { isLoading, error } = this.state;
        return (
            <div className="d-flex flex-column align-items-center" style={{ margin: "auto", marginTop: "15em" }}>
                {isLoading ?
                    <Spinner />
                    :
                    null
                }
                <h1>DASHBOARD</h1>
                <strong>SIGN IN</strong>
                <Form style={{ margin: "3em" }} action='/'>
                    {error ?
                        <Alert color="danger">
                            {error}
                        </Alert>
                        : null
                    }
                    <FormGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>Email</InputGroupText>
                            </InputGroupAddon>
                            <Input type="text" id="emailInput" name="username" placeholder="example@gmail.com" onChange={ev => this.handleChange(ev)} />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>Mot de passe</InputGroupText>
                            </InputGroupAddon>
                            <Input type="password" id="passwordInput" name="password" placeholder="*******" onChange={ev => this.handleChange(ev)} />
                        </InputGroup>
                    </FormGroup>
                    <Button color="primary" onClick={() => this.login()}>Connexion</Button>
                    <Link to="/register"><i />Don't have an account ?</Link>
                </Form>
            </div>
        );
    }
}

LoginForm.propTypes = {
    setUser: PropTypes.func.isRequired,
};

export default LoginForm;
