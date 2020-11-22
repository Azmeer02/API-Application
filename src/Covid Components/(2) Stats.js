import React from 'react';

function Cards({confirmed, recovered, deaths, lastUpdate}){
    return(
        <div>
        {confirmed}
        {recovered}
        {deaths}
        {lastUpdate}
        </div>
    )
}

export default Cards;
