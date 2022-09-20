
import { Link } from "react-router-dom";
import "./style.scss";
import {regexNoWhitSpace} from '../../utils/util';
 

//Types de uso en esta pagina que obtiene un string[] para mostrar informacion
// y un metodo useState del padre para que se le coloca el valor seleccionado
//por ultimo el nombre de la pagina padre
type argsSetValue = {
    otros: string[];
    onSetValue: (value: string) => void
    namePage: string;
}

//Componente que ejecuta opciones extra, que desglosa en una lista de informacion extra
export const LinkDatosOtros = ({ otros, onSetValue, namePage }: argsSetValue) => {

    return (
        <ul id="subMenuOtros">
            {
                otros.map((item) => (
                    <li key={item}>
                        <Link
                            onClick={() => onSetValue(`${namePage}/${regexNoWhitSpace(item)}`)}
                            to={`${namePage}/${regexNoWhitSpace(item)}`}
                        >
                            {item}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}
