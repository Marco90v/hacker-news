import { useEffect } from "react";

interface props{
    setQuery:Function,
    setHits:Function,
    setPage:Function
}

const Select = ({setQuery,setHits,setPage}:props):JSX.Element => {
    
    const option:string[] = ['Select your news','Angular','React','Vuejs'];
    const filtro:number = option.indexOf( localStorage.getItem('search') || 'Select your news');
    
    /** Obtiene la última búsqueda(filtro) y lo asigna al query, si no existe, el estado queda undefined */
    useEffect(() => {
        setQuery(localStorage.getItem('search') || undefined);
      return () => {}
    }, [setQuery])
    
    /** Cuando se aplica una búsqueda, se actualiza el localStorage y se los estados pertinentes(hits,page,query) */
    const search = (value:string) => {
        const query:string = option[parseInt(value)];
        localStorage.setItem('search',query);
        setHits();
        /** Page vuelve a 0 porque se cambia de búsqueda (Angular, React, Vuejs) */
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