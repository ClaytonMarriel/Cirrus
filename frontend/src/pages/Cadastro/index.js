import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom'

import api from '../../services/api'
import { login } from '../../services/auth'
import './styles.css'


class Cadastro extends Component {
    state = {
        name: '',
        profile: '',
        email: '',
        password: '',
        error: ''
    }

    handleSubmit = async e => {
        e.preventDefault()
        const { name, profile, email, password } = this.state
        if (!email, !password) {
            this.setState({ error: 'Preencha o e-mail e a senha ' })
        } else {
            try {
                await api.post('/users', { name, profile, email, password })
                this.props.history.push('/')
            } catch (err) {
                console.log(err)
                this.setState({ error: 'Ocorreu um erro ao criar a conta' })
            }
        }
    }

    render() {
        return (
            <div className="login-form">
                <p>Faça seu cadastro</p>
                <form onSubmit={this.handleSubmit} className="form" noValidate>
                    <label className="label" htmlFor="inputName">Nome</label>
                    <input
                        type="nome"
                        id="inputName"
                        name="name"
                        onChange={e => this.setState({ name: e.target.value })}
                    />

                    <label className="label" htmlFor="inputProfile">Profile</label>
                    <input
                        type="profile"
                        id="inputProfile"
                        name="profile"
                        onChange={e => this.setState({ profile: e.target.value })}
                    />

                    <label className="label" htmlFor="inputEmail">E-mail</label>
                    <input
                        type="email"
                        id="inputEmail"
                        name="email"
                        onChange={e => this.setState({ email: e.target.value })}
                    />

                    <label htmlFor="inputPassword">Password</label>
                    <input
                        type="password"
                        id="inputPassword"
                        name="password"
                        onChange={e => this.setState({ password: e.target.value })}
                    />


                    <button type="submit">Cadastrar</button>

                </form>
            </div>
        )
    }
}


export default withRouter(Cadastro)