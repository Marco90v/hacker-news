interface props{
    setQuery:Function,
    setHits:Function,
    setPage:Function
}

const Select = ({setQuery,setHits,setPage}:props):JSX.Element => {
    
    const option:string[] = ['Select your news','Angular','React','Vuejs'];
    const search = (value:string) => {
        setHits();
        setPage(0)
        setQuery(option[parseInt(value)]);
    }
    return(
        <select className='select-news' id="news" defaultValue={"0"} onChange={e=>search(e.target.value)}>
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