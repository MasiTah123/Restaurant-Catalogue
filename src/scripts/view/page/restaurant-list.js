import RestaurantDataSource from '../../../data/restaurant-resourceDB';
import { createRestaurantItemTemplate, createErrorTemplate } from '../template/template-creator';
import '../../component/app-jumbotron';

import drawerWithJumbotron from '../../utils/drawer-with-jumbotron';

const RestaurantList = {
  async render() {
    return `
    <app-jumbotron></app-jumbotron>
    <section class="restaurant-catalog" id="restaurant-catalog">
      <h2 id="catalog-head" class="catalog-head">Restaurant List</h2>
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

  async afterRender() {
    drawerWithJumbotron.init({
      jumbotron: document.querySelector('app-jumbotron'),
      drawer: document.querySelector('#drawer'),
    });
    const catalog = document.querySelector('.catalog');
    try {
      const restaurants = await RestaurantDataSource.restaurantKatalog();
      document.querySelector('.preloader-item').style.display = 'none';
      restaurants.forEach((restaurant) => {
        catalog.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (err) {
      document.querySelector('.preloader-item').style.display = 'none';
      catalog.innerHTML += createErrorTemplate(err);
    }
  },
};

export default RestaurantList;