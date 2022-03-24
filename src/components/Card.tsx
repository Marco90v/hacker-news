import iconFavorite2 from '../assets/icons/favorite/iconmonstr-favorite-2.png';
import iconTimer from '../assets/icons/timer/iconmonstr-time-2.png';

interface props{
    index:number,
    item:{
        author: string,
        story_title: string,
        story_url: string,
        created_at: string
    }
}

const Card = ({index,item}:props):JSX.Element => {

    // console.log(item);

    return(
        <div className={`card ${(index+1)%2===0 && 'mLeft'}`}>
            <div className='bodyCard'>
                <div className='date'>
                    <img src={iconTimer} alt="timer" />
                    <span>{item.created_at} by {item.author}</span>
                </div>
                <div className='story_title'>{item.story_title}</div>				
            </div>
            <div className='likeCard'>
                <img src={iconFavorite2} alt="No Fovorite" />
            </div>
        </div>
    )
}

export default Card;