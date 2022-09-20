//import * as images from "../../../assets/images/"  
import {ObjetoLinkNavBar} from "../types/navegacion"
import {regexNoWhitSpace} from '../utils/util';

//Manejo de navegacion principal 
export enum rutasPrincipal {
    
    Inic = "Home",
    Who = "Who are",
    Contact = "Contact",
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



//creacion del arreglo de objetos:objetoLinkNavBar que manejara la informacion dentro del nav
/*export const seccionInventario: ObjetoLinkNavBar[] = ([
   /* {
        nombrePage: regexNoWhitSpace(rutasPrincipal.Inic),
        newSection: false,
        nombre: rutasInventario.Home
        
    },
    {
        nombrePage:regexNoWhitSpace(rutasPrincipal.Inventario),
        newSection: false,
        nombre: rutasInventario.Grupos,
        urlImagen: images.grupos
    }, {
        nombrePage: regexNoWhitSpace(rutasPrincipal.Inventario),
        newSection: true,
        nombre: rutasInventario.Almacen,
        urlImagen: images.almacen,
    }, {
        nombrePage: regexNoWhitSpace(rutasPrincipal.Inventario),
        newSection: false,
        nombre: rutasInventario.Entradas,
        urlImagen: images.entradas,
    }, {
        nombrePage:regexNoWhitSpace(rutasPrincipal.Inventario),
        newSection: false,
        nombre: rutasInventario.Salidas,
        urlImagen: images.salidas,
    }, {
        nombrePage: regexNoWhitSpace(rutasPrincipal.Inventario),
        newSection: true,
        nombre: regexNoWhitSpace(rutasPrincipal.Inventario),
        urlImagen: images.traspasos,
    },
    {
        nombrePage: regexNoWhitSpace(rutasPrincipal.Inventario),
        newSection: false,
        nombre: rutasInventario.Otros,
        urlImagen: images.trazabilidad,
        otros: {
            informacion: [
                rutasInventario.OtrosValue.MovimientosDeArticulos, 
                rutasInventario.OtrosValue.ValorDeInventario, 
                rutasInventario.OtrosValue.DescuentosEspeciales, 
                rutasInventario.OtrosValue.AjustesDeInventario, 
                rutasInventario.OtrosValue.EliminarInventario, 
                rutasInventario.OtrosValue.CierreMensualDelSistema
            ]
        }
    }

])*/

/*export const seccionCompras:ObjetoLinkNavBar[] = ([
   
    {
        nombrePage: regexNoWhitSpace(rutasPrincipal.Compras),
        newSection: false,
        nombre: "Prueba1",
        urlImagen: images.almacen
    },
    {
        nombrePage: regexNoWhitSpace(rutasPrincipal.Compras),
        newSection: true,
        nombre: "Prueba2",
        urlImagen: images.almacen
    }, {
        nombrePage: regexNoWhitSpace(rutasPrincipal.Compras),
        newSection: true,
        nombre: "Prueba3",
        urlImagen: images.almacen
    } 
])*/

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
            nombre: "Ingresar propietario",
            subRuta: "Propietarios/Nuevo",
            urlImagen:  // temp
        }
    ]
)
