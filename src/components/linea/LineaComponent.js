import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';
import Button from 'react-bootstrap/Button';
// Configuracion de la Grafica
import data from './ConfiguracionLinea';

class LineaComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            datos: data
        }    
    }
    //----------------------------------------------------------------------//
    // Antes de renderizar, cargar el metodo                                //
    //----------------------------------------------------------------------//
    componentDidMount (){  
        // Log de seguimiento
        console.log("LineaComponent.js - Metodo componentDidMount");  
    }    
    //----------------------------------------------------------------------//
    // Metodo para generar datos aleatorios en la grafica                   //
    //----------------------------------------------------------------------//
    randomize = () => {
        // Log de seguimiento
        console.log("LineaComponent.js - Metodo randomize");

        var datosGrafica = this.state.datos;

        for (var i = 0; i < datosGrafica.datasets.length; i++) {
            for (let j = 0; j < datosGrafica.datasets[i].data.length; j++) {
                datosGrafica.datasets[i].data[j] = this.generateNumber(i);
            }
        }

        this.setState({
            datos: datosGrafica
        })
    };   
    //----------------------------------------------------------------------//
    // Metodo para generar los numeros                                      //
    //----------------------------------------------------------------------//
    generateNumber = (i) => {
        return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
    };  

    render(){
        // Log de seguimiento
        console.log('LineaComponent.js - Metodo render()');

        return(
            <div className="container">
                <h3 className="m-3">Grafico de Lineas</h3>
                <hr></hr>
                <Line data={this.state.datos} options={data.options} />
                <Button className="btn btn-4 btn-block mx-auto w-25" onClick={this.randomize}>Aleatorio</Button>
            </div>
        )
        
    }

}

export default LineaComponent;