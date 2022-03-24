import iconFavorite2 from '../assets/icons/favorite/iconmonstr-favorite-2.png';
import iconTimer from '../assets/icons/timer/iconmonstr-time-2.png';

const Card = () => {
    return(
        <div className='card'>
            <div className='bodyCard'>
                <div className='date'>
                    <img src={iconTimer} alt="timer" />
                    <span>3 hours ago by author</span>
                </div>
                <div className='story_title'>Yes, React is taking over front-end development. The question is why.</div>				
            </div>
            <div className='likeCard'>
                <img src={iconFavorite2} alt="No Fovorite" />
            </div>
        </div>
    )
}

export default Card;