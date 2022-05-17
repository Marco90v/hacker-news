import { useContext, useEffect, useState } from 'react';
import { Item } from '../interfaces/baseInterfaces'
import Card from '../components/Card';
import Select from '../components/Select';
import { userContext } from '../App';

const Home = ():JSX.Element => {

    const {state,dispatch} = useContext<any>(userContext);
    const [totalPage, setTotalPage] = useState<number>(1)
    const fave:Item[] = JSON.parse(localStorage.getItem('myFave') || "[]" ) ;
    const [query, setQuery] = useState<string>();
    const [hits, setHits] = useState<Item[]>([]);

    /**
     * getData - 
     * Verifica si la paguina actual es menor al total de las paguinas,
     * realiza la petición al API, procesa los datos recuperados y cambia el esta hits,
     * asi mismo el estado de carga.
     * @async function
     * @return void
     */
    const getData = async () => {

        if(state.page < totalPage){
            dispatch({type:"carga"});
            const URL:string = `https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=${state.page}`;
            const data = await fetch(URL).then(i=>i.json());
            if(totalPage === 1) setTotalPage(data.nbPages-1);
            const post:Item[] = [];
            data.hits.forEach(({author,created_at,story_title,story_url,objectID}:Item) => {
                const myFave:boolean = fave.find(e=>e.objectID===objectID)?.fave || false;
                if (author && created_at && story_title && story_url) post.push({author,created_at,story_title,story_url,objectID,fave:myFave});
            });
            setHits([...hits , ...post]);
            dispatch({type:"complete"});
        }else{
            dispatch({type:"noMore"});
        }

    }

    /** useEffect detecta modificaciones a los estados de query(filtro|search) y page(paginación) y llama a la funcion getData() */
    useEffect(() => {
        query && getData();
      return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query, state.page]);
    
    return(
        <main className='content' >
            <Select setQuery={setQuery} setHits={setHits} />
            <ul className='cards' >
                {
                    hits.map((item:Item, index:number)=> {
                        return <Card key={item.objectID} item={item} setHits={setHits} /> 
                    })
                }
            </ul>
            {query && <span className='Loading'>{state.load}</span>}
        </main>
    );
}

export default Home;