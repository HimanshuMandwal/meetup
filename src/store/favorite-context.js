import { createContext, useState } from 'react';

const FavoriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite:(favoriteMeetup)=>{},
  removeFavorite:(meetUpId)=>{},
  itemIsFavorite:(meetUpId)=>{},
});

export function FavoriteContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((previosUserFavorites) =>
      previosUserFavorites.concat(favoriteMeetup));
  }

  function removeFavoriteHandler(meetUpId) {
    setUserFavorites((previosUserFavorites) => {
      return previosUserFavorites.filter(meetup => meetUpId !== meetup.id);
    })
  }

  function itemIsFavoriteHandler(meetUpId) {
    return userFavorites.some((meetup)=> meetUpId === meetup.id);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite:addFavoriteHandler,
    removeFavorite:removeFavoriteHandler,
    itemIsFavorite:itemIsFavoriteHandler,
  };
  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  )
}

export default FavoriteContext;