import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Faves from './views/Faves';
import Home from './views/Home';

const App = ():JSX.Element => {
	const [view, setView] = useState<number>(0);
    const [page, setPage] = useState<number>(0);

	const HandlerScroll = (evt:any) =>{
		const { scrollTop, clientHeight, scrollHeight }:any = evt.currentTarget;
		if (scrollHeight - scrollTop === clientHeight) setPage(page+1);
	}
	return (
		<div className='contenido' onScroll={HandlerScroll}>
			<Header />
			<Menu setView={setView} view={view} setPage={setPage} />
			{
				view === 0 ? <Home page={page} setPage={setPage} /> : <Faves />
			}
		</div>
	);
}


export default App;
