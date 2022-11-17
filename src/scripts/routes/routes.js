import RestaurantList from '../view/page/restaurant-list';
import Detail from '../view/page/detail';
import Favorite from '../view/page/favorite';

const routes = {
  '/': RestaurantList,
  '/katalog': RestaurantList,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;