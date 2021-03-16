import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addUser } from '../../backend/backend';

import {
    Form, FormGroup, Input, InputGroup, InputGroupText, InputGroupAddon, Alert, Button,
} from 'reactstrap';
import Spinner from '../../components/Spinner';

class RegisterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formValues: {
                username: '',
                password: '',
                mail: '',
            },
            isLoading: false,
            error: '',
        };
    }

    handleChange(ev) {
        const { formValues } = this.state;
        const newData = { [ev.target.name]: ev.target.value };
        this.setState({ formValues: {...formValues, ...newData} });
    }

    async register() {
        const { formValues } = this.state;

        this.setState({ isLoading: true });
        addUser(formValues.username, formValues.mail, formValues.password);
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
                <strong>SIGN UP</strong>
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
                            <Input type="text" id="emailInput" name="mail" placeholder="example@gmail.com" onChange={ev => this.handleChange(ev)} />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>Username</InputGroupText>
                            </InputGroupAddon>
                            <Input type="text" id="usernameInput" name="username" placeholder="jim" onChange={ev => this.handleChange(ev)} />
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
                    <Button color="primary" onClick={() => this.register()}>Register</Button>
                    <Link to="/"><i />Have an account ?</Link>
                </Form>
            </div>
        );
    }
}

RegisterForm.propTypes = {
    setUser: PropTypes.func.isRequired,
};

export default RegisterForm;
