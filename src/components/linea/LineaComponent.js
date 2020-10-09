import React, {Component} from 'react';

class LineaComponent extends Component{
    render(){
        // Log de seguimiento
        console.log('LineaComponent.js - Metodo render()');

        return(
            <div className="container">
                <h3 className="m-3">Grafico de Lineas</h3>
                <hr></hr>
            </div>
        )
    }
}

export default LineaComponent;