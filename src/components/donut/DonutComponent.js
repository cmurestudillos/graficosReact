import React, {Component} from 'react';
import { Doughnut } from 'react-chartjs-2';
import Button from 'react-bootstrap/Button';
// Configuracion de la Grafica
import datosDonut from './ConfiguracionDonut';

class DonutComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            datos: datosDonut
        }    
    }    
    //----------------------------------------------------------------------//
    // Metodo componentDidUpdate - Actualiza valores de la grafica          //
    //----------------------------------------------------------------------//      
    componentDidUpdate(prevProps, prevState) {
        console.log('DonutComponent.js - Metodo componentDidUpdate');

        if (this.state.datos !== datosDonut ) {
            this.setState({ datos: datosDonut });
        }
    }      
    //----------------------------------------------------------------------//
    // Metodo para generar datos aleatorios en la grafica                   //
    //----------------------------------------------------------------------//
    randomize = () => {
        // Log de seguimiento
        console.log("DonutComponent.js - Metodo randomize");

        // Generamos datos aleatorios
        var datosGrafica = this.state.datos.datasets[0];
        for (var i = 0; i < datosGrafica.data.length; i++) {
            datosGrafica.data[i] = this.generateNumber(i);
            this.setState({
                datos: this.state.datos.datasets[0].data[i] + datosGrafica
            })            
        }  
    };      
    //----------------------------------------------------------------------//
    // Metodo para generar los numeros                                      //
    //----------------------------------------------------------------------//
    generateNumber = (i) => {
        return Math.round(Math.random() * 100);
    };       
    //----------------------------------------------------------------------//
    // Metodo render                                                        //
    //----------------------------------------------------------------------//    
    render(){
        // Log de seguimiento
        console.log('DonutComponent.js - Metodo render()');

        return(
            <div className="container">
                <h3 className="m-3">Grafico de Donut</h3>
                <hr></hr>
                <Doughnut id="doughnut-chart" width={400} height={400} data={datosDonut} options={datosDonut.options} redraw />
                <Button className="btn btn-4 btn-block mx-auto w-25" onClick={this.randomize}>Aleatorio</Button>                
            </div>
        )
    }
}

export default DonutComponent;