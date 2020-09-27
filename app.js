import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      dia: 'Lunes'
      
    }
    this.state ={
      mes: 'Agosto'
    }
    this.state ={
      años: ['2020','2021']   
    }
    
    this.cambioDia = this.cambioDia.bind(this);
    this.cambioMes= this.cambioMes.bind(this);
  }
  render() {
    return (
      <div>
        <p><select value={this.state.dia} onChange={this.cambioDia}>
        <opcion>Lunes</opcion>
        <option>Lunes</option>
        <option>Martes</option>
        <option>Miercoles</option>
        <option>Jueves</option>
        <option>Viernes</option>
        <option>Sabado</option>
        <option>Domingo</option>
        </select></p>
        <p>Día seleccionado:{this.state.dia}</p>
        <div> 
          <hr></hr>
          <p><select value={this.state.mes} onChange={this.cambioMes}>
        <opcion>Enero</opcion>
        <option>Febrero</option>
        <option>Marzo</option>
        <option>Mayo</option>
        <option>Junio</option>
        <option>Julio</option>
        <option>Agosto</option>
        <option>Septiembre</option>
        <option>Octubre</option>
        <option>Noviembre</option>
        <option>Diciembre</option>
        </select></p>
        <p>Día seleccionado:{this.state.mes}</p>
        </div>
        <div>
          <hr></hr>
        </div>
      </div>
     
    );
    
  }

  cambioDia(e) {
    this.setState({
      dia: e.target.value
    })
  }

  cambioMes(e) {
    this.setState({
      mes: e.target.value
    })
  }
}



export default App;
