import React, {Component} from 'react';

class DonutComponent extends Component{
    render(){
        // Log de seguimiento
        console.log('DonutComponent.js - Metodo render()');

        return(
            <div className="container">
                <h3 className="m-3">Grafico de Donut</h3>
                <hr></hr>
            </div>
        )
    }
}

export default DonutComponent;