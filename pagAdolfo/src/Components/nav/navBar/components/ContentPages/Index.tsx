
import {
    rutasInventario,
    rutasPrincipal,
    nameNav,
    rutasUsuario
} from '../../data/data';
import { Route, Routes } from "react-router-dom"; 
import {regexNoWhitSpace} from '../../utils/util';
import PropietarioForm from '../../../../usuario/pages/propietarioForm';
import { Propietario as PropietarioTable } from '../../../../pages/Propietario';
import { VistaUsuario as VistaUsuarioTable } from '../../../../pages/VistaUsuario';
import Login from '../../../Login';
import { Console } from 'console';
//metodo para que no tenga espacios en blanco 

//Esto carga las secciones del content nav bar o mejor dicho carga las paginas y todo lo necesario 
export const ContentPages = () => {


    //constantes para que el codigo no sea tan largo y sea mas legible
    const Inventario = regexNoWhitSpace(rutasPrincipal.Inventario);
    
    const pathUsuario = regexNoWhitSpace(`${rutasPrincipal.Usuario}/${rutasUsuario.Propietario}/:entidadId`);
    return (
        <>
            <Routes>
                {/* Rutas Nav Principal */}
                

                <Route path={rutasPrincipal.Usuario}>
                    <Route path={rutasUsuario.Propietario} element={<PropietarioTable/>}></Route>
                    <Route path={rutasUsuario.Usuario} element={<VistaUsuarioTable/>}></Route>
                    <Route path={`${rutasUsuario.Propietario}/:entidadId`} element={<PropietarioForm />}></Route>

                </Route>

                <Route
                    path={
                        `${Inventario}/${regexNoWhitSpace(rutasInventario.Otros)}`
                    }
                    element={""}
                    /* 'invoca el primer componente del downlist de otros' */
                />

                {/* manejo de este map para que no tire advertencia de nav principal */}
                {
                    nameNav.map((item, index) => (
                        <Route key={index} path={regexNoWhitSpace(item)} element={""} />
                    ))
                }
                {/* fin del manejo para que no tire advertencia de nav principal */}


                {/* Inventario */}

                {/* <Route
                    path={
                        `${Inventario}/${regexNoWhitSpace(rutasInventario.Articulos)}`
                    }
                    element={<Prueba />}
                />

                <Route
                    path={
                        `${Inventario}/${regexNoWhitSpace(rutasInventario.Grupos)}`
                    }
                    element={<Prueba />}
                /> */}

                {/* Inventario otros */}

                {/* <Route
                    path={
                        `${Inventario}/${regexNoWhitSpace(rutasInventario.OtrosValue.AjustesDeInventario)}`
                    }
                    element={<Prueba />}
                /> */}











                {/* Compras */}


                {/* Ventas */}

                {/* Cuentas Por Pagar */}

                {/* Facturacion */}

                {/* Cuentas Por Cobrar */}

                {/* Punto De Venta */}

                {/* Planilla */}

                {/* Empresa */}

                {/* Configuracion */}
            </Routes>
        </>
    )
}
