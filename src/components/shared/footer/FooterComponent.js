import React, {Component} from 'react';

class FooterComponent extends Component{
    render(){
        // Log de seguimiento
        console.log('FooterComponent.js - Metodo render()');
        return(
            <div className="footer-light font-small fixed-bottom bg-custom">
                <p className="text-center m-2"><i>Copyright &copy; - Carlos Mur</i></p>
            </div>            
        )
    }
}

export default FooterComponent;

   
