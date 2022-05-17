import { Item } from '../interfaces/baseInterfaces'
import iconFavorite2 from '../assets/icons/favorite/iconmonstr-favorite-2.png';
import iconFavorite3 from '../assets/icons/favorite/iconmonstr-favorite-3.png';
import iconTimer from '../assets/icons/timer/iconmonstr-time-2.png';
import { memo } from 'react';

interface props{
    item:Item,
    setHits:Function
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
                    <span>{item.created_at} by {item.author}</span>
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