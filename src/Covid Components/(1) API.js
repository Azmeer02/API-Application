import React from 'react';
import Cards from './(2) Stats';

async function API(){
            const url = await fetch ("https://covid19.mathdro.id/api");
            let {confirmed,recovered,deaths,lastUpdate} = await url.json();
                // console.log(confirmed);
                // console.log(recovered);
                // console.log(deaths);
                // console.log(lastUpdate);
    return(
        <div>
            <Cards data = {confirmed,recovered,deaths,lastUpdate}/>
        </div>
    )
}

export default API;