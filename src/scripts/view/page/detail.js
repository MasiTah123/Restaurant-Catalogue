import UrlParser from '../../routes/url-parser';
import RestaurantDataSource from '../../../data/restaurant-resourceDB';
import { createDetailRestaurantTemplate } from '../template/template-creator';
import insertDataToDetail from '../../utils/insert-data-to-detail';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import AddReview from '../../utils/add-review';

const Detail = {
  async render() {
    return `
    <section class="restaurant-detail" id="restaurant-detail"></section>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDataSource.detailRestaurant(url.id);
    const restaurantDetail = document.querySelector('#restaurant-detail');

    restaurantDetail.innerHTML = createDetailRestaurantTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        city: restaurant.city,
        address: restaurant.address,
      },
    });

    insertDataToDetail.init({
      foods: restaurant.menus.foods,
      drinks: restaurant.menus.drinks,
      reviews: restaurant.customerReviews,
      elements: {
        food: document.querySelector('.food-list'),
        drink: document.querySelector('.drink-list'),
        review: document.querySelector('.customer-review'),
      },
    });

    AddReview.init({
      id: url.id,
      popupBtn: document.querySelector('.pop-up-form'),
      addForm: document.querySelector('#add-form'),
      reviewElement: document.querySelector('.customer-review'),
    });
  },
};

export default Detail;