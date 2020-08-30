import React, { Component, Fragment } from 'react';
import "bootswatch/dist/cerulean/bootstrap.min.css"; 
import axios from "axios";
const config = require('../config.json');



export default class Reservations extends Component {



  state = {
    newReservation: {
        'id': '',
        'minionType': '',
        'minionSize': '',
        'minionColor': '',
        'clientName': '',
        'clientAddress': '',
        'clientPayment': ''
    },

    reservations: []
}

handleSubmit = async (id, event) => {
    event.preventDefault();
    try {
      const params = {
        'id': id,
        'minionType': this.state.newReservation.minionType,
        'minionSize':this.state.newReservation.minionSize,
        'minionColor': this.state.newReservation.minionColor,
        'clientName': this.state.newReservation.clientName,
        'clientAddress':this.state.newReservation.clientAddress,
        'clientPayment':this.state.newReservation.clientPayment
    };

       await axios.post(`${config.api.invokeUrl}/`, params);
       this.setState({reservations:[...this.state.reservations, this.state.newReservation] });
       this.setState({newReservation: { 'id': '',
       'minionType': '',
       'minionSize': '',
       'minionColor': '',
       'clientName': '',
       'clientAddress': '',
       'clientPayment': ''
      }});


    } catch(err){
      console.log(`N enviou o email: ${err}`);


    }
    this.setState({ reservations: [...this.state.reservations, this.state.newReservation] })
    this.setState({
      newReservation: {
          'id': '',
          'minionType': '',
          'minionSize': '',
          'minionColor': '',
          'clientName': '',
          'clientAddress': '',
          'clientPayment': ''
      }});  
    
    }


  handleAddReservation = async (id, event) => {
    event.preventDefault();
    try {
      const params = {
        'id': id,
        'minionType': this.state.newReservation.minionType,
        'minionSize':this.state.newReservation.minionSize,
        'minionColor': this.state.newReservation.minionColor,
        'clientName': this.state.newReservation.clientName,
        'clientAddress':this.state.newReservation.clientAddress,
        'clientPayment':this.state.newReservation.clientPayment
    };

       await axios.post(`${config.api.invokeUrl}/product-reservation/${id}`, params);
       this.setState({reservations:[...this.state.reservations, this.state.newReservation] });
       this.setState({newReservation: { 'id': '',
       'minionType': '',
       'minionSize': '',
       'minionColor': '',
       'clientName': '',
       'clientAddress': '',
       'clientPayment': ''
      }});


    } catch(err){
      console.log(`Ocorreu um erro: ${err}`);


    }
    this.setState({ reservations: [...this.state.reservations, this.state.newReservation] })
    this.setState({
      newReservation: {
          'id': '',
          'minionType': '',
          'minionSize': '',
          'minionColor': '',
          'clientName': '',
          'clientAddress': '',
          'clientPayment': ''
      }});  
    
    }


  onAddReservationMinionType = event => this.setState({ newReservation: { ...this.state.newReservation, "minionType": event.target.value } });
  onAddReservationMinionSize = event => this.setState({ newReservation: { ...this.state.newReservation, "minionSize": event.target.value } });
  onAddReservationMinionColor = event => this.setState({ newReservation: { ...this.state.newReservation, "minionColor": event.target.value } });
  onAddReservationClientName = event => this.setState({ newReservation: { ...this.state.newReservation, "clientName": event.target.value } });
  onAddReservationClientAddress = event => this.setState({ newReservation: { ...this.state.newReservation, "clientAddress": event.target.value } });
  onAddReservationClientPayment = event => this.setState({ newReservation: { ...this.state.newReservation, "clientPayment": event.target.value } });
  onAddReservationID = event => this.setState({ newReservation: { ...this.state.newReservation, "id": event.target.value } });


  render() {
    return (
      <Fragment>
        <section className="section">
          <div className="container">
            <h1>Reservas</h1>
            <p className="subtitle is-5">Faça sua reserva usando o formulário abaixo:</p>
            <div className="card-body">
                    <div className="row">
                    <div className="col-md-2">
                            <div className="form-group">
                                <label>Digite seu e-mail:</label>
                                <input type="email"
                                    name="id"
                                    value={this.state.newReservation.id}
                                    className="form-control"
                                    onChange={this.onAddReservationID} />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Selecione o tipo de minion que deseja reservar</label>
                                <select className="form-control"
                                   onChange={this.onAddReservationMinionType}
                                    value={this.state.newReservation.minionType}
                                    name="minionType">
                                    <option selected></option>
                                    <option>Kevin</option>
                                    <option>Stuart</option>
                                    <option>Bob</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Escolha o tamanho dele</label>
                                <select className="form-control"
                                    value={this.state.newReservation.minionSize}
                                    name="minionSize"
                                    onChange={this.onAddReservationMinionSize}>
                                    <option selected></option>
                                    <option>P</option>
                                    <option>M</option>
                                    <option>G</option>
                                </select>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Escolha a cor dele</label>
                                <select className="form-control"
                                    value={this.state.newReservation.minionColor}
                                    name="minionColor"
                                    onChange={this.onAddReservationMinionColor}>
                                    <option selected></option>
                                    <option>Azul</option>
                                    <option>Amarelo</option>
                                    <option>Verde</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Digite seu nome completo</label>
                                <input type="text"
                                    name="clientName"
                                    value={this.state.newReservation.clientName}
                                    className="form-control"
                                    onChange={this.onAddReservationClientName} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Digite seu endereço completo</label>
                                <input type="text"
                                    name="clientAddress"
                                    value={this.state.newReservation.clientAddress}
                                    className="form-control"
                                    onChange={this.onAddReservationClientAddress}
                                />

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Escolha o tipo de pagamento </label>
                                <select className="form-control"
                                    value={this.state.newReservation.clientPayment}
                                    name="clientPayment"
                                    onChange={this.onAddReservationClientPayment}>
                                    <option selected></option>
                                    <option>Cartão de crédito</option>
                                    <option>Dinheiro</option>
                                    <option>Transferência bancária</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <button onClick={event => this.handleAddReservation(this.state.newReservation.id, event)} className="btn btn-success"> Salvar</button>
                        </div>
                    </div>
                </div>
            </div>            
        </section>
      </Fragment>
    )
  }
}
