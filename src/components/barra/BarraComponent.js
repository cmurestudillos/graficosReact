import React, {Component} from 'react';
import { Bar } from 'react-chartjs-2';
import Button from 'react-bootstrap/Button';
// Configuracion de la Grafica
import datosBarra from './ConfiguracionBarra';

class BarraComponent extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            datos: datosBarra
        };
    }
    //----------------------------------------------------------------------//
    // Metodo componentDidUpdate - Actualiza valores de la grafica          //
    //----------------------------------------------------------------------//      
    componentDidUpdate(prevProps, prevState) {
        console.log('BarraComponent.js - Metodo componentDidUpdate');

        if (this.state.datos !== datosBarra ) {
            this.setState({ datos: datosBarra });
        }
    }      
    //----------------------------------------------------------------------//
    // Metodo para generar datos aleatorios en la grafica                   //
    //----------------------------------------------------------------------//
    randomize = () =>  {
        // Log de seguimiento
        console.log("BarraComponent.js - Metodo randomize");

        var datosCholate = this.state.datos.datasets[0];
        var datosAzucar = this.state.datos.datasets[1];

        // Generamos datos aleatorios para "Chocolate"
        for (var i = 0; i < datosCholate.data.length; i++) {
            datosCholate.data[i] = this.generateNumber(i);
            this.setState({
                datos: this.state.datos.datasets[0].data + datosCholate
            })
        }  

        // Generamos datos aleatorios para "Azucar"
        for (var j = 0; j < datosAzucar.data.length; j++) {
            datosAzucar.data[j] = this.generateNumber(j);
            this.setState({
                datos: this.state.datos.datasets[1].data + datosAzucar
            })            
        }  

    };     
    //----------------------------------------------------------------------//
    // Metodo para generar los numeros                                      //
    //----------------------------------------------------------------------//
    generateNumber = (i) => {
        return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
    };      
    //----------------------------------------------------------------------//
    // Metodo render                                                        //
    //----------------------------------------------------------------------//    
    render(){
        // Log de seguimiento
        console.log('BarraComponent.js - Metodo render()');

        return(
            <div className="container">
                <h3 className="m-3">Grafico de Barras</h3>
                <hr></hr>
                <Bar id="bar-chart" width={400} height={400} data={datosBarra} options={datosBarra.options} redraw />
                <Button className="btn btn-4 btn-block mx-auto w-25" onClick={this.randomize}>Aleatorio</Button>
            </div>
        )
    }
}

export default BarraComponent;