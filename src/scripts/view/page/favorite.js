import FavoriteRestaurantIdb from '../../../data/favorite-restaurant-idb';
import { createErrorTemplate, createRestaurantItemSkeletonTemplate } from '../template/template-creator';
import CONFIG from '../../globals/config';

const Favorite = {
  async render() {
    return `
    <section class="restaurant-catalog favorite" id="restaurant-catalog">
      <h2 id="catalog-head" class="catalog-head">Favorite Restaurant</h2>
      <div class="preloader-item">
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="catalog">
        
      </div>
    </section>
  `;
  },

  async addSkeleton() {
    const template = document.createElement('template');
    template.id = 'restaurant-template';
    template.innerHTML = createRestaurantItemSkeletonTemplate();
    const catalog = document.querySelector('.catalog');
    catalog.append(template);
    try {
      const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
      for (let i = 0; i < restaurant.length; i += 1) {
        catalog.append(template.content.cloneNode(true));
      }
    } catch (err) {
      catalog.innerHTML = createErrorTemplate(err);
    }
  },

  async afterRender() {
    const catalog = document.querySelector('.catalog');
    const restaurantTemplate = document.getElementById('restaurant-template');

    try {
      const favorites = await FavoriteRestaurantIdb.getAllRestaurants();
      catalog.innerHTML = '';
      favorites.forEach((FavoriteRestaurant) => {
        const div = restaurantTemplate.content.cloneNode(true);

        div.querySelector('.source-large').srcset = `${CONFIG.BASE_IMAGE_URL_LARGE + FavoriteRestaurant.pictureId}`;
        div.querySelector('.source-small').srcset = `${CONFIG.BASE_IMAGE_URL_SMALL + FavoriteRestaurant.pictureId}`;
        div.querySelector('.img-thumb').src = `${CONFIG.BASE_IMAGE_URL_MEDIUM + FavoriteRestaurant.pictureId}`;
        div.querySelector('.img-thumb').alt = `Gambar ${FavoriteRestaurant.name}`;
        div.querySelector('.FavoriteRestaurant-item-rating').innerHTML = `<i class="fa-solid fa-star"></i>${FavoriteRestaurant.rating}`;
        div.querySelector('.restaurant-item-title').innerHTML = `<a href="#/detail/${FavoriteRestaurant.id}">${FavoriteRestaurant.name}</a>`;
        div.querySelector('.restaurant-item-city').innerHTML = `City: <span class="city-restaurant">${FavoriteRestaurant.city}</span> `;
        div.querySelector('.restaurant-item-description').textContent = FavoriteRestaurant.description;

        catalog.append(div);
      });
    } catch (err) {
      catalog.innerHTML = createErrorTemplate(err);
    }
  },
};

export default Favorite;