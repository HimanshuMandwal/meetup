import { useContext } from 'react';
import MeetUpList from '../components/meetups/MeetupList';

import FavoriteContext from '../store/favorite-context';

function FavoriteMeetupPage() {
  const favoriteCtx = useContext(FavoriteContext);
  let content ;
  if(favoriteCtx.totalFavorites === 0){
    content = <p>You got no favorite yet. start Adding Some ?</p>
  } else {
    content =<MeetUpList meetups={favoriteCtx.favorites}/>;
  }

  return (<section>
    <h1>My Favorite</h1>
   {content}
  </section>)
}

export default FavoriteMeetupPage;