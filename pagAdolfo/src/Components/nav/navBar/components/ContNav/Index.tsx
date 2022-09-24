import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { ObjetoLinkNavBar } from "../../types/navegacion";
import { LinkDatosOtros } from "../../index";
import "./style.scss";
import {regexNoWhitSpace} from '../../utils/util';

// Componente que maneja la informacion dentro del nav crea el estilo y coloca
// debe recibir un arreglo de objetos type objetoLinkNavBar como parametro para poder manejar la informacion
// lo crea como nav link y tiene un metodo para seleccionar y obtener que pathname de navegacion
// se esta usando 
export const ContentNavBar = (seccion: ObjetoLinkNavBar[]) => {

    const datoSeccion: ObjetoLinkNavBar[] = Object.values(seccion)

    //creamos una constante que obtiene la pagina padre para 
    //para poder colocarla y quede mas limpio el codigo
    const parentPage = regexNoWhitSpace(datoSeccion[0].nombrePage);

    const [datoSeleccionado, setDatoSeleccionado] = useState(regexNoWhitSpace(datoSeccion[0].nombre));


    return (
        <>
            <div className="content-holder">
                <div className="section" id="section_inventario">
                    {
                        datoSeccion.map((item, index) => {
                            const url = item.subRuta || item.nombre
                            return (

                            <div key={index} className={item.newSection ? "group" : "unGroup"}>
                                {/* evalua si tiene opciones extras y le coloca la clase para el downlist */}
                                <div className={item.otros != undefined ? "downListOtros" : ''}>
                                    <NavLink
                                        onClick={() => { item.otros == undefined && setDatoSeleccionado(regexNoWhitSpace(item.nombre)) }}
                                        to={item.otros == undefined
                                            ? (
                                                (`${parentPage}/` == `${regexNoWhitSpace(url)}`)
                                                ? `${regexNoWhitSpace(url)}`
                                                : `${parentPage}/${regexNoWhitSpace(url)}`
                                            )
                                            : `${parentPage}/${regexNoWhitSpace(url)}`}
                                        className={'navButton ribbon-button'}
                                    >
                                        <span className="icon">
                                            <img src={item.urlImagen} alt="image" />
                                        </span>
                                        {item.nombre}
                                    </NavLink>

                                    {
                                        item.otros != undefined
                                        &&
                                        <LinkDatosOtros
                                            onSetValue={setDatoSeleccionado}
                                            namePage={item.nombrePage}
                                            otros={item.otros.informacion}
                                        />
                                    }
                                </div>
                            </div>    
                        )
                        }
                    )
                    }
                </div >
            </div >

        </>
    )
}
