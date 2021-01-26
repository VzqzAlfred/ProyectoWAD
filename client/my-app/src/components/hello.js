import React from 'react';
import { useEffect, useState } from 'react';
import './Header/Header.css'
import { Map } from './Map/Map';


/*      Conetion with Nodejs: no success */

export const Header = () => {
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        fetch('/api/').then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonResponse => setInitialState(jsonResponse.hello))
    }, [])

    console.log(initialState);
    return (
        <header className="header">
            <div className="container">

                <div className="item">
                    <h1>Estados de la República</h1>
                </div>

                <div className="item">
                    <ul className="sections">
                        <li className="section-item"><a onClick={<Map />}>Home</a></li>
                        <li className="section-item"><a href='#' onClick="{<List />}">Lista de Categorías</a></li>
                    </ul>
                </div>

                    <div className="item">
                        log in
                    </div>
            </div>
        </header> 
    
    )
}


