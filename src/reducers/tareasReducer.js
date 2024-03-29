import { 
    TRAER_TODAS, 
    CARGANDO, 
    ERROR, 
    CAMBIO_USUARIO_ID, 
    CAMBIO_TITULO, 
    GUARDAR, 
    ACTUALIZAR,
    LIMPIAR
} from '../types/tareasTypes';

const INITIAL_STATE = {
    tareas: {},
    cargando: false,
    error: "",
    usuario_id: "",
    titulo: "",
    regresar: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TRAER_TODAS:
            return {
                ...state, 
                tareas: action.payload, 
                cargando: false, 
                error: "", 
                regresar: false, 
                usuario_id: "",
                titulo: ""
            };
        case CARGANDO:
            return {...state, cargando: true};
        case ERROR:
            return {...state, error: action.payload, cargando: false};
        case CAMBIO_USUARIO_ID:
            return {...state, usuario_id: action.payload, error: "", cargando: false};
        case CAMBIO_TITULO:
            return {...state, titulo: action.payload, error: "", cargando: false};
        case GUARDAR:
            return {...state, tareas: {}, error: "", cargando: false, regresar: true};
        case ACTUALIZAR:
            return {...state, tareas: action.payload};
        case LIMPIAR:
            return {...state, usuario_id:"", titulo:""};
        default:
            return state;
    }
}