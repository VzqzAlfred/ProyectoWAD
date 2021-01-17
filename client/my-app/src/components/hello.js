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
            <div>
                <h1>Estados de la República</h1>
                <div className="Grid">
                    <ul className="template">
                        <li className="item"><a href='#' onclick="console.log('The link was clicked.'); return false">Home</a></li>
                        <li className="item"><a href='#' onclick="console.log('The link was clicked.'); return false">Lista de Categorías</a></li>
                    </ul>
                </div>
            </div>
        </header>
        /*<div>
            {initialState.length > 0 && initialState.map((e,i) => <li key={i}>{e}</li>)}
        </div>*/
    )
}


