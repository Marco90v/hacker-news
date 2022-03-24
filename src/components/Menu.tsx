
interface props{
    view:number,
    setView:Function
}

const Menu = ({view,setView}:props):JSX.Element =>{
    return(
        <div className='menu'>
            <ul>
                <li className={`btn-menu btn-menu-ALL ${view === 0 && 'btn-menu-active'}` } onClick={()=>setView(0)} >All</li>
                <li className={`btn-menu btn-menu-FAVES ${view === 1 && 'btn-menu-active'}`} onClick={()=>setView(1)} >My faves</li>
            </ul>
        </div>
    );
}

export default Menu;