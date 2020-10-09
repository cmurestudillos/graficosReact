import React, {Component} from 'react';

class RadarComponent extends Component{
    render(){
        // Log de seguimiento
        console.log('RadarComponent.js - Metodo render()');

        return(
            <div className="container">
                <h3 className="m-3">Grafico de Radar</h3>
                <hr></hr>
            </div>
        )
    }
}

export default RadarComponent;