
//Types de objetoLinkNavBar para colocar en el componente LinkNavBar
//el nombre de la page es el del primer nav, el newsection es para saber si se crea una nueva
//seccion que crea una rayita de separacion, el nombre es el nombre del nav, la urlImagen es la imagen
//otros es una informacion extra que recibe un arreglo de string y lo coloca como desee
export type ObjetoLinkNavBar = {
    nombrePage: string;
    newSection: boolean | undefined;
    nombre: string;
    subRuta?: string;
    urlImagen: string;
    otros?: {
        informacion: string[]
    }
}
 