import { useEffect } from "react";

interface props{
    setQuery:Function,
    setHits:Function,
    setPage:Function
}

const Select = ({setQuery,setHits,setPage}:props):JSX.Element => {
    
    const option:string[] = ['Select your news','Angular','React','Vuejs'];
    const filtro:number = option.indexOf( localStorage.getItem('search') || 'Select your news');
    
    useEffect(() => {
        setQuery(localStorage.getItem('search') || undefined);
      return () => {}
    }, [])
    

    const search = (value:string) => {
        const query:string = option[parseInt(value)];
        localStorage.setItem('search',query);
        setHits();
        setPage(0)
        setQuery(query);
    }
    return(
        <select className='select-news' id="news" defaultValue={filtro.toString()} onChange={e=>search(e.target.value)}>
            {
                option.map((value:string,index:number):JSX.Element=>{
                    return index === 0 ?
                    <option key={index} value={index} disabled hidden >{value}</option>
                    :
                    <option key={index} value={index} >{value}</option>
                })
            }
        </select>
    )
}

export default Select;