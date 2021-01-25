import React, {Component} from 'react';
// Rutas
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// Componentes Comunes
import NavbarComponent from '../components/shared/navbar/NavbarComponent';
import FooterComponent from "../components/shared/footer/FooterComponent";
// Componentes
import LineaComponent from '../components/linea/LineaComponent';
import BarraComponent from '../components/barra/BarraComponent';
import DonutComponent from '../components/donut/DonutComponent';
import RadarComponent from '../components/radar/RadarComponent';

class Router extends Component{
    //----------------------------------------------------------------------//
    // Metodo render()                                                      //
    //----------------------------------------------------------------------//
    render(){
        // Log de seguimiento
        console.log('RouterComponent - Metodo render()');

        return(
            <BrowserRouter>
                {/* Cabecera */}
                <NavbarComponent /> 

                {/* Configuracion de rutas y paginas */}
                <Switch>
                    <Route exact path="/" component={LineaComponent} />
                    <Route exact path="/linea" component={LineaComponent} />
                    <Route exact path="/barra" component={BarraComponent} />
                    <Route exact path="/donut" component={DonutComponent} />
                    <Route exact path="/radar" component={RadarComponent} />
                </Switch>

                {/* Footer */}
                <FooterComponent />                
            </BrowserRouter>
        );
    }
}

export default Router;