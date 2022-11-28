/* eslint-disable max-len */
import RestaurantDataSource from '../../../data/restaurant-resourceDB';
import { createErrorTemplate, createRestaurantItemSkeletonTemplate } from '../template/template-creator';
import '../../component/app-jumbotron';
import CONFIG from '../../globals/config';
import drawerWithJumbotron from '../../utils/drawer-with-jumbotron';

const RestaurantList = {
  async render(element) {
    // eslint-disable-next-line no-param-reassign
    element.innerHTML = `
    <app-jumbotron></app-jumbotron>
    <section class="restaurant-catalog" id="restaurant-catalog">
      <h2 id="catalog-head" class="catalog-head">Restaurant List</h2>
      <div class="catalog">
      
      </div>
    </section>
    `;
    const catalog = document.querySelector('.catalog');
    catalog.innerHTML = createRestaurantItemSkeletonTemplate();
    const template = document.getElementById('restaurant-template');
    try {
      const restaurant = await RestaurantDataSource.restaurantKatalog();
      for (let i = 0; i < restaurant.length; i += 1) {
        catalog.append(template.content.cloneNode(true));
      }
    } catch (err) {
      catalog.style.display = 'flex';
      catalog.innerHTML = createErrorTemplate(err);
    }
  },

  async afterRender() {
    drawerWithJumbotron.init({
      jumbotron: document.querySelector('app-jumbotron'),
      drawer: document.querySelector('#drawer'),
    });

    const catalog = document.querySelector('.catalog');
    const restaurantTemplate = document.getElementById('restaurant-template');
    try {
      const restaurants = await RestaurantDataSource.restaurantKatalog();
      catalog.innerHTML = '';
      restaurants.forEach((restaurant) => {
        const div = restaurantTemplate.content.cloneNode(true);

        div.querySelector('#source-large').srcset = `${CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId}`;
        div.querySelector('#source-small').srcset = `${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}`;
        div.querySelector('.img-thumb').src = `${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}`;
        div.querySelector('.img-thumb').alt = `Gambar ${restaurant.name}`;
        div.querySelector('.img-thumb').classList.remove('loading');
        div.querySelector('.restaurant-item-rating').innerHTML = `<i class="fa-solid fa-star"></i>${restaurant.rating}`;
        div.querySelector('.restaurant-item-title').innerHTML = `<a href="#/detail/${restaurant.id}">${restaurant.name}</a>`;
        div.querySelector('.restaurant-item-city').innerHTML = `City: <span class="city-restaurant">${restaurant.city}</span> `;
        div.querySelector('.restaurant-item-description').innerHTML = restaurant.description;

        catalog.append(div);
      });
    } catch (err) {
      catalog.style.display = 'flex';
      catalog.innerHTML = createErrorTemplate(err);
    }
  },
};

export default RestaurantList;