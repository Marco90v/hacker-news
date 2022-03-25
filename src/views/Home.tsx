import { useEffect, useState } from 'react';
import { Item, Hits} from '../interfaces/baseInterfaces'
import Card from '../components/Card';
import Select from '../components/Select';
interface props{
    page:number,
    setPage:Function
}

const Home = ({page,setPage}:props):JSX.Element => {
    
    /** Obtención de favoritos del localStorage, declaración de estados iniciales. */
    const fave:Item[] = JSON.parse(localStorage.getItem('myFave') || "[]" ) ;
    const [query, setQuery] = useState<string>();
    /** Hits se almacena como objeto y no como arreglo, en dado de caso que sea necesario el uso de los datos del mismo nivel de la clave hits, obtenido del api/rest */
    const [hits, setHits] = useState<Hits>();
    const [myFave, setMyFave] = useState<Item[]>(fave);
    const [carga, setCarga] = useState<string>('Loading...');

    /** useEffect para petición fetch, al detectar modificaciones a los estados de query(filtro|search) y page(paginación) */
    useEffect(() => {
        const URL:string = `https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=${page}`;
        if(query !== undefined){
            setCarga('Loading...');
            fetch(URL).then(hits=>hits.json())
                .then((data:Hits)=>{
                    /** Si existen datos de retorno, se destructora, se verifica que los campos necesarios no sean nulos y se almacenan en un nuevo arreglo definido como post. */
                    if(data.hits.length>0){
                        const post:Item[] = hits?.hits || [];
                        data.hits.forEach( ({author,created_at,story_title,story_url}:Item) => {
                            if (author && created_at && story_title && story_url) post.push({author,created_at,story_title,story_url})
                        })
                        setHits({hits:post});
                    }else{
                        setCarga('No more post');
                    }
                })
                .catch( err=>{
                    setCarga('Connection Error'); 
                    console.log(err);
                });
            }
      return () => {}
        
    }, [query,page]);

    /** Useeffect para actualizar local storage cuando de modifique el estado de favoritos */
    useEffect(() => {
        localStorage.setItem( 'myFave' , JSON.stringify(myFave) );
      return () => {}
    }, [myFave])
    
    /** Convierte un valor JSON en string */
    const jsonToString = (valor:any):string => JSON.stringify(valor);

    /** Valida que el contenido de una cadena exista en otra cadena */
    const validToFave = (value1:string,value2:string):boolean => value1.includes(value2);

    /** Si el item existe en el arreglo myFave, lo filtra(elimina) y actualiza el estado myFave, si no existe lo agrega al estado myFave */
    const addFave = (item:Item) =>{
        const a:string =jsonToString(myFave);
        const b:string = jsonToString(item);
        validToFave(a,b) ? setMyFave( myFave.filter(e=>jsonToString(e)!==b) ) : setMyFave(e=>[item,...e]);
    }

    return(
        <div className='content' >
            <Select setQuery={setQuery} setHits={setHits} setPage={setPage} />
            <div className='cards' >
                {
                    hits &&
                    hits.hits.map((item:Item, index:number)=> {
                        /** Si el post obtenido de la petición, se encuentra en myFave, se declara la variable como true y se pasa al componente Card */
                        const fave:boolean = JSON.stringify(myFave).includes(JSON.stringify(item))
                        return <Card key={index} index={index} item={item} addFave={addFave} fave={fave} /> 
                    })
                }
                
            </div>
            <span className='Loading'>{carga}</span>
        </div>
    );
}

export default Home;