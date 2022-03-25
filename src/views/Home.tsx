import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Select from '../components/Select';

interface Item{
	author: string,
	story_title: string,
	story_url: string,
	created_at: string
}
interface Hits{
	hits: Array<Item>
}
interface props{
    page:number,
    setPage:Function
}


const Home = ({page,setPage}:props):JSX.Element => {
    
    const fave:Item[] = JSON.parse(localStorage.getItem('myFave') || "[]" ) ;
    const [query, setQuery] = useState<string>();
    const [hits, setHits] = useState<Hits>();
    const [myFave, setMyFave] = useState<Item[]>(fave);

    useEffect(() => {
        const URL:string = `https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=${page}`;
        query !== undefined &&
            fetch(URL).then(hits=>hits.json())
                .then((data:Hits)=>{
                    const post:Item[] = hits?.hits || [];
                    data.hits.forEach( ({author,created_at,story_title,story_url}:Item) => {
                        if (author && created_at && story_title && story_url) post.push({author,created_at,story_title,story_url})
                    })
                    setHits({hits:post});
                })
                .catch( err=>console.log(err) );
      return () => {}
        
    }, [query,page]);


    useEffect(() => {
        localStorage.setItem( 'myFave' , JSON.stringify(myFave) );
      return () => {}
    }, [myFave])
    
    const jsonToString = (valor:any):string => JSON.stringify(valor);

    const validToFave = (value1:string,value2:string):boolean => value1.includes(value2);

    const addFave = (item:Item) =>{
        const a:string =jsonToString(myFave);
        const b:string = jsonToString(item);
        validToFave(a,b) ? setMyFave( myFave.filter(e=>jsonToString(e)!==b) ) : setMyFave(e=>[...e,item]);
    }

    return(
        <div className='content' >
            <Select setQuery={setQuery} setHits={setHits} setPage={setPage} />
            <div className='cards' >
                {
                    hits &&
                    hits.hits.map((item:Item, index:number)=> {
                        const fave:boolean = JSON.stringify(myFave).includes(JSON.stringify(item))
                        return <Card key={index} index={index} item={item} addFave={addFave} fave={fave} /> 
                    })
                }
                
            </div>
        </div>
    );
}

export default Home;