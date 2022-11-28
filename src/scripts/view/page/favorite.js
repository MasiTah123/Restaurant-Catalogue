import FavoriteRestaurantIdb from '../../../data/favorite-restaurant-idb';
import { createErrorTemplate, createRestaurantItemSkeletonTemplate } from '../template/template-creator';
import CONFIG from '../../globals/config';

const Favorite = {
  async render(element) {
    // eslint-disable-next-line no-param-reassign
    element.innerHTML = `
    <section class="restaurant-catalog favorite" id="restaurant-catalog">
      <h2 id="catalog-head" class="catalog-head">Favorite Restaurant</h2>
      <link rel="preconnect" href="https://restaurant-api.dicoding.dev/">
      <div class="catalog">
        
      </div>
    </section>
  `;
    const catalog = document.querySelector('.catalog');
    catalog.innerHTML = createRestaurantItemSkeletonTemplate();
    const template = document.getElementById('restaurant-template');
    try {
      const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
      for (let i = 0; i < restaurant.length; i += 1) {
        catalog.append(template.content.cloneNode(true));
      }
    } catch (err) {
      catalog.style.display = 'flex';
      catalog.innerHTML = createErrorTemplate(err);
    }
  },

  async afterRender() {
    const catalog = document.querySelector('.catalog');
    const restaurantTemplate = document.getElementById('restaurant-template');

    try {
      const favorites = await FavoriteRestaurantIdb.getAllRestaurants();
      if (favorites.length === 0) {
        catalog.style.display = 'flex';
        catalog.innerHTML = createErrorTemplate('No Favorites Restaurant Found');
        return;
      }
      catalog.innerHTML = '';
      favorites.forEach((FavoriteRestaurant) => {
        const div = restaurantTemplate.content.cloneNode(true);

        div.querySelector('#source-large').setAttribute('data-srcset', `${CONFIG.BASE_IMAGE_URL_LARGE + FavoriteRestaurant.pictureId}`);
        div.querySelector('#source-small').setAttribute('data-srcset', `${CONFIG.BASE_IMAGE_URL_SMALL + FavoriteRestaurant.pictureId}`);
        div.querySelector('.img-thumb').setAttribute('data-src',`${CONFIG.BASE_IMAGE_URL_MEDIUM + FavoriteRestaurant.pictureId}`);
        div.querySelector('.img-thumb').alt = `Gambar ${FavoriteRestaurant.name}`;
        div.querySelector('.img-thumb').classList.remove('loading');
        div.querySelector('.restaurant-item-rating').innerHTML = `<i class="fa-solid fa-star"></i>${FavoriteRestaurant.rating}`;
        div.querySelector('.restaurant-item-title').innerHTML = `<a href="#/detail/${FavoriteRestaurant.id}">${FavoriteRestaurant.name}</a>`;
        div.querySelector('.restaurant-item-city').innerHTML = `City: <span class="city-restaurant">${FavoriteRestaurant.city}</span> `;
        div.querySelector('.restaurant-item-description').textContent = FavoriteRestaurant.description;

        catalog.append(div);
      });
    } catch (err) {
      catalog.style.display = 'flex';
      catalog.innerHTML = createErrorTemplate(err);
    }
  },
};

export default Favorite;