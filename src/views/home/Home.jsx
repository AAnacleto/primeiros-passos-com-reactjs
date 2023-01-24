import React, { useState } from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) =>  {
let [legenda, setLegenda ] = useState('Estou no React')

    function resetLegenda() {
        setLegenda('Estou no React');
    }

    return (
        <div>
            <h1>{props.msg}</h1>
            <h2>{legenda}</h2>
            <input value={legenda} onChange={e => setLegenda(e.target.value)}/>
            <button onClick={resetLegenda}> Reset Legenda</button>
        </div>
    )
}



   
