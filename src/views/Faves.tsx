import { useEffect, useState } from 'react';
import { Item } from '../interfaces/baseInterfaces'

import Card from '../components/Card';

const Faves = ():JSX.Element => {

    /** Se obtiene los posts favoritos que se encuentran almacenados en el localStorage y se agregan al estado */
    const fave:Item[] = JSON.parse(localStorage.getItem('myFave') || "[]" ) ;
    const [myFave, setMyFave] = useState<Item[]>(fave);

    /** Useeffect para actualizar local storage cuando de modifique el estado de favoritos */
    useEffect(() => {
        localStorage.setItem( 'myFave' , JSON.stringify(myFave) );
      return () => {}
    }, [myFave])

    /** Convierte un valor JSON en string */
    const jsonToString = (valor:any):string => JSON.stringify(valor);

    /** Se filtra(elimina) el item de myFave */
    const addFave = (item:Item) =>{
        const a:string = jsonToString(item);
        setMyFave( myFave.filter(e=>jsonToString(e)!==a) )
    }
    return(
        <div className='content faves'>
            <div className='cards' >
                {
                    myFave.map((item:Item, index:number)=>{
                        return <Card key={index} index={index} item={item} addFave={addFave} fave={true} />
                    })
                }
                
            </div>
        </div>
    )
}

export default Faves;