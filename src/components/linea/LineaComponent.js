import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';
import Button from 'react-bootstrap/Button';
// Configuracion de la Grafica
import datosLinea from './ConfiguracionLinea';

class LineaComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            datos: datosLinea
        }    
    }
    //----------------------------------------------------------------------//
    // Metodo componentDidUpdate - Actualiza valores de la grafica          //
    //----------------------------------------------------------------------//      
    componentDidUpdate(prevProps, prevState) {
        console.log('LineaComponent.js - Metodo componentDidUpdate');

        if (this.state.datos !== datosLinea ) {
            this.setState({ datos: datosLinea });
        }
    }      
    //----------------------------------------------------------------------//
    // Metodo para generar datos aleatorios en la grafica                   //
    //----------------------------------------------------------------------//
    randomize = () => {
        // Log de seguimiento
        console.log("LineaComponent.js - Metodo randomize");

        var datosPizza = this.state.datos.datasets[0];
        var datosSpagueti = this.state.datos.datasets[1];
        var datosMacarrones = this.state.datos.datasets[2];

        // Generamos datos aleatorios para "Pizza"
        for (var i = 0; i < datosPizza.data.length; i++) {
            datosPizza.data[i] = this.generateNumber(i);
            this.setState({
                datos: this.state.datos.datasets[0].data[i] + datosPizza.data[i]
            })
        }  

        // Generamos datos aleatorios para "Spagueti"
        for (var j = 0; j < datosSpagueti.data.length; j++) {
            datosSpagueti.data[j] = this.generateNumber(j);
            this.setState({
                datos: this.state.datos.datasets[1].data[j] + datosSpagueti.data[j]
            })
        }  


        // Generamos datos aleatorios para "Macarrones"
        for (var k = 0; k < datosMacarrones.data.length; k++) {
            datosMacarrones.data[k] = this.generateNumber(k);
            this.setState({
                datos: this.state.datos.datasets[2].data[k] + datosMacarrones.data[k]
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
        console.log('LineaComponent.js - Metodo render()');

        return(
            <div className="container">
                <h3 className="m-3">Grafico de Lineas</h3>
                <hr></hr>
                <Line id="line-chart" width={400} height={400} data={datosLinea} options={datosLinea.options} redraw />
                <Button className="btn btn-4 btn-block mx-auto w-25" onClick={this.randomize}>Aleatorio</Button>
            </div>
        )
        
    }

}

export default LineaComponent;