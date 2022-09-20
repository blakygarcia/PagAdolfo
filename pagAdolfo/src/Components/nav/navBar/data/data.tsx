//import * as images from "../../../assets/images/"  
import {ObjetoLinkNavBar} from "../types/navegacion"
import {regexNoWhitSpace} from '../utils/util';

//Manejo de navegacion principal 
export enum rutasPrincipal {
    
    Inic = "Home",
    Who = "Who are",
    Contact  = "Contact us",
    Galery="Galery",
    Form = "Form",
 
}

//Convertimos la navegacion en un arreglo para poder hacer el map 
export const nameNav: string[] = [
    
    rutasPrincipal.Inic,
    rutasPrincipal.Who,
    rutasPrincipal.Contact,
    rutasPrincipal.Galery,
    rutasPrincipal.Form
  
]; 

 
export const rutasInventario = {
    Articulos: "Articulos",
    Otros: "Otros",
    OtrosValue: {
        MovimientosDeArticulos: "Movimientos De Articulos",
     
    }
}

export const rutasUsuario = {
    Propietario: "Propietarios",
    Usuario: "Usuarios"





}

export const seccionUsuario: ObjetoLinkNavBar[] = (
    [
      
        {
            nombrePage: regexNoWhitSpace(`${rutasPrincipal.Inic}`),
            newSection: false,
            nombre: "Home",
            subRuta: "Inic",
            urlImagen:  // temp
        },
        {
            nombrePage: regexNoWhitSpace(`${rutasPrincipal.Inic}`),
            newSection: false,
            nombre: "Who are you?",
            subRuta: "Who",
            urlImagen:  // temp
        },
        {
            nombrePage: regexNoWhitSpace(`${rutasPrincipal.Inic}`),
            newSection: false,
            nombre: "Contact Us",
            subRuta: "Contact us",
            urlImagen:  // temp
        }
    ]
)
