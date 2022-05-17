import { useContext } from "react";
import { userContext } from "../App";

const Menu = ():JSX.Element =>{
    const {state,dispatch} = useContext<any>(userContext);

    /** changeView Reinicia page a 0 (Cero) y cambia la vista (true | false)
     * @function
     * @return void
     */
    const changeView = () =>{
        dispatch({type:"resetPage"});
        dispatch({type:"changeView"});
    }
    return(
        <nav className='menu'>
            <ul>
                <li className={`btn-menu btn-menu-ALL ${state.view && 'btn-menu-active'}` } onClick={()=>changeView()} >All</li>
                <li className={`btn-menu btn-menu-FAVES ${!state.view && 'btn-menu-active'}`} onClick={()=>changeView()} >My faves</li>
            </ul>
        </nav>
    );
}

export default Menu;