import React, { Component } from 'react';
import { connect } from "react-redux";

import * as usuariosActions from '../../actions/usuariosActions';
import * as publicacionesActions from '../../actions/publicacionesActions';

import Spinner from "../General/Spinner";
import Fatal from "../General/Fatal";

const { traerTodos: usuariosTraerTodos } = usuariosActions;
const { traerPorUsuario: publicacionesTraerPorUsuario } = publicacionesActions;

class Publicaciones extends Component {

    async componentDidMount(){
        const {
            usuariosTraerTodos,
            publicacionesTraerPorUsuario,
            match: { params: {key } }
        } = this.props;

        if (!this.props.usuariosReducer.usuarios.length) {
            await usuariosTraerTodos();
        }
        if (!('publicaciones_key' in this.props.usuariosReducer.usuarios[key])) {            
            publicacionesTraerPorUsuario(key);
        }
    }

	ponerContenido = () => {
        console.log(this.props);
		if (this.props.publicacionesReducer.cargando) {
			return <Spinner />;
		}
		if (this.props.publicacionesReducer.error) {
			return <Fatal mensaje={this.props.publicacionesReducer.error} />;
		}
		return(
            this.props.match.params.key
		)
    }
    
    ponerUsuario = () =>{
        
    };

    render(){
        return(
            <div>
                <h1>
                    Publicaciones de 
                </h1>
				{this.ponerContenido()}
            </div>
        )
    }
}

const mapStateToProps = ({usuariosReducer, publicacionesReducer}) => {
    return {
        usuariosReducer,
        publicacionesReducer
    };
}

const mapDispatchToProps = ({
    usuariosTraerTodos,
    publicacionesTraerPorUsuario
})

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones);