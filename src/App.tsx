import { createContext, useReducer } from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Faves from './views/Faves';
import Home from './views/Home';

interface porps{
	view:boolean,
	page:number,
	load:string
}

const initialState = {
	view:true,
	page:0,
	load:""
}

/**
 * Reducer - controla los cambios de estado
 * @function
 * @param {porps} state - Objeto de tipo props
 * @param {any} action - Funcion de tipo dispatch
 * @return {porps} Retorna un objeto de tipo props 
 */
const reducer = (state:porps,action:any):any =>{
	switch (action.type) {
		case "incrementPage":	
			return {...state , page: state.page + 1}
		case "resetPage":
			return {...state, page: 0}
		case "changeView":	
			return {...state , view: !state.view}
		case "carga":	
			return {...state , load: "Loading..."}
		case "complete":
			return {...state , load: ""}
		case "noMore":
			return {...state , load: "No more post"}
		default:
			return state
	}
}

/**
 * userContext
 * @typedef {(any|null)} createContext - Definicion de Context
 */
const userContext = createContext<any>(null);

const App = ():JSX.Element => {

	const [state, dispatch] = useReducer(reducer,initialState)

	/** Verifica si nos encontramos al final del scroll e incrementa el estado page 
	 * @function
	 * @param {any} evt - recibe un evento de tipo any
	*/
	const HandlerScroll = (evt:any) =>{
		const { scrollTop, clientHeight, scrollHeight }:any = evt.currentTarget;
		if (scrollHeight - scrollTop === clientHeight && state.load === "") dispatch({type:"incrementPage"});
	}

	return (
		<div className='contenido' onScroll={HandlerScroll}>
			<userContext.Provider value={{state, dispatch}}>
				<Header />
				<Menu/>
				{
					state.view ? <Home /> : <Faves />
				}
			</userContext.Provider>
		</div>
	);
}

export {App, userContext}
