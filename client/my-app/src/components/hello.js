import React from 'react';
import {useEffect, useState} from 'react';


/*      Conetion with Nodejs: no success */

export const Hello = ()=> {
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
        <div>
            <p>Hi</p>
            {initialState.length > 0 && initialState.map((e,i) => <li key={i}>{e}</li>)}
        </div>)
}
