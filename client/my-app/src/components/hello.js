import React from 'react';
import {useEffect, useState} from 'react';


/*      Conetion with Nodejs: no success */

export const Header = ()=> {
    const [initialState, setInitialState] = useState([]);

    useEffect(() =>{
        fetch('/api/').then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonResponse => setInitialState(jsonResponse.hello))
    },[])

    console.log(initialState);
    return (

        <p>Hi</p>
        
        /*<div>
            {initialState.length > 0 && initialState.map((e,i) => <li key={i}>{e}</li>)}
        </div>*/
    )
}


