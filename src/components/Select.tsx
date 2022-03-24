
const Select = () => {
    return(
        <select className='select-news' id="news" defaultValue={"0"}>
            <option value="0" disabled selected hidden >Select your news</option>
            <option value="angular">Angular</option>
            <option value="react">React</option>
            <option value="vuejs">Vuejs</option>
        </select>
    )
}

export default Select;