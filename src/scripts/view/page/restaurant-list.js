import RestaurantDataSource from '../../../data/restaurant-resourceDB';
import { createRestaurantItemTemplate } from '../template/template-creator';
import '../../component/app-jumbotron';

import drawerWithJumbotron from '../../utils/drawer-with-jumbotron';

const RestaurantList = {
  async render() {
    return `
    <app-jumbotron></app-jumbotron>
    <section class="restaurant-catalog" id="restaurant-catalog">
      <h2 id="catalog-head" class="catalog-head">Restaurant List</h2>
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
    const restaurants = await RestaurantDataSource.restaurantKatalog();
    const catalog = document.querySelector('.catalog');
    restaurants.forEach((restaurant) => {
      catalog.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default RestaurantList;