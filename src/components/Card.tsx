import { Item } from '../interfaces/baseInterfaces'
import iconFavorite2 from '../assets/icons/favorite/iconmonstr-favorite-2.png';
import iconFavorite3 from '../assets/icons/favorite/iconmonstr-favorite-3.png';
import iconTimer from '../assets/icons/timer/iconmonstr-time-2.png';
import { memo } from 'react';

interface props{
    item:Item,
    setHits:Function
}

/**
 * timeElapsed - 
 * Calcula el tiempo transcurido desde la fecha de publicacion del post hasta la fecha actual.
 * @param {string} timeCreate - Fecha de Creación en formato string
 * @returns {string} - Regresa una cadena ejemplo (1 Dia)
 */
const timeElapsed = (timeCreate:string) =>{
    const day1 = new Date(timeCreate).getTime();
    const day2 = new Date().getTime();
    let t = (day2 - day1) / 1000; // Convierte Milisegundos a }Segundos
    if(t >= 60){
        t = t / 60; // Convierte de Segundos a Minutos
        if(t >= 60){
            t = t / 60; // Convierte de Minutos a Horas
            if(t >= 24){
                t = t / 24; // Convierte de Horas a Dias
                if(t > 1){
                    return `${t.toFixed()} Dias`;
                }else{
                    return `${t.toFixed()} Dia`;
                }
            }else{
                return `${t.toFixed()} Horas`;
            }
        }else{
            return `${t.toFixed()} Minutos`;
        }
    }else{
        return `${t.toFixed()} Segundos`;
    }
}


const Card = ({item,setHits}:props):JSX.Element => {

    /** openTab -
     * Abre una nueva pestaña con la Url que se encuentra en item.story_url
     * @retun void
     */
    const openTab = () => window.open(item.story_url,'_blank');
    
    /**
     * handleFave -
     * Cambia la popiedad "fave" a su valor contrario (true | falce).
     * Agrega o elimina del localStorage los favorito
     * @function
     * @return void
     */
    const handleFave = ()=>{
        setHits( (e:Item[]) => {
            return e.map(i=> i.objectID === item.objectID ? {...i, fave:!i.fave} : i);
        });

        const fave:Item[] = JSON.parse(localStorage.getItem('myFave') || "[]" ) ;
        if(item.fave){
            const newFave:Item[] = fave.filter(e=>e.objectID !== item.objectID)
            localStorage.setItem('myFave', JSON.stringify(newFave));

        }else{
            fave.push({...item,fave:true})
            localStorage.setItem('myFave', JSON.stringify(fave));

        }
    }

    return(
        // <li className={`card ${(index+1)%2===0 && 'mLeft'}`}>
        <li className={'card'}>
            <div className='bodyCard' onClick={openTab}>
                <div className='date'>
                    <img src={iconTimer} alt="timer" />
                    <span>{timeElapsed(item.created_at)} ago by {item.author}</span>
                </div>
                <div className='story_title'>{item.story_title}</div>				
            </div>
            <div className='likeCard' onClick={()=>handleFave()} >
                <img src={item.fave ? iconFavorite3:  iconFavorite2} alt="No Fovorite" />
            </div>
        </li>
    )
}



export default memo(Card);