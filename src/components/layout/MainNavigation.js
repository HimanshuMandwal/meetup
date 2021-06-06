import { Link } from 'react-router-dom';
import  { useContext } from 'react';
import classes from './MainNavigation.module.css';
import FavoriteContext from '../../store/favorite-context';

function MainNavigation() {
  const FavoriteCtx = useContext(FavoriteContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        Meetups
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/"> All Meetups </Link>
          </li>
          <li><Link to="/new-meetup"> Add Meetup </Link>
            </li>
          <li><Link to="/favorites"> Favorites </Link>
            <span className={classes.badge}>{FavoriteCtx.totalFavorites}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;