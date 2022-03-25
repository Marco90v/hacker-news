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
    
    const [query, setQuery] = useState<string>();
    const [hits, setHits] = useState<Hits>({hits:[]});

    useEffect(() => {
        const URL:string = `https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=${page}`;
        query !== undefined &&
            fetch(URL).then(hits=>hits.json())
                .then((data:Hits)=>{
                    const post:Hits = hits || {hits:[]};
                    data.hits.forEach(({author,created_at,story_title,story_url}:Item)=>{
                        if (author && created_at && story_title && story_url) post.hits.push({author,created_at,story_title,story_url})
                    })
                    setHits(post);
                })
                .catch( err=>console.log(err) );
        
    }, [query,page,hits]);

    return(
        <div className='content' >
            <Select setQuery={setQuery} setHits={setHits} setPage={setPage} />
            <div className='cards' >
                {
                    typeof hits !== 'undefined' &&
                    hits.hits.map((item:Item, index:number)=>{
                        return <Card key={index} index={index} item={item}/>
                    })
                }
                
            </div>
        </div>
    );
}

export default Home;