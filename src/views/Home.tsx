import { useState } from 'react';
import Card from '../components/Card';
import Select from '../components/Select';

interface Data{
	author: string,
	story_title: string,
	story_url: string,
	created_at: string
}


interface Data2{
	hits: Array<Data>
}


const Home = () => {
    const data:Data2 = {
        hits:
		[
			{author:"author", story_title:"3 hours ago", story_url:"url", created_at:"Yes, React is taking over front-end development. The question is why."},
			{author:"author", story_title:"3 hours ago", story_url:"url", created_at:"Yes, React is taking over front-end development. The question is why."},
			{author:"author", story_title:"3 hours ago", story_url:"url", created_at:"Yes, React is taking over front-end development. The question is why."},
			{author:"author", story_title:"3 hours ago", story_url:"url", created_at:"Yes, React is taking over front-end development. The question is why."},
			{author:"author", story_title:"3 hours ago", story_url:"url", created_at:"Yes, React is taking over front-end development. The question is why."},
			{author:"author", story_title:"3 hours ago", story_url:"url", created_at:"Yes, React is taking over front-end development. The question is why."},
			{author:"author", story_title:"3 hours ago", story_url:"url", created_at:"Yes, React is taking over front-end development. The question is why."},
			{author:"author", story_title:"3 hours ago", story_url:"url", created_at:"Yes, React is taking over front-end development. The question is why."},
            {author:"author", story_title:"3 hours ago", story_url:"url", created_at:"Yes, React is taking over front-end development. The question is why."},
			{author:"author", story_title:"3 hours ago", story_url:"url", created_at:"Yes, React is taking over front-end development. The question is why."},
			{author:"author", story_title:"3 hours ago", story_url:"url", created_at:"Yes, React is taking over front-end development. The question is why."},
			{author:"author", story_title:"3 hours ago", story_url:"url", created_at:"Yes, React is taking over front-end development. The question is why."},
			{author:"author", story_title:"3 hours ago", story_url:"url", created_at:"Yes, React is taking over front-end development. The question is why."},
			{author:"author", story_title:"3 hours ago", story_url:"url", created_at:"Yes, React is taking over front-end development. The question is why."},
			{author:"author", story_title:"3 hours ago", story_url:"url", created_at:"Yes, React is taking over front-end development. The question is why."},
			{author:"author", story_title:"3 hours ago", story_url:"url", created_at:"Yes, React is taking over front-end development. The question is why."},
		]
    };
    const [hits, setHits] = useState<Data2>(data);
    return(
        <div className='content' >
            <Select/>
            <div className='' >
                {
                    hits.hits.map((item:Data, index:number)=>{
                        return <Card key={index}/>
                    })
                }
                
            </div>
        </div>
    );
}

export default Home;