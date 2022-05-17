import { useState } from 'react';
import { Item } from '../interfaces/baseInterfaces'

import Card from '../components/Card';

const Faves = ():JSX.Element => {

    /** Se obtiene los posts favoritos que se encuentran almacenados en el localStorage y se agregan al estado */
    const fave:Item[] = JSON.parse(localStorage.getItem('myFave') || "[]" ) ;
    const [myFave, setMyFave] = useState<Item[]>(fave);

    return(
        <div className='content faves'>
            <div className='cards' >
                {
                    myFave.map((item:Item)=>{
                        return <Card key={item.objectID} item={item} setHits={setMyFave} />
                    })
                }
                
            </div>
        </div>
    )
}

export default Faves;