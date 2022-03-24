
interface props{
    setView:Function
}

const Menu = ({setView}:props) =>{
    return(
        <div className='menu'>
            <ul>
                <li className='btn-menu btn-menu-ALL btn-menu-active' onClick={()=>setView(0)} >All</li>
                <li className='btn-menu btn-menu-FAVES' onClick={()=>setView(1)} >My faves</li>
            </ul>
        </div>
    );
}

export default Menu;