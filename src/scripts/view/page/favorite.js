import FavoriteRestaurantIdb from '../../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../template/template-creator';

const Favorite = {
  async render() {
    return `
    <section class="restaurant-catalog favorite" id="restaurant-catalog">
      <h2 id="catalog-head" class="catalog-head">Favorite Restaurant</h2>
      <div class="catalog">
        
      </div>
    </section>
  `;
  },

  async afterRender() {
    const favorites = await FavoriteRestaurantIdb.getAllRestaurants();
    const catalog = document.querySelector('.catalog');

    favorites.forEach((FavoriteRestaurant) => {
      catalog.innerHTML += createRestaurantItemTemplate(FavoriteRestaurant);
    });
  },
};

export default Favorite;