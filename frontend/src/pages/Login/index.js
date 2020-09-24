import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom'

import api from '../../services/api'
import { login } from '../../services/auth'
import './styles.css'


class Login extends Component {
    state = {
        email: '',
        password: '',
        error: ''
    }


    handleSubmit = async e => {

        e.preventDefault()
        const { email, password } = this.state
        if (!email || !password) {
            this.setState({ error: "Preencha e-mail e senha para logar" })
        } else {
            try {
                const response = await api.post('/sessions', { email, password })
                login(response.data.token)
                this.props.history.push('/principal')
            } catch (err) {
                this.setState({
                    error:
                        'Houve um problema com o login'
                })
            }
        }
    }

    render() {
        return (

            <div className="login-form">
                <p>Faça seu login</p>
                <form className="form" onSubmit={this.handleSubmit} noValidate>
                    <label className="label" htmlFor="inputemail">E-mail</label>
                    <input
                        type="email"
                        id="inputEmail"
                        name="email"
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                    <label htmlFor="inputpassword">Password</label>
                    <input
                        type="password"
                        id="inputPassword"
                        name="password"
                        onChange={e => this.setState({ password: e.target.value })}
                    />

                    <button className='btn' type="submit">Login</button>
                    <Link to="/register">Cadastre-se</Link>

                </form>
            </div>
        );
    }
}
export default withRouter(Login);