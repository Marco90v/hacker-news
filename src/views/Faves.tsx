import { useEffect, useState } from 'react';
import Card from '../components/Card';

interface Item{
	author: string,
	story_title: string,
	story_url: string,
	created_at: string
}

interface Hits{
	hits: Array<Item>
}


const Faves = ():JSX.Element => {

    const fave:Item[] = JSON.parse(localStorage.getItem('myFave') || "[]" ) ;
    const [myFave, setMyFave] = useState<Item[]>(fave);

    useEffect(() => {
        localStorage.setItem( 'myFave' , JSON.stringify(myFave) );
      return () => {}
    }, [myFave])

    const jsonToString = (valor:any):string => JSON.stringify(valor);

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