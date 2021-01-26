import React from 'react';
import './Map.css';
import map from '../../assets/states/states.svg'
import edit from '../../assets/icons/edit.png'
import borrar from '../../assets/icons/icn-delete.png'


export const Map = () => {
    /*return(
        <main>
            <img src={map}/>
        </main>
    )*/

    return (
        <main>
            <table>
                <tr>
                    <th>id_Estado</th>
                    <th>Estado</th>
                    <th>Capital</th>
                    <th>Editar</th>
                    <th>Borrar</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Sonora</td>
                    <td>Hermosillo</td>
                    <td><a href="#"><img src={edit}/></a></td>
                    <td><a href="#"><img src={borrar}/></a></td>
                </tr>

                <tr>
                    <td>2</td>
                    <td>Nuevo León</td>
                    <td>Monterrey</td>
                    <td><a href="#"><img src={edit}/></a></td>
                    <td><a href="#"><img src={borrar}/></a></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Tamaulipas</td>
                    <td>Ciudad Victoria</td>
                    <td><a href="#"><img src={edit}/></a></td>
                    <td><a href="#"><img src={borrar}/></a></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Sonaloa</td>
                    <td>Culiacán</td>
                    <td><a href="#"><img src={edit}/></a></td>
                    <td><a href="#"><img src={borrar}/></a></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Nayarit</td>
                    <td>Tepic</td>
                    <td><a href="#"><img src={edit}/></a></td>
                    <td><a href="#"><img src={borrar}/></a></td>
                </tr>
            </table>
        </main>
    )
}