import { useContext } from 'react';
import classes from './MeetupItem.module.css';
import Card from '../UI/Card';
import FavoriteContext from '../../store/favorite-context';

function MeetupItem(props) {
  const favoriteCtx = useContext(FavoriteContext);
  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);
  function toggleFavoriteStatusHandler(){
    if(itemIsFavorite){
      favoriteCtx.removeFavorite(props.id);
    } else {
      favoriteCtx.addFavorite({
        ...props
      });
    }
  }
  return(
    <li className={classes.item}>
      <Card>
      <div className={classes.image}>
        <img src={props.image}  alt ={props.title}/>
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button onClick={toggleFavoriteStatusHandler}>
         { itemIsFavorite? 'Remove From Favorite': 'To favorite'}
        </button>
      </div>
      </Card>
    </li>
  )
}

export default MeetupItem;