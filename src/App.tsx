import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Faves from './views/Faves';
import Home from './views/Home';

const App = () => {
	const [view, setView] = useState<number>(0);

	const HandlerScroll = (evt:any) =>{
		const { scrollTop, clientHeight, scrollHeight }:any = evt.currentTarget;
        // if (scrollHeight - scrollTop === clientHeight && loading === false && hasMore === true) {
            if (scrollHeight - scrollTop === clientHeight) {
            console.log("paginar");
        }
        // console.log(scrollTop, clientHeight, scrollHeight);
	}
	return (
		<div className='contenido' onScroll={HandlerScroll}>
			<Header />
			<Menu setView={setView} />
			{
				view === 0 ? <Home/> : <Faves />
			}
		</div>
	);
}


export default App;
