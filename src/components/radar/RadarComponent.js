import React, {Component} from 'react';
import { Radar } from 'react-chartjs-2';
import Button from 'react-bootstrap/Button';
// Configuracion de la Grafica
import datosRadar from './ConfiguracionRadar';

class RadarComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            datos: datosRadar
        }    
    }    
    //----------------------------------------------------------------------//
    // Metodo componentDidUpdate - Actualiza valores de la grafica          //
    //----------------------------------------------------------------------//      
    componentDidUpdate(prevProps, prevState) {
        console.log('RadarComponent.js - Metodo componentDidUpdate');

        if (this.state.datos !== datosRadar ) {
            this.setState({ datos: datosRadar });
        }
    }      
    //----------------------------------------------------------------------//
    // Metodo para generar datos aleatorios en la grafica                   //
    //----------------------------------------------------------------------//
    randomize = () => {
        // Log de seguimiento
        console.log("RadarComponent.js - Metodo randomize");

        // Generamos datos aleatorios
        var datosHombre = this.state.datos.datasets[0];
        var datosMujer = this.state.datos.datasets[1];

        // Generamos datos aleatorios para "Hombre"
        for (var i = 0; i < datosHombre.data.length; i++) {
            datosHombre.data[i] = this.generateNumber(i);
            this.setState({
                datos: this.state.datos.datasets[0].data[i] + datosHombre
            })            
        }  

        // Generamos datos aleatorios para "Mujer"
        for (var j = 0; j < datosMujer.data.length; j++) {
            datosMujer.data[j] = this.generateNumber(j);
            this.setState({
                datos: this.state.datos.datasets[1].data[j] + datosMujer
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
        console.log('RadarComponent.js - Metodo render()');

        return(
            <div className="container">
                <h3 className="m-3">Grafico de Radar</h3>
                <hr></hr>
                <Radar id="radar-chart" width={400} height={400} data={datosRadar} options={datosRadar.options} redraw />
                <Button className="btn btn-4 btn-block mx-auto w-25" onClick={this.randomize}>Aleatorio</Button>                
            </div>
        )
    }
}

export default RadarComponent;