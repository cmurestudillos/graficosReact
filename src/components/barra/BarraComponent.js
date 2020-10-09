import React, {Component} from 'react';

class BarraComponent extends Component{
    render(){
        // Log de seguimiento
        console.log('BarraComponent.js - Metodo render()');

        return(
            <div className="container">
                <h3 className="m-3">Grafico de Barras</h3>
                <hr></hr>
            </div>
        )
    }
}

export default BarraComponent;