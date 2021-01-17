import React from 'react';
import { useEffect, useState } from 'react';
import './Header/Header.css'


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
                        <li className="section-item"><a href='#' onclick="console.log('The link was clicked.'); return false">Home</a></li>
                        <li className="section-item"><a href='#' onclick="console.log('The link was clicked.'); return false">Lista de Categorías</a></li>
                    </ul>
                </div>

                <div className="item">
                    button
                </div>
            </div>
        </header>
        /*<div>
            {initialState.length > 0 && initialState.map((e,i) => <li key={i}>{e}</li>)}
        </div>*/
    )
}


