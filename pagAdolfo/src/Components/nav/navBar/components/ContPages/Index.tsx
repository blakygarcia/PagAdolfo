
import {
    rutasInic,
    rutasPrincipal
    
} from '../../data/data';
import { Route, Routes } from "react-router-dom"; 
import {regexNoWhitSpace} from '../../utils/util';
import {Home}  from '../../../../../Pages/Home';
//import Whoare  from '../../../../pages/VistaUsuario';
//import Contactus from '../../../Login';
//import { Console } from 'console';
//metodo para que no tenga espacios en blanco 

//Esto carga las secciones del content nav bar o mejor dicho carga las paginas y todo lo necesario 
export const ContentPages = () => {


    //constantes para que el codigo no sea tan largo y sea mas legible
    //const Inventario = regexNoWhitSpace(rutasPrincipal.Inventario);
    
    const pathInic = regexNoWhitSpace(`${rutasPrincipal.Inic}/${rutasInic.Home}`);
    return (
        <>
            <Routes>
                {/* Rutas Nav Principal */}
                

                <Route path={rutasPrincipal.Inic}>
                    <Route path={rutasInic.Home} element={<Home/>}></Route>
                    

                </Route>

                <Route
                />         
            </Routes>
        </>
    )
}
