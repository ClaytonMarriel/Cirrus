import React, { Component } from 'react'

import api from '../../services/api'
import { login } from '../../services/auth'
import './inicio.css'


class Principal extends Component {


    state = {
        assunto: '',
        mensagem: ''
    }

    handleSubmit = async e => {
        e.preventDefault()



        const { assunto, mensagem } = this.state
        if (!assunto, !mensagem) {
            this.setState({ error: 'Conclua o cadastro do ticket' })
        } else {
            try {
                console.log(assunto, mensagem)
                await api.post('/users/' + 3 + '/tickets', { assunto, mensagem })
                this.props.history.push('/')
            } catch (err) {
                console.log(err)
                this.setState({ error: 'Ocorreu um erro ao criar o ticket' })
            }
        }
    }
    render() {
        return (

            <div className="login-form">
                <p>Cadastre seu Ticket</p>
                <form className="form" onSubmit={this.handleSubmit} noValidate>
                    <label className="label" htmlFor="inputname">Assunto</label>
                    <input
                        type="name"
                        id="inputname"
                        name="assunto"
                        onChange={e => this.setState({ assunto: e.target.value })}
                    />
                    <label htmlFor="inputname">Mensagem</label>
                    <input
                        type="name"
                        id="inputname"
                        name="mensagem"
                        onChange={e => this.setState({ mensagem: e.target.value })}
                    />

                    <button type="submit">Salvar Ticket</button>

                </form>
            </div>
        );


    }
}
export default Principal