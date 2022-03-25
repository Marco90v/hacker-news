
interface props{
    view:number,
    setView:Function,
    setPage:Function
}

const Menu = ({view,setView,setPage}:props):JSX.Element =>{
    const changeView = (view:number) =>{
        setPage(0);
        setView(view)
    }
    return(
        <div className='menu'>
            <ul>
                <li className={`btn-menu btn-menu-ALL ${view === 0 && 'btn-menu-active'}` } onClick={()=>changeView(0)} >All</li>
                <li className={`btn-menu btn-menu-FAVES ${view === 1 && 'btn-menu-active'}`} onClick={()=>changeView(1)} >My faves</li>
            </ul>
        </div>
    );
}

export default Menu;