import { useEffect, useState } from "react";
import {
    Routes,
    Route,
    NavLink,
} from "react-router-dom";

import { ContentNavBar } from "./components/ContNav/Index";

import {
    rutasPrincipal,
    nameNav
} from './data/data';

//import { LinkNavBar } from "./index";
import {regexNoWhitSpace} from './utils/util';
import '../../../../src/styles/nav/_NavBar.scss';
//Este componente se encarga de colocar la navegacion principal enviandole un arreglo de string como parametro
//el arreglo de string es el nombre de la seccion que se esta usando y carga el siguiente componente que es el 
//LinkNavBar enviandole la ubicacion actual del componente, asi puede realizar una carga de los datos correctos
export const NavBar = () => {
    
    //se selecciona la actual location para cuando se haga un reload no se pierda
    // y se hace un split porque viene /location se corta el primer / que seria el [0]
    // entonces para cojer el valor que queremos es el [1] que es el location directamente 
    //si solo se quitasen los / y la navegacion tiene mas location, se pegaran y no funcionaria
    const [locationNav, setLocationNav] = useState<string>(location.pathname.split("/")[1]);

    
   

    return (
        <div className="navBar">
            <span className="title">
            Costa Rica Limpia
            </span>
            <nav>
                <ul className="tabs-holder">
                    <li>
                        <NavLink className="navStatic" to="/">
                            Costa Rica Limpia
                        </NavLink>
                    </li>
                    
                    {
                        nameNav.map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    onClick={() => setLocationNav(regexNoWhitSpace(item))}
                                    to={regexNoWhitSpace(item)}
                                    className={({ isActive }) =>
                                        isActive ? 'activeNav' : "navButton"
                                    }
                                >
                                    {item}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>

                    {/* 
                        aqui se envian los datos de la navegacion a ContentNavBar enviandole el objeto respectivo
                        para ese contenido de la navegacion
                    */}
                {/*
                    (locationNav == rutasPrincipal.Inic) && <ContentNavBar {...seccionUsuario} />
                }
                {
                    (locationNav == rutasPrincipal.Who) && <ContentNavBar {...seccionUsuario}  />
                }
                {
                    (locationNav == rutasPrincipal.Contact) && <ContentNavBar {...seccionUsuario} />
                */}
            </nav >


        </div >
    )
}
