import { Item } from '../interfaces/baseInterfaces'
import iconFavorite2 from '../assets/icons/favorite/iconmonstr-favorite-2.png';
import iconFavorite3 from '../assets/icons/favorite/iconmonstr-favorite-3.png';
import iconTimer from '../assets/icons/timer/iconmonstr-time-2.png';

interface props{
    index:number,
    item:Item,
    handlerFave:Function,
    fave:boolean
}

const Card = ({index,item,handlerFave,fave}:props):JSX.Element => {

    /** AL hace click en la tarjeta, abre una nueva pestaña con la Url que se encuentra en item.story_url */
    const openTab = () => window.open(item.story_url,'_blank')

    return(
        <div className={`card ${(index+1)%2===0 && 'mLeft'}`}>
            <div className='bodyCard' onClick={openTab}>
                <div className='date'>
                    <img src={iconTimer} alt="timer" />
                    <span>{item.created_at} by {item.author}</span>
                </div>
                <div className='story_title'>{item.story_title}</div>				
            </div>
            <div className='likeCard' onClick={()=>handlerFave(item)}>
                <img src={fave ? iconFavorite3:  iconFavorite2} alt="No Fovorite" />
            </div>
        </div>
    )
}

export default Card;